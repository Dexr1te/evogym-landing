import React from 'react';
import { SelectedPage } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-[var(--secondary-500)] px-10 py-4 hover:bg-[var(--primary-500)] hover:text-white transition-colors duration-300"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
      aria-label="Scroll to Contact Us section"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
