import type { Metadata } from 'next';
import { LoginForm } from '@/components/Forms/LoginForm';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';

export const metadata: Metadata = {
  title: 'Authorization Page',
};

export default function page() {
  return (
    <PageWrapper>
      <LoginForm />
    </PageWrapper>
  );
}
