'use client';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { FullPost } from '@/components/Post/FullPost';
import { PostComments } from '@/components/PostComments/PostComments';
import { useGetPostQuery } from '@/redux/api/posts.api';

interface iPostParams {
  params: {
    id: string;
  };
}

export default function page({ params }: iPostParams) {
  const { data } = useGetPostQuery(params.id);

  return (
    <PageWrapper>
      {data && (
        <>
          <FullPost {...data} />
          <PostComments />
        </>
      )}
    </PageWrapper>
  );
}
