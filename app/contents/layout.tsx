import '../globals.css';
import Footer from '../components/Footer';
import Header from '../components/Header';


export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className='bg-gradient-to-r from-primary_blue-800 to-primary_blue-900'>
      <body>
        <Header />
        <div className='container'>
          {children}
        </div>
        <Footer />
      </body>
    </html >
  );
}
