import { Container } from "./styles";

export function Ingredients({ name, ...rest}){
    return(
    <Container>
        { name }
    </Container>
    )
}