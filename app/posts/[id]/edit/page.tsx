'use client';
import type { Metadata } from 'next';
import { CreatePostForm } from '@/components/CreatePostForm/CreatePostForm';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { useGetPostQuery } from '@/redux/api/posts.api';

interface iPostParams {
  params: {
    id: string;
  };
}

// export const metadata: Metadata = {
//   title: 'Post Edit Page',
// };

export default function page({ params }: iPostParams) {
  const post = useGetPostQuery(params.id);

  return (
    <PageWrapper>
      <CreatePostForm {...post} />
    </PageWrapper>
  );
}
