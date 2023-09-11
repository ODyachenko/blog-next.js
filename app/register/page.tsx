import type { Metadata } from 'next';
import { RegisterForm } from '@/components/Forms/RegisterForm';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';

export const metadata: Metadata = {
  title: 'Registration Page',
};

export default function page() {
  return (
    <PageWrapper>
      <RegisterForm />
    </PageWrapper>
  );
}
