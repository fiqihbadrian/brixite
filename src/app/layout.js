import './globals.css';
import Script from 'next/script';

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P69WVX4N');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) - letakkan sedekat mungkin setelah tag <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P69WVX4N"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
