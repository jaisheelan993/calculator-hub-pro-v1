'use client';
import Script from 'next/script';
export default function Analytics(){ 
  const isProd = process.env.NODE_ENV === 'production';
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  if(!isProd || !ga) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
      <Script id="ga-setup" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
      </Script>
    </>
  );
}
