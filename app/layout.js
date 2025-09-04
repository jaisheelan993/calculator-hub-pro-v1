import './globals.css'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import Analytics from '../components/Analytics'; 
import PWARegister from '../components/PWARegister'; 
export const metadata = { 
    title: 'Calculator Hub Pro', description: 'Advanced calculator hub' 
}; 
export default function RootLayout({ children }){ 
    const isProd = process.env.NODE_ENV === 'production'; 
    return ( 
        <html lang='en' suppressHydrationWarning>
            <body>
                <Header />
                <main className='max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='md:col-span-2'>{children}</div>
                    <aside className='md:col-span-1'></aside>
                </main>
                <Footer />
                {isProd && <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1497094213197738"
     crossorigin="anonymous"></script>}
                <Analytics />
                <PWARegister />
            </body>
        </html>
    ); }
