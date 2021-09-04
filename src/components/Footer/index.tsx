import * as S from "./styles";
import rodape from "assets/img/rodapé.svg";

const Footer = () => {
    return (
        <S.Footer>
            <picture>
                <img src={rodape} alt="Rodapé"/>
            </picture>
        </S.Footer>
    )
}

export default Footer