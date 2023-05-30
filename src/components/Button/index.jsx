import { Container } from "./styles";

export function Button({ name, ...rest }){
    
    let loading = false
    
    return(
        <Container
            type="button"
            disabled={loading}
        >
            { loading ? '...': <p>{name}</p>}
        </Container>
    )
}