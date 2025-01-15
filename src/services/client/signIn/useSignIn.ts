import { API_ROUTES } from '@/shared/route';
import { IPostSignInRequest, IPostSignInResponse } from './dtos/IPostSignIn';
import { httpClient } from '@lib/http-client';
import { useState } from 'react';
import { createCookie } from '@/utils/cookie';
import { STORAGE_KEYS } from '@/constants/storageKeys';

export function useSignIn() {
  const [isPendingSignUser, setIsPendingSignUser] = useState<boolean>(false);
  async function signInUser({
    email,
    password,
  }: IPostSignInRequest): Promise<IPostSignInResponse | null> {
    setIsPendingSignUser(true);
    try {
      const response = await httpClient.post<IPostSignInResponse>(
        API_ROUTES.PUBLIC.SIGN_IN,
        { email, password },
      );
      createCookie(response.data.accessToken, STORAGE_KEYS.AUTH);

      return response.data;
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      return null;
    } finally {
      setIsPendingSignUser(false);
    }
  }

  return {
    signInUser,
    isPendingSignUser,
  };
}
