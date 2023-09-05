import { Header } from '@/components/Header/Header';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';
import { Post } from '@/components/Post/Post';
import { Tabs } from '@/components/Tabs/Tabs';

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Tabs />
        <main className="main">
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}
