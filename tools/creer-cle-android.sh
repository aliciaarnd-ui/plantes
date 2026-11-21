#!/usr/bin/env bash
# Crée la clé de signature de l'APK (une seule fois), la range dans _secrets
# et la transmet à GitHub sous forme de secrets. Rien n'est affiché ni commité.
set -euo pipefail
export MSYS_NO_PATHCONV=1  # Git Bash : ne pas convertir "/CN=..." en chemin
S="$HOME/Documents/IA/_secrets/plantes"; REPO="aliciaarnd-ui/plantes"
mkdir -p "$S"; cd "$S"
if [ ! -f herbier-release.p12 ]; then
  openssl rand -base64 24 | tr -d '/+=\r\n' > herbier-release.pass
  openssl req -x509 -newkey rsa:3072 -nodes -keyout k.pem -out c.pem -days 10000 -subj "/CN=Herbier" 2>/dev/null
  openssl pkcs12 -export -inkey k.pem -in c.pem -name herbier -out herbier-release.p12 \
    -passout file:herbier-release.pass -keypbe AES-256-CBC -certpbe AES-256-CBC -macalg sha256
  rm -f k.pem c.pem
  echo "Clé créée dans $S"
else
  echo "Clé existante réutilisée ($S)"
fi
base64 -w0 herbier-release.p12 | gh secret set ANDROID_KEYSTORE_B64 -R "$REPO"
gh secret set ANDROID_KEYSTORE_PASS -R "$REPO" < herbier-release.pass
gh workflow run apk.yml -R "$REPO"
echo "Secrets envoyés, construction de l'APK lancée."
