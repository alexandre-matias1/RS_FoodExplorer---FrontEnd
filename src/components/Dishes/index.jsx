import { Container } from "./styles";
import { Heart } from "@phosphor-icons/react";
import { PencilSimple } from "@phosphor-icons/react";
import { Button } from "../Button";
import { Count } from "../Count";

export function Dishes({ children, ...rest }) {
  let isAdmin = true;

  return (
    <Container>
      <div className="dish-container">
        {isAdmin ? (
          <div className="icon-container">
            <button className="icon">
              <PencilSimple className="icon" />
            </button>
          </div>
        ) : (
          <div className="icon-container">
            <Heart className="icon" color="white" />
          </div>
        )}
        <div className="content">
          <img src="https://github.com/alexandre-matias1.png" alt="" />
          <h1>Torradas de parma &gt; </h1>
          <p>Preseunto de parma e rúcula em um pão com fermentação natural</p>
          <span className="price">R$ 25,97</span>
          {isAdmin ? (
            <div></div>
          ) : (
            <div className="components-container">
              <Count />
              <Button name="inserir" loading />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
