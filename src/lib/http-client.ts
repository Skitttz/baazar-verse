import axios from 'axios';
import { env } from '@/config/env';

const baseConfig = {
  baseURL: env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/',
  withCredentials: true,
};

export const httpClient = axios.create(baseConfig);

httpClient.interceptors.response.use(
  async (config) => {
    if (env.NEXT_PUBLIC_ENABLE_API_DELAY) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
    return config;
  },
);