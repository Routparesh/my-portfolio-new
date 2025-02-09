#!/bin/bash

# Install nginx if not already installed
if ! command -v nginx &> /dev/null; then
    sudo apt update -y
    sudo apt install -y nginx
fi

# Stop nginx if it's running
systemctl stop nginx

# Create directory if it doesn't exist
mkdir -p /var/www/html

# Ensure www-data user exists (should be created by nginx installation, but just in case)
if ! id -u www-data &>/dev/null; then
    useradd -r -s /sbin/nologin www-data
fi
