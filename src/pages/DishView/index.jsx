import { View_Dish } from "../../components/View_Dish";
import { Container } from "./styles.js";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function DishView() {
  return (
    <Container>
        <Header />
      <div className="content">
        <View_Dish />
      </div>
        <Footer />
    </Container>
  );
}
