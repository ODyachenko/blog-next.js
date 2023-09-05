import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { FullPost } from '@/components/Post/FullPost';
import { PostComments } from '@/components/PostComments/PostComments';

const post = {
  id: '2',
  cover:
    'https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png',
  avatar:
    'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
  author: 'Keff',
  date: '12.06.2022',
  title: 'Roast the code #1 | Rock Paper Scissors',
  text: "Hey there! 👋 This post is the second instalment of my series 'Roast the Code', where I share some code, and let YOU roast and/or improve it. There's not much more to it, just be polite and constructive. This time it's a minesweeper game called Bugsweeper, written in Dart and UI built using Flutter. Just a little fun project I wrote last Saturday. You can check it out here (note that the site can take a bit to load, I will be writing a post related to this in the near future)",
  tags: ['#react', '#fun', '#typescrypt'],
  views: 150,
  commentsCount: 3,
};

export default function page() {
  return (
    <PageWrapper>
      <FullPost {...post} />
      <PostComments />
    </PageWrapper>
  );
}
