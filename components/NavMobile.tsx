'use client';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { RiMenu3Fill } from 'react-icons/ri';
import { Link as ScrollLink } from 'react-scroll';
import Logo from './Logo';
import { links } from '@/lib/constant';
import Socials from './Socials';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        aria-label="Open the navigation menu"
        className="text-primary flex items-center justify-center text-3xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-white border-none text-primary">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <ul className="w-full flex flex-col gap-10 justify-center text-center">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-primary uppercase font-primary font-medium tracking-[1.2px]"
                >
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    duration={500}
                    className="cursor-pointer"
                    activeClass="text-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          <Socials
            containerStyles="text-primary text-xl flex gap-6"
            iconStyles=""
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
