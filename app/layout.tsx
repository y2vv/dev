import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Zen_Maru_Gothic } from '@next/font/google';
import InformationCard from './components/InformationCard';

const mainFont = Zen_Maru_Gothic({ weight: ['400'], })

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className='bg-gradient-to-tr from-gray-700 to-gray-900'>
      <body className={`${mainFont.className}`}>
        <Header />
        <div className='container mx-auto'>
          <InformationCard />
          {children}
        </div>
        <Footer />
      </body>
    </html >
  );
}
