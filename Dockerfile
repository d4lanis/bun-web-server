FROM nwylynko/bun:0.2.0-alpine

WORKDIR /app

COPY package.json .

RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun","run","index.ts"]

CMD [ "echo", "HELLO_WORLD" ]