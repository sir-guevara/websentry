# syntax=docker/dockerfile:1
FROM oven/bun:latest as base
WORKDIR /usr/src/app

# Debugging: Print the contents of the working directory
RUN ls -al

# Install Prisma CLI
RUN bun add -g @prisma/cli
COPY package*.json ./
RUN  bun install
COPY prisma prisma/
RUN  bunx prisma init

COPY src src/
EXPOSE 3000
CMD ["bun", "start"]
