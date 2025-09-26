# web/Dockerfile
# --- Build Stage ---
FROM node:20-bullseye AS build
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

# 👇 For Vite use `npm run build`
RUN npm run build

# --- Production Stage ---
FROM nginx:1.25-alpine

# 👇 CHANGE HERE depending on your build folder
# For CRA: /app/build
# For Vite: /app/dist
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]
