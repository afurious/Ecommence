import Checkout from '../component/Checkout';

export const metadata = {
  title: 'Da-furious Marketplace',
  description: 'Generated by create next app',
};

export default function RootLayout({children}) {
  return (
    <div>

      <Checkout />
      {children}
    </div>
  );
}
