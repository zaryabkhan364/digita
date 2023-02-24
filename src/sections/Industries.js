import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

import icon1 from 'assets/healthcare.png';
import icon2 from 'assets/factory.png';
import icon3 from 'assets/construction.png';
import icon4 from 'assets/supermarket.png';
import icon5 from 'assets/saving.png';
import icon6 from 'assets/deal.png';


const SERVICES_DATA = [
  {
    icon: icon1,
    title: 'Healthcare',
  },
  {
    icon: icon2,
    title: 'Manufacturing',
  },
  {
    icon: icon3,
    title: 'Construction',
  },
  {
    icon: icon4,
    title: 'Retail',
  },
  {
    icon: icon5,
    title: 'Financial Services',
  },
  {
    icon: icon6,
    title: 'Real Estate',
  },
  
];

const Industries = () => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <BlockTitle
          // slogan="Our Services"
          title="Industries We Work with"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.icon} alt="service" />
              </Box>
              <Heading as="h3">{service.title}</Heading>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Industries;

const styles = {
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    pb: ['80px', null, null, null, null, null, '140px'],
    mt: '5rem',
    backgroundColor: '#F6F8FB',
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)',
      },
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
      },
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)',
      },
    },
  },
  blockTitle: {
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      '1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['80px', null, null, '110px'],
    height: ['80px', null, null, '110px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
    backgroundImage:
      'linear-gradient(323.91deg, #FFCC40 7.09%, rgba(255, 204, 64, 0.5) 88.82%)',
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
};
