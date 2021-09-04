import * as S from "./styles";
import { Link } from "react-router-dom";
import logo from "assets/img/logo sapato.svg";
import login from "assets/img/ícone log in.svg";
import carrinho from "assets/img/ícone carrinho.svg";

const Header = () => {
    return (
        <S.Header>
           <picture>
                <img src={logo} alt="Logo do site"/>
            </picture>
            <h1>Flying Shoes</h1>
            <input placeholder="O que você deseja?"></input>
            <Link to="">log in</Link>
            <picture>
                <img src={login} alt="Ícone de log in"/>
            </picture>
            <picture>
                <img src={carrinho} alt="Ícone de carrinho"/>
            </picture>
        </S.Header>
    )
}

export default Header