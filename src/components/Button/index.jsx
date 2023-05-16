import { Container } from "./styles";

export function Button({ name, loading, ...rest }){
    return(
        <Container
            type="button"
            disabled={loading}
        >
            { loading ? '...': {name}}
        </Container>
    )
}