# Stage 1: Build Angular app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build Angular app for production
RUN npm run build -- --prod

# Stage 2: Serve app with Nginx
FROM nginx:alpine

# Copy the built app from Stage 1
COPY --from=build /app/dist/YOUR_APP_NAME /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
