import { Roboto, Roboto_Mono } from 'next/font/google'; // Use available fonts from Google Fonts
import './globals.css'; // Import global styles

// Import Roboto and Roboto Mono fonts with specified weights
const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the available weights (normal and bold)
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the available weights (normal and bold)
});

export const metadata = {
  title: 'Adventures',
  description: 'By Chase Perez',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags or head elements can go here */}
      </head>
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`} // Apply fonts via the CSS variables
      >
        {children}
      </body>
    </html>
  );
}
