import { Sidebar } from '@/components/sidebar';

export default function CustomersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
