'use client';
import { CreatePostForm } from '@/components/CreatePostForm/CreatePostForm';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';

export default function page() {
  const { isAuth } = useAppSelector((state: RootState) => state.user);
  const router = useRouter();

  // !isAuth && router.push('/');

  return (
    <PageWrapper>
      <CreatePostForm />
    </PageWrapper>
  );
}
