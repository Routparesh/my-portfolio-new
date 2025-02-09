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

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
        autoindex on;
    }

    # Enable CORS
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
}
EOF

# Enable the site configuration
ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Create log directory if it doesn't exist
mkdir -p /var/log/nginx
chown -R www-data:adm /var/log/nginx

# Test nginx configuration
nginx -t

# Debug info
echo "Directory contents:"
ls -la /var/www/html
echo "Nginx configuration:"
cat /etc/nginx/sites-available/portfolio
echo "Nginx user:"
ps aux | grep nginx
