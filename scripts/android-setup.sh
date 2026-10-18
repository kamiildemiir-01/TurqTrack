#!/bin/bash
set -e
R=android/app/src/main/res
rm -rf "$R/mipmap-anydpi-v26"
for d in mdpi hdpi xhdpi xxhdpi xxxhdpi; do
  mkdir -p "$R/mipmap-$d"
  cp build/icon-192.png "$R/mipmap-$d/ic_launcher.png"
  cp build/icon-192.png "$R/mipmap-$d/ic_launcher_round.png"
  cp build/icon-192.png "$R/mipmap-$d/ic_launcher_foreground.png"
done
M=android/app/src/main/AndroidManifest.xml
grep -q POST_NOTIFICATIONS "$M" || sed -i 's#</manifest>#    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />\n</manifest>#' "$M"
