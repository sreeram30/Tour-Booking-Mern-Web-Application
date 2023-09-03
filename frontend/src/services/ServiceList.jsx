import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
  {
    imgUrl: weatherImg,
    title: 'Calculate weather',
    desc: 'Calculate weather and suggest better tour'
  },
  {
    imgUrl: guideImg,
    title: 'Best Tour Guide',
    desc: 'Guide you for a wonderful tour'
  },
  {
    imgUrl: customizationImg,
    title: 'Customization',
    desc: 'Customize your tour in a better way'
  }
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
