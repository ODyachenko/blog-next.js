'use client';
import { CreatePostForm } from '@/components/CreatePostForm/CreatePostForm';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';

interface iPostParams {
  params: {
    id: string;
  };
}

export default function page({ params }: iPostParams) {
  return (
    <PageWrapper>
      <CreatePostForm id={params.id} />
    </PageWrapper>
  );
}
