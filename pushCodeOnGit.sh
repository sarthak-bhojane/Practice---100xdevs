#!/bin/bash

# Get current date and time
datetime=$(date +"%Y-%m-%d %H:%M:%S")

# Add all files
git add .
# Commit with date and time
git commit -m "Auto commit on $datetime"
# Push to main branch
git push -u origin main

echo "✅ Code pushed successfully at $datetime"
