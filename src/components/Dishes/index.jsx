import { Container, Carrossel } from "./styles.js";
import { Dish } from "../Dish";

import { useRef } from "react";

import arrow from "../../assets/left-arrow.svg";

export function Dishes({ title }) {
  const carousel = useRef(0)
  
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 700
  }

   const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 700
    
  }

  return (
    <Container>
      <h2>{title}</h2>
      <div className="slider-container">
        <button className="arrow left" onClick={handleLeftClick}>
          <img src={arrow} alt="" />
        </button>
        <button className="arrow right" onClick={handleRightClick}>
          <img src={arrow} alt="" />
        </button>
        <Carrossel ref={carousel}>
          <Dish
            name="1"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
          <Dish
            name="2"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
          <Dish
            name="3"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
          <Dish
            name="4"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
          <Dish
            name="5"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
          <Dish
            name="6"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
          <Dish
            name="7"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
          <Dish
            name="8"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />

          <Dish
            name="9"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
          <Dish
            name="10"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
          <Dish
            name="11"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
          <Dish
            name="12"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
          <Dish
            name="13"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
          <Dish
            name="14"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
          <Dish
            name="15"
            resume="Presento de parma e rucula em um pao com fermentação natural"
            price="25,97"
            image="https://www.github.com/alexandre-matias1.png"
          />
        </Carrossel>

      </div>
    </Container>
  );
}
