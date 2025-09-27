import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-gray-950 text-gray-100">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
