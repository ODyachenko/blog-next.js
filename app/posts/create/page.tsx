'use client';
import { CreatePostForm } from '@/components/CreatePostForm/CreatePostForm';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import { ComponentState, useEffect } from 'react';

export default function page() {
  const { isAuth }: ComponentState = useAppSelector(
    (state: RootState) => state.user
  );
  const router = useRouter();

  useEffect(() => {
    !isAuth && router.push('/');
  }, [isAuth]);

  return (
    <PageWrapper>
      <CreatePostForm />
    </PageWrapper>
  );
}
