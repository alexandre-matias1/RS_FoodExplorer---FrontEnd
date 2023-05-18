import { Container } from "./styles";
import Logo from "../../assets/Logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <div className="left-container">
        <div className="logo">
          <span className="name">
            <img className="config-icon" src={Logo} alt="" />
            food explorer
          </span>
        </div>
      </div>
      <div className="right-container">
        <div className="login-box">
          <span className="create-account">Faça Login</span>
          <div className="email">
            <span className="data-name">Email</span>
            <Input
              className="input"
              placeholder="Exemplo: email@email.com.br"
            />
          </div>
          <div className="password">
            <span className="data-name">Senha</span>
            <Input className="input" placeholder="No mínimo 6 caracteres" />
          </div>
          <div className="button">
            <Button name="Entrar" loading />
          </div>
          <div className="container-create">
            <a className="create" href="#">
              Criar uma conta
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
