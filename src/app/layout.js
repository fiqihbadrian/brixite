import './globals.css'

export const metadata = {
  title: 'Brixite',
  description: 'Brixite Society, is all about bringing bold, stylish streetwear that speaks to your authentic vibe. We\'re here to make your everyday look stand out, with comfy fits and eye-catching designs. Join us, make a statement, and let\'s keep it cool and fresh!',
  openGraph: {
    title: 'Brixite',
    description: 'Brixite Society, is all about bringing bold, stylish streetwear that speaks to your authentic vibe. We\'re here to make your everyday look stand out, with comfy fits and eye-catching designs. Join us, make a statement, and let\'s keep it cool and fresh!',
    url: 'https://brixite.com',
    images: [
      {
        url: '/image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brixite',
    description: 'Brixite Society, is all about bringing bold, stylish streetwear that speaks to your authentic vibe. We\'re here to make your everyday look stand out, with comfy fits and eye-catching designs. Join us, make a statement, and let\'s keep it cool and fresh!',
    images: ['./image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  )
}
