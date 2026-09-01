#!/bin/bash
# Install docs/email-signature.html into Apple Mail, exactly as written.
#
# Pasting into Mail's Signatures pane does not work: the editor rebuilds the
# markup, stacks the table vertically and redraws images at their natural size.
# Mail stores each signature as a .mailsignature file, though, and it will use
# whatever is in that file. So we write the file directly and lock it.
#
#   1. In Mail, make a new signature and type one character into it.
#   2. Quit Mail completely (Cmd-Q, not just close the window).
#   3. Run this script.
#   4. Open Mail. Pick the signature under Choose Signature for your account.
#
# Run it again after editing the HTML. To let Mail edit it again itself:
#   chflags nouchg ~/Library/Mail/V*/MailData/Signatures/*.mailsignature

set -euo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HTML="$REPO/docs/email-signature.html"

[ -f "$HTML" ] || { echo "Not found: $HTML" >&2; exit 1; }

if pgrep -xq Mail; then
  echo "Mail is running. Quit it first (Cmd-Q) — it overwrites these files on exit." >&2
  exit 1
fi

DIR=$(/bin/ls -d "$HOME"/Library/Mail/V*/MailData/Signatures 2>/dev/null | tail -1 || true)
if [ -z "$DIR" ]; then
  echo "No Mail signatures folder. Open Mail, create a signature, quit Mail, retry." >&2
  echo "(If this shell lacks Full Disk Access, System Settings → Privacy & Security" >&2
  echo " → Full Disk Access, and add your terminal.)" >&2
  exit 1
fi

# The newest one is the placeholder just created in step 1.
FILE=$(/bin/ls -t "$DIR"/*.mailsignature 2>/dev/null | head -1 || true)
[ -n "$FILE" ] || { echo "No .mailsignature in $DIR — create one in Mail first." >&2; exit 1; }

echo "Target:  $FILE"
cp -p "$FILE" "$FILE.backup-$(date +%Y%m%d%H%M%S)"
chflags nouchg "$FILE" 2>/dev/null || true

# Keep Mail's own headers (everything up to the first blank line); they carry
# the Message-Id that ties the file to the signature Mail shows in its list.
HEADERS=$(awk 'NF==0{exit} {print}' "$FILE")

# Drop the leading HTML comment: it is documentation for us, not for the wire.
BODY=$(perl -0777 -pe 's/\A\s*<!--.*?-->\s*//s' "$HTML")

{
  printf '%s\n\n' "$HEADERS"
  printf '<body style="margin:0;">\n%s\n</body>\n' "$BODY"
} > "$FILE.new"

mv "$FILE.new" "$FILE"
chflags uchg "$FILE"   # or Mail regenerates over it on next launch

echo "Installed and locked. Open Mail and select the signature."
