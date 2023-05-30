import { Container, Content } from "./styles";

import { Dishes } from "../../components/Dishes";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";

export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Content>
      
      <Dishes title="Pratos principais" />
      <Dishes title="Entradas" />
      <Dishes title="Sobremesas" />
      
      </Content>

      <Footer />
    </Container>
  );
}

{
  /* <div className="img-container">
  <img src={banner} alt="" />
</div>
<div className="text-container">
  <h1>Sabores inigualáveis</h1>
  <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
</div> */
}
