import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import Navbar from './Navbar';

export default async function Layout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/admin/login/?callbackUrl=/admin/cms');
  }

  return (
    <>
      <div className="h-screen w-screen flex bg-base-200">
        <Navbar />
        <main className="w-full overflow-x-hidden">{children}</main>
      </div>
    </>
  );
}
