// imports
// import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { GrMenu } from 'react-icons/gr';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar({}): any {
  return (
    <nav className="w-full backdrop-blur-md bg-opacity-20 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-red-500 bg-clip-text">
          Free app
        </h1>
      </Link>
      <div className="gap-1 md:gap-2 lg:gap-4 hidden md:flex">
        <Button variant="ghost" className="font-semibold text-md rounded-lg">
          <Link href="/">Home</Link>
        </Button>
        <Link href="/about">
          <Button variant="ghost" className="font-semibold text-md rounded-lg">
            About
          </Button>
        </Link>
      </div>
      <Link href="https://github.com/gyanaranjans">
        <BsGithub size={30} />
      </Link>

      {/* MOBILE NAV */}
      <Sheet>
        <SheetTrigger className="block md:hidden p-3">
          <span className="text-2xl">
            <GrMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="w-full space-y-3">
                <Link href="/">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    About
                  </Button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}