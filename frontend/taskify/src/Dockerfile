# Stage 1: Build the Angular application
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/taskify /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
