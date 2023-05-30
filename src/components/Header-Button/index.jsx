import { Container } from "./styles";
import cart from "../../assets/cart.svg";

export function HeaderButton({ name, qtd, ...rest }) {
  let isAdmin = true;

  return (
    <Container type="button" {...rest}>
      {isAdmin ? (
        <div className="empty"/>
      ) : (
        <div className="stats">
          <img src={cart} alt="" />
          <span className="qtd-cart">{qtd}</span>
        </div>
      )}
      <span className="name">{name}</span>
    </Container>
  );
}
