import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';


export const env = createEnv({
  server: {
    BASE_API_URL: z.string(),
    NODE_ENV: z.enum(["development", "test", "production"]).default('development'),
    ENABLE_API_DELAY: z.string().transform((value) => value === "true"),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string(),    NEXT_PUBLIC_ENABLE_API_DELAY: z.string().transform((value) => value === "true"),
  },
  // Apenas variáveis públicas para o runtime
  runtimeEnv: {
    BASE_API_URL: process.env.BASE_API_URL,
    NODE_ENV: process.env.NODE_ENV,
    ENABLE_API_DELAY: process.env.ENABLE_API_DELAY,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_ENABLE_API_DELAY: process.env.NEXT_PUBLIC_ENABLE_API_DELAY,
  },
});
