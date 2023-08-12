import { STIX_Two_Text } from "next/font/google";
import { FaSistrix } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineBell } from "react-icons/ai";
import Link from "next/link";

const stix_two_text = STIX_Two_Text({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className="flex justify-between items-center contain_fluid pt-6">
      <div className={`${stix_two_text.className} font-[400] text-[32px] `}>
        Da-furious
      </div>
      <div className="flex gap-8 text-[24px]">
        <Link href="/">Home</Link>
        <Link href="/marketplace">MarketPlace</Link>
        <Link href="/auction">Auction</Link>
        <Link href="/drop">Drop</Link>
      </div>
      <div className="flex gap-8">
        <div>
          <FaSistrix size={26} />
        </div>
        <div className="cart">
          <AiOutlineShoppingCart size={26} />
        </div>
        <div>
          <AiOutlineBell size={26} />
        </div>
      </div>
    </header>
  );
};

export default Header;
