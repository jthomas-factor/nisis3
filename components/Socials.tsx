import Link from 'next/link';
import { RiLinkedinFill } from 'react-icons/ri';

interface Props {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  {
    icon: <RiLinkedinFill />,
    path: 'https://www.linkedin.com/company/factorinc/',
    label: 'LinkedIn',
  },
];

const Socials = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
            <span className="sr-only">
              Visit
              {item.label}
              {' '}
              page
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
