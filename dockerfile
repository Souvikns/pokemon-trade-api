FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

COPY . . 

EXPOSE 8080

CMD ["bun", "run", "start"]