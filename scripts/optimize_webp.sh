#!/bin/bash
IMAGES_DIR="/home/eitanya/aasada/public/images"
echo "Optimizing webp images in $IMAGES_DIR..."
cd "$IMAGES_DIR" || exit 1

for file in *-scaled.webp; do
    [ -f "$file" ] || continue
    echo "Resizing $file..."
    ffmpeg -y -i "$file" -vf "scale='min(800,iw)':-1" -q:v 80 "${file%.webp}_tmp.webp" > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        mv "${file%.webp}_tmp.webp" "$file"
        echo "  Done!"
    else
        echo "  Failed!"
        rm -f "${file%.webp}_tmp.webp"
    fi
done
echo "Webp optimization complete!"
