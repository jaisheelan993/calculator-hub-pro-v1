import './globals.css'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import Analytics from '../components/Analytics'; 
import PWARegister from '../components/PWARegister';
import Script from "next/script";

export const metadata = { 
    title: 'Calculator Hub Pro', description: 'Advanced calculator hub' 
}; 
export default function RootLayout({ children }){ 
    const isProd = process.env.NODE_ENV === 'production'; 
    return ( 
        <html lang='en' suppressHydrationWarning>
        <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-1497094213197738"
        />
      </head>
            <body>
                <Header />
                <main className='max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='md:col-span-2'>{children}</div>
                    <aside className='md:col-span-1'></aside>
                    <Script id="leadsleap-vars" data-cfasync="false" strategy="afterInteractive">
                      {`ll_r="jaisheelan";ll_bc="#ffffff";ll_hc="#e22121";ll_tc="#555a69";ll_cc="#8d9aa6";ll_dc="#8891a8";ll_w="";ll_nf="0";ll_nc="1";ll_nh="0";ll_nm="0";ll_np="1";ll_pa="0";ll_nt="0";ll_wt="1";ll_fw="1";ll_n="6";ll_cl="";ll_s="w";`}
                    </Script>
                    <Script data-cfasync="false" src="https://w.leadsleap.com/js.js" strategy="afterInteractive" />
                </main>
                <Footer />
                {isProd && <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1497094213197738"
     crossorigin="anonymous"></script>}
                <Analytics />
                <PWARegister />
            </body>
        </html>
    ); }
