import { useLocation, Link } from 'react-router-dom';
import { Label } from "../ui/label";
import Logo from "./Logo";
import { useState } from "react";
import { Menu, Home, ArrowRightLeft, CirclePlus, CircleCheckBig, CircleArrowOutDownLeft, Wallet } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ButtonConnectWallet } from './ButtonConnectWallet';
import { Button } from '../ui/button';

const items = [
  { label: "HOME", link: "/", icon: <Home className="h-[22px] w-[22px]" /> },
  { label: "MINT", link: "/mint", icon: <CirclePlus className="h-[22px] w-[22px]" /> },
  { label: "WITHDRAWALS", link: "/withdrawals", icon: <CircleArrowOutDownLeft className="h-[22px] w-[22px]" /> },
  { label: "SWAP", link: "/swap", icon: <ArrowRightLeft className="h-[22px] w-[22px]" /> },
  { label: "PROOF", link: "/proof", icon: <CircleCheckBig className="h-[22px] w-[22px]" /> },
  { label: "LIQUIDITY", link: "/liquidity", icon: <Wallet className="h-[22px] w-[22px]" /> },
];

export default function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}

function MobileNavbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed z-40 h-fit w-full py-5 xl:hidden transition-colors duration-200 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm`}
    >
      <nav className="flex items-center justify-between px-5 sm:px-[40px]">
        <Logo />
        <div className="flex flex-row items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button className="px-3 py-1.5 w-[50px] h-[40px] shadow whitespace-nowrap transition-colors rounded-xl" variant={"ghost"}>
                <Menu className="h-10 w-10" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="mt-8 flex flex-col gap-4">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className="no-underline flex flex-row items-center gap-2"
                  >
                    <Label
                      className={`block w-auto p-2 text-sm font-semibold cursor-pointer ${pathname === item.link
                        ? 'border-l-2 border-textSecondary pl-4 text-textSecondary'
                        : 'text-gray-400'
                        }`}
                    >
                      {item.icon}
                    </Label>
                    <Label
                      className={`block text-sm font-semibold cursor-pointer ${pathname === item.link
                        ? 'border-textSecondary'
                        : 'text-gray-400'
                        }`}
                    >
                      {item.label}
                    </Label>
                  </Link>
                ))}
                <div onClick={() => setIsOpen(false)}>
                  <ButtonConnectWallet />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}

function DesktopNavbar() {
  const { pathname } = useLocation();

  return (
    <div
      className={`navbar fixed z-40 hidden w-full h-fit xl:block transition-colors duration-200 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm`}
    >
      <nav className="flex justify-between items-center gap-x-4 p-5 px-[40px]">
        <div className='flex flex-row justify-start items-center gap-10'>
          <Logo />
          <div className="flex flex-row justify-center gap-x-6">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="cursor-pointer no-underline flex flex-row gap-2"
              >
                <Label
                  className={`font-semibold cursor-pointer text-[12px] ${pathname === item.link
                    ? 'text-textSecondary'
                    : 'text-gray-400'
                    }`}
                >
                  {item.icon}
                </Label>
                <Label
                  className={`font-bold cursor-pointer text-[10px] flex items-center ${pathname === item.link
                    ? 'text-white'
                    : 'text-gray-400'
                    }`}
                >
                  {item.label}
                </Label>
              </Link>
            ))}
          </div>
        </div>
        <ButtonConnectWallet />
      </nav>
    </div>
  );
}