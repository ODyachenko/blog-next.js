'use client';
import type { Metadata } from 'next';
import { CreatePostForm } from '@/components/CreatePostForm/CreatePostForm';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';

interface iPostParams {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: 'Post Edit Page',
};

export default function page({ params }: iPostParams) {
  return (
    <PageWrapper>
      <CreatePostForm id={params.id} />
    </PageWrapper>
  );
}
