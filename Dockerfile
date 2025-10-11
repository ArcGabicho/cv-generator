# Etapa 1: Instalar dependencias y construir la app
FROM node:20-alpine AS builder

WORKDIR /app

# Instala dependencias solo si cambian los archivos relevantes
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  else npm install; fi

COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Etapa 2: Imagen ligera para producción
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copia solo lo necesario desde la etapa anterior
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/tsconfig.json ./
COPY --from=builder /app/postcss.config.* ./
COPY --from=builder /app/tailwind.config.* ./
COPY --from=builder /app/app ./app

EXPOSE 3000

CMD ["npm", "start"]