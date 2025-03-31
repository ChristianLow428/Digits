import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import EditContactForm from '@/components/EditContactForm';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

const EditContact = async ({ params }: { params: { id: string } }) => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const id = parseInt(params.id, 10);
  const contact = await prisma.contact.findUnique({
    where: { id },
  });

  if (!contact) {
    return notFound();
  }

  return (
    <main>
      <EditContactForm contact={contact} />
    </main>
  );
};

export default EditContact;
