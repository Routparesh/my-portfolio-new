#!/bin/bash

# Install nginx if not already installed
if ! command -v nginx &> /dev/null; then
    yum update -y
    yum install -y nginx
fi

# Stop nginx if it's running
systemctl stop nginx

# Create directory if it doesn't exist
mkdir -p /var/www/html
