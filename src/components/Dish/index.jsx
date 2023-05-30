import { PencilSimple } from "@phosphor-icons/react";
import { Heart } from "@phosphor-icons/react";
import { Container, Card } from "./styles";
import { Count } from "../../components/Count";
import { Button } from "../../components/Button";
import R_Arrow from "../../assets/left-arrow.svg";
import L_Arrow from "../../assets/right-arrow.svg";

export function Dish({ category, name, resume, price, image, ...rest }) {
  let isAdmin = false;

  return (
    <Container>
      <a href="#">
        <Card>
          {isAdmin ? (
            <button>
              <PencilSimple className="icon" />
            </button>
          ) : (
            <button>
              <Heart className="icon" />
            </button>
          )}
          <img src={image} alt="" />
          <h1>{name} &gt;</h1>
          <p>{resume}</p>
          <span>{price}</span>
          {isAdmin ? (
            <></>
          ) : (
            <div className="buy-container">
              <Count />
              <div className="button-container">
                <Button name="Inserir" />
              </div>
            </div>
          )}
        </Card>
      </a>
    </Container>
  );
}
