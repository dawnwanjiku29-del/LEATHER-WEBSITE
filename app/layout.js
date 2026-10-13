import './globals.css';

export const metadata = {
  title: 'Looking Good Rugged | Leather Bags',
  description: 'Handcrafted leather bags from Nairobi, Kenya.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
