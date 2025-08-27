import { drizzle } from 'drizzle-orm/tidb-serverless';

export const db = drizzle(process.env.DATABASE_URL!);
