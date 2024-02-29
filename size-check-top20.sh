#!/bin/bash
# based from this sciprt
# sudo du -ah ~/practice | sort -rh -S 50% | head -n 20

# Get the largest file in the specified directory
largest_file=$(find "$1" -type f -exec du -ah {} + | sort -rh | head -n 20)

echo "Largest file in $1:"
echo "$largest_file"