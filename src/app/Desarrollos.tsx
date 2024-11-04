import React from 'react';
import { Carousel } from 'react-bootstrap';

interface Desarrollo {
  image: string;
  title: string;
  description: string;
}

const desarrollos: Desarrollo[] = [
  {
    image: 'desarrollo1.jpg',
    title: 'Proyecto Residencial',
    description: 'Un proyecto innovador en el corazón de la ciudad.',
  },
  // Agrega más desarrollos aquí
];

const Desarrollos = () => {
  return (
    <section id="desarrollos">
      <h2>Nuestros Desarrollos</h2>
      <Carousel>
        {desarrollos.map((desarrollo, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={desarrollo.image}
              alt={desarrollo.title}
            />
            <Carousel.Caption>
              <h3>{desarrollo.title}</h3>
              <p>{desarrollo.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Desarrollos;