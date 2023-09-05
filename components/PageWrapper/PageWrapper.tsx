import { Container } from '@/node_modules/@mui/material/index';

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Container maxWidth="lg">{children}</Container>;
};
