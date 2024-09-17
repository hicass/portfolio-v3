import { FC } from 'react';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const navData = {
  socialLinks: [
    { icon: AiFillGithub, href: 'https://github.com/hicass' },
    { icon: AiFillLinkedin, href: 'https://www.linkedin.com/in/cass-walters/' },
  ],
  pageLinks: [
    { text: 'about me', href: '#about' },
    { text: 'tech', href: '#tech' },
    { text: 'projects', href: '#projects' },
    { text: 'playground', href: '#playground' },
    { text: 'contact', href: '#contact' },
  ],
};

const Nav: FC = () => {
  return (
    <>
      <nav className="flex flex-row w-full justify-end sticky top-5 -mt-36 px-8 pb-2 text-2xl">
        <ul className="flex flex-col items-end">
          {navData.pageLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className="text-beige hover:text-white">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <aside className="flex flex-row w-fit sticky top-6 -mt-24 px-8">
        <ul className="flex flex-col gap-4">
          {navData.socialLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                target="_blank"
                className="text-beige hover:text-white text-4xl"
              >
                <link.icon />
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Nav;
