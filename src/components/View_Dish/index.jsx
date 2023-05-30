import { Container } from "./styles";

import { Ingredients } from "../Ingredients";
import { Count } from "../Count";
import { Button } from "../Button";

export function View_Dish() {
  return (
    <Container>
      <a href="#">&lt; Voltar</a>
      <div className="dish-container">
        <img src="https://www.github.com/alexandre-matias1.png" alt="" />
        <div className="items-container">
          <h1> Salada Ravanello</h1>
          <p className="text">
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.
          </p>
          <div className="ingredients-container">
            <Ingredients name="alface" />
            <Ingredients name="cebola" />
            <Ingredients name="cebola" />
            <Ingredients name="cebola" />
            <Ingredients name="cebola" />
            <Ingredients name="cebola" />
            <Ingredients name="cebola" />
            <Ingredients name="cebola" />
            <Ingredients name="cebola" />
          </div>
          <div className="buttons-container">
            <Count />
            <Button name={`Inserir preço $`} loading />
          </div>
        </div>
      </div>
    </Container>
  );
}
