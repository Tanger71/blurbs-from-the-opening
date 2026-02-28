FROM nginx:alpine

# Copy all files from your repo into the Nginx web root
COPY . /usr/share/nginx/html

# Nginx stays in the foreground so the container doesn't exit
CMD ["nginx", "-g", "daemon off;"]
