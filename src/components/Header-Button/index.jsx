import  Receipt  from '../../assets/Receipt.svg'
import { Container } from './styles'

export function HeaderButton({name, icon:Icon, ...rest}){

    let isAdmin = false;

    return(
    <Container 
    type='button'
    {...rest}
    >
        {
            isAdmin?
            <img src=""alt="" />
            :
            <img src={Receipt} alt="" />
            
        }
        <span className='name'>{name}</span>

    </Container>
    )
}