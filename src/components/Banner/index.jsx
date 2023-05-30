import { Container } from "./styles";
import banner from "../../assets/banner.png";

export function Banner() {
 return(
  <Container>
  <div className="container">
    <img src={banner} alt="" />
  </div>
  <div className="text-container">
    <h1>Sabores inigualáveis</h1>
    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
  </div>
</Container>
 )
}
