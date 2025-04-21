import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "../ControlledCarousel/styles.module.css";
import p1 from "../../public/pictures/picture1.JPG";
import p2 from "../../public/pictures/picture2.JPG";
import p3 from "../../public/pictures/picture3.JPG";

const data = [
  {
    image: p1,
    title: "Dog | Rede Social",
    desc: "Rede social para cachorro",
    linkProjeto: "https://dogsocialmedia74312.netlify.app/",
    linkRepo: "https://github.com/IlanVeras/dog",
  },
  {
    image: p2,
    title: "Governo de Norta",
    desc: "Baseado na série de livros de Victoria Aveyard esse é um site que guarda as informações das pessoas de Norta",
    linkProjeto: "https://dogsocialmedia74312.netlify.app/",
    linkRepo: "https://github.com/IlanVeras/dog",
  },
];

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={styles.container}
    >
      {data.map((projeto) => (
        <Carousel.Item>
          <p>{projeto.title}</p>
          <img src={projeto.image} width="300px"/>
          <Carousel.Caption>
            <h3>{projeto.desc}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
