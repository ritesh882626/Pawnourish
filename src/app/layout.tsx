import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DealerEnquiryModal from '@/components/common/DealerEnquiryModal';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import RetailerMarginCalculatorModal from '@/components/common/RetailerMarginCalculatorModal';

export const metadata: Metadata = {
  title: 'Pawnourish — Royal Canin & Drools Wholesale Supplier in Delhi NCR',
  description: 'Authorized B2B wholesale distributor of Royal Canin and Drools pet food products for pet stores, veterinary clinics, and retailers across Delhi, Gurugram, Noida, Ghaziabad & Faridabad.',
  icons: {
    icon: [
      { url: '/images/pawnourish_logo.png', type: 'image/png' },
    ],
    shortcut: ['/images/pawnourish_logo.png'],
    apple: [
      { url: '/images/pawnourish_logo.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <DealerEnquiryModal />
        <WhatsAppButton />
        <RetailerMarginCalculatorModal />
      </body>
    </html>
  );
}
