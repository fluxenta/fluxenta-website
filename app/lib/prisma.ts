import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

// 1. Create a connection pool to Supabase
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })

// 2. Initialize the Prisma Adapter for PostgreSQL
const adapter = new PrismaPg(pool)

// 3. Pass the adapter to PrismaClient
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ 
    adapter, // This fulfills the engine requirement
    log: ['query', 'error', 'warn'] 
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma