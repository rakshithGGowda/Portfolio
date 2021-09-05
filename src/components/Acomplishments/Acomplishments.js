import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Open Source Projects'},
  { number: 100, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Presonal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box ket={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}+</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
