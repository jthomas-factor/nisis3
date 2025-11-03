import { Link as ScrollLink } from 'react-scroll';
import Logo from './Logo';
import NavMobile from './NavMobile';
import { links } from '@/lib/constant';

const Header = () => {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="text-primary text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-primary"
                  >
                    <a
                      href={`#${link.path}`}
                      className="cursor-pointer text-base text-gray-700 hover:text-accent"
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
