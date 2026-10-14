import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// The contact API stores messages in a local SQLite file. That only works
// where a writable database exists (the z.ai sandbox, a self-hosted server).
// On hosts like Netlify there is no DATABASE_URL, so we return null instead
// of crashing and the contact route falls back to logging the lead.
function getClient(): PrismaClient | null {
  if (globalForPrisma.prisma) return globalForPrisma.prisma
  if (!process.env.DATABASE_URL) return null
  try {
    const client = new PrismaClient({
      log: ['query'],
    })
    globalForPrisma.prisma = client
    return client
  } catch {
    return null
  }
}

export const db = getClient()
