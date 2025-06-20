
export const metadata = {
  title: "Odyssée Sud",
  description: "Explore the world at your own price",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-orange-100 to-white text-gray-900">{children}</body>
    </html>
  );
}
