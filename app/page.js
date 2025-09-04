import Link from 'next/link'; 
import AdRotator from '../components/AdRotator'; 
import Sidebar from '../components/Sidebar'; 
import FavoritesList from '../components/Favorites'; 

export default function Home(){ 
    const calculators=[{href:'/calculators/bmi',name:'BMI',desc:'Body Mass Index'
    },
    {href:'/calculators/loan',name:'Loan',desc:'EMI & totals'},
    {href:'/calculators/age',name:'Age',desc:'Years, months, days'},
    {href:'/calculators/tip',name:'Tip',desc:'Split bills'},
    {href:'/calculators/discount',name:'Discount',desc:'Sale price'},
    {href:'/calculators/unit-converter',name:'Unit Converter',desc:'Length/weight/temp'},
    {href:'/calculators/percentage',name:'Percentage',desc:'Percent & change'},
    {href:'/calculators/simple-interest',name:'Simple Interest',desc:'Principal*rate*time'},
    {href:'/calculators/compound-interest',name:'Compound Interest',desc:'Compounding growth'},
    {href:'/calculators/emi',name:'EMI',desc:'Monthly EMI'}
]; const ads=[{type:'adsense',slot:'1111111111'},{type:'image',src:'/ads/placeholder.png',href:'#'}]; 
return (
    <>
        <div className='md:col-span-2'>
            <section className='card'>
                <h1 className='text-3xl font-bold'>Calculator Hub Pro</h1>
                <p className='text-gray-600 dark:text-gray-400'>Advanced calculators with sharing, download, favorites and PWA support.</p>
            </section>
            <div className='my-4'>
                <AdRotator ads={ads} autoRotate={0} />
            </div>
            <section className='grid sm:grid-cols-2 gap-4'>
                {calculators.map(c=>(<Link key={c.href} href={c.href} className='link-tile'>
                <div className='text-lg font-semibold'>{c.name}</div><div className='text-sm text-gray-600 dark:text-gray-400 mt-1'>{c.desc}</div></Link>))}
            </section>
        </div>
        <div className='md:col-span-1 space-y-4'>
            <Sidebar />
            <div className='card'>
                <h3 className='font-semibold mb-2'>Favorites</h3>
                <FavoritesList />
            </div>
        </div>
    </>
); }
