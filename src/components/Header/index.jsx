import { Container } from './styles'
import  Receipt  from '../../assets/Receipt.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import {  RiBillLine } from 'react-icons/ri'
import { SignOut } from '@phosphor-icons/react'


export function Header(){

    let isAdmin = true
    return(
        <Container>
            <div className='logo-container'>
                <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.866394L25.9904 8.36639V23.3664L13 30.8664L0.00961876 23.3664V8.36639L13 0.866394Z" fill="#065E7C"/>
                </svg>
                <div className='name-container'>
                    <span className='logo-name'>food explorer</span>
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
            <Button
            icon={RiBillLine}
            name="Meus pedidos (0)"
            />
            </div>
            :
            <div className="button-container">
            <Button
            name="Novo Prato"
            />
            </div>
        }
        
        <SignOut size={32} color='white' />

        
        </Container>
    )
}