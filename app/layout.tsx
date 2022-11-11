import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Noto_Sans_JP } from '@next/font/google';

const notoSansFont = Noto_Sans_JP({ weight: ['400', '700'], })

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <Header />
        <div className={`${notoSansFont.className} container`}>
          {children}
        </div>
        <Footer />
      </body>
    </html >
  );
}
