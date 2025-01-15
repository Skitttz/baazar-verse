import { redirect } from 'next/navigation';
import { APP_ROUTES } from '@/shared/route';
import { cookies } from 'next/headers';
import { STORAGE_KEYS } from '@/constants/storageKeys';

export default async function redirectDefaultPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(STORAGE_KEYS.AUTH);
  if (accessToken) {
    redirect(APP_ROUTES.PRIVATE.HOME);
  }
  redirect(APP_ROUTES.PUBLIC.SIGN_IN);
  return null;
}
