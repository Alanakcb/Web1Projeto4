import * as S from "./styles";
import botap from "assets/img/bota preta.svg";
import botab from "assets/img/bota branca.svg";

const BMain = () => {
    return (
        <S.BMain>
            <picture>
                <img src={botap} alt="Bota preta de salto alto"/>
            </picture>
            <picture>
                <img src={botab} alt="Bota branca cano curto"/>
            </picture>
        </S.BMain>
    )
}

export default BMain