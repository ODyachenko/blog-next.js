'use client';
import { CreatePostForm } from '@/components/CreatePostForm/CreatePostForm';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { useGetPostQuery } from '@/redux/api/posts.api';

interface iPostParams {
  params: {
    id: string;
  };
}

export default function page({ params }: iPostParams) {
  const post: any = useGetPostQuery(params.id);

  return (
    <PageWrapper>
      <CreatePostForm {...post} />
    </PageWrapper>
  );
}
