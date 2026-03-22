import './globals.css';

export const metadata = {
  title: 'Zaker AI',
  description: 'AI-powered study assistant for Egyptian students.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
