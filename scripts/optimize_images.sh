#!/bin/bash

IMAGES_DIR="/home/eitanya/aasada/public/images"
echo "Starting image optimization in $IMAGES_DIR using ffmpeg..."

if [ ! -d "$IMAGES_DIR" ]; then
    echo "Directory $IMAGES_DIR not found!"
    exit 1
fi

cd "$IMAGES_DIR" || exit 1

# Loop through all png, jpg, jpeg files
for file in *.{png,jpg,jpeg,PNG,JPG,JPEG}; do
    # Skip if file pattern didn't match anything
    [ -f "$file" ] || continue
    
    filename=$(basename -- "$file")
    extension="${filename##*.}"
    filename_no_ext="${filename%.*}"
    
    # We want to output webp
    output="${filename_no_ext}.webp"
    
    echo "Processing $file -> $output..."
    
    # Check if target file already exists and is newer/valid, we can overwrite or handle it.
    # We will use ffmpeg to resize (max width 1200, maintaining aspect ratio) and convert to WebP at quality 80.
    # Filter vf: scales image so width is max 1200. If it is already smaller, it keeps the size.
    ffmpeg -y -i "$file" -vf "scale='min(1200,iw)':-1" -q:v 80 "$output" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        orig_size=$(stat -c%s "$file")
        new_size=$(stat -c%s "$output")
        echo "  Success! Size reduced from $orig_size to $new_size bytes."
        
        # If the original file is not already a webp, and the webp is successfully created, we delete the original.
        # However, if it has a different extension than webp, delete the original to free up space.
        if [ "$extension" != "webp" ] && [ "$extension" != "WEBP" ]; then
            rm "$file"
            echo "  Deleted original $file"
        fi
    else
        echo "  Failed to process $file"
    fi
done

echo "Image optimization complete!"
