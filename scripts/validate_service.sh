#!/bin/bash

# Check if nginx is running
if systemctl is-active --quiet nginx; then
    echo "Nginx is running"
    exit 0
else
    echo "Nginx is not running"
    exit 1
fi
