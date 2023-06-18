import React from 'react';
import {IBoxProps, Box} from 'native-base';
import SectionHeader from './section.header';
import SectionTitle from './section.title';
import SectionLink from './section.link';
import SectionBody from './section.body';

export interface SectionProps extends IBoxProps {
  children: React.ReactNode;
}

const Section = ({children, pt = '6', ...rest}: SectionProps) => {
  return (
    <Box pt={pt} {...rest}>
      {children}
    </Box>
  );
};

Section.Header = SectionHeader;
Section.Title = SectionTitle;
Section.Link = SectionLink;
Section.Body = SectionBody;

export default Section;
