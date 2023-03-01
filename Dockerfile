
FROM node:lts-alpine as builder

WORKDIR /app
COPY . ./
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
RUN node -v
RUN npm install 
RUN npm run build

FROM nginx:latest as proxy
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]