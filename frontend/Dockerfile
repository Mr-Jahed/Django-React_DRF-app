# Stage 1 - Build React App
FROM node:20-bullseye AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

RUN npm install --legacy-peer-deps

# Copy rest of the frontend files
COPY . .

RUN npm run build

# Stage 2 - Serve via Nginx
FROM nginx:1.25-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]
