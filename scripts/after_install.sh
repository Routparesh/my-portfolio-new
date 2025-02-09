#!/bin/bash

# Set proper permissions
chown -R www-data:www-data /var/www/html
find /var/www/html -type d -exec chmod 755 {} \;
find /var/www/html -type f -exec chmod 644 {} \;

# Create nginx configuration if it doesn't exist
cat > /etc/nginx/sites-available/portfolio << 'EOF'
server {
    listen 3000;
    server_name _;
    
    access_log /var/log/nginx/portfolio_access.log;
    error_log /var/log/nginx/portfolio_error.log;

    root /var/www/html/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable CORS
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';

    # Error pages
    error_page 404 /index.html;
    error_page 500 502 503 504 /50x.html;
}
EOF

# Enable the site configuration
ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Create log directory if it doesn't exist
mkdir -p /var/log/nginx
chown -R www-data:adm /var/log/nginx

# Ensure the build directory exists
mkdir -p /var/www/html/build

# Test nginx configuration
nginx -t

# Debug info
echo "Directory contents of build folder:"
ls -la /var/www/html/build
