import { Header } from '../Header/Header';

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container">{children}</div>
      </div>
    </>
  );
};
