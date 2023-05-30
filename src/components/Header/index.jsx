import { Container } from './styles'
import { Input } from '../../components/Input'
import { HeaderButton } from '../Header-Button'
import { SignOut } from '@phosphor-icons/react'
import Menu from '../../assets/Menu.svg'

export function Header(){

    let isAdmin = true
    return(
        <Container>
            <div className="menu-container">
                <button className='button-menu'>
                <img src={Menu} alt="" />
                </button>
            </div>
            <div className='logo-container'>
                <svg className='logo' width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.866394L25.9904 8.36639V23.3664L13 30.8664L0.00961876 23.3664V8.36639L13 0.866394Z" fill="#065E7C"/>
                </svg>
                <div className='name-container'>
                    <span className='logo-name'>food explorer {
                        isAdmin ?
                        <span className="admin">admin</span>
                            :
                        <span></span>
                    }</span>

                </div>
            </div>
        <div className="input-container">
            <Input
            placeholder="Busque por pratos ou ingredientes"
            />
        </div>

        {
            isAdmin ?
            <div className="button-container">
            <HeaderButton
            name="Novo Prato"
            />
            </div>
            :
            <div className="button-container">
            <HeaderButton
            name="Pedidos(0)"
            qtd="0"
            />
            </div>
        }
        <SignOut className='exit' size={32} color='white' />

        
        </Container>
    )
}