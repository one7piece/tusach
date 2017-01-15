#!/bin/sh

if [ -z "$1" ] || [ "$1" != "linux" ] && [ "$1" != "arm" ] 
then
echo "Usage: make-dist [linux|arm]"
fi
rm -rf dist/*

