import { cookies } from 'next/headers';
import axios from 'axios';
import { env } from '@/config/env';
import { decoded } from '@/utils/base64';
import { validateToken } from '@/utils/cookie';
import { redirect } from 'next/navigation';
import { APP_ROUTES } from '@/shared/route';

export const getServerHttpClient = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const isValidateToken = await validateToken(token);
  if (!isValidateToken) {
    redirect(APP_ROUTES.PUBLIC.SIGN_IN);
  }

  const tokenDecoded = decoded(token);
  const authToken = token ? `Bearer ${tokenDecoded}` : '';

  const httpServer = axios.create({
    baseURL: env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/',
    withCredentials: true,
    headers: {
      common: {
        'Content-Type': 'application/json'
      },
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: authToken ?? '',
      Connection: 'keep-alive',
      'cookie': `auth=${tokenDecoded}`,
    },
  });

  return httpServer;
};
