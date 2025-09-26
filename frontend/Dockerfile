# 🏗️ Build stage
FROM node:20-bullseye AS build

WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy rest of the app and build
COPY . .
RUN npm run build

# 🌍 Production stage
FROM nginx:1.25-alpine

# Copy built files to nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 8000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
