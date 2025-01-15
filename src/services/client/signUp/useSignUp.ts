import { API_ROUTES } from '@/shared/route';
import { IPostSignUpRequest } from './dtos/IPostSignUp';
import { httpClient } from '@/lib/http-client';
import { useState } from 'react';
import { ISellersResponse } from '@/interfaces/sellers';
import { AxiosError } from 'axios';
import { getErrorMessage } from '@/constants/errorMessage';

export function useSignUp() {
  const [isPendingSignUser, setIsPendingSignUser] = useState<boolean>(false);
  async function SignUpUser({
    ...propsPostSignUpRequest
  }: IPostSignUpRequest): Promise<ISellersResponse> {
    setIsPendingSignUser(true);
    try {
      const response = await httpClient.post<ISellersResponse>(
        API_ROUTES.PUBLIC.SIGN_UP,
        { ...propsPostSignUpRequest },
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorCode = axiosError.response?.status || 500;
      throw new Error(getErrorMessage(errorCode));
    } finally {
      setIsPendingSignUser(false);
    }
  }

  return {
    SignUpUser,
    isPendingSignUser,
  };
}
