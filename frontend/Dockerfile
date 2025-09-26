# frontend/Dockerfile
FROM node:20-bullseye AS build

WORKDIR /app

# Copy package files from frontend folder
COPY frontend/package*.json ./

RUN npm install --legacy-peer-deps

# Copy the rest of the frontend
COPY frontend/ ./

RUN npm run build

# Stage 2 - Serve via Nginx
FROM nginx:1.25-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]
