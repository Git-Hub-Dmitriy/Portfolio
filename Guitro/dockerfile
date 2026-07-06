FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci
RUN npx prisma generate
COPY . .

ARG DATABASE_URL
ARG ADMIN_INITIAL_PASSWORD
ENV DATABASE_URL=$DATABASE_URL
ENV ADMIN_INITIAL_PASSWORD=$ADMIN_INITIAL_PASSWORD

RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "prod"]