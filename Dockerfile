# Nexora Technologies — Corporate Website
# Base image: lightweight official Nginx
FROM nginx:alpine

# Remove default Nginx welcome page config (optional cleanup)
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx config (see nginx.conf)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy website files into Nginx's web root
COPY index.html /usr/share/nginx/html/
COPY about.html /usr/share/nginx/html/
COPY services.html /usr/share/nginx/html/
COPY careers.html /usr/share/nginx/html/
COPY contact.html /usr/share/nginx/html/
COPY gallery.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY images/ /usr/share/nginx/html/images/

# Nginx listens on port 80
EXPOSE 80

# Default Nginx command (runs in foreground for container use)
CMD ["nginx", "-g", "daemon off;"]
