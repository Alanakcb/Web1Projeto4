import * as S from "./styles";
import adidas1 from "assets/img/sapato adidas.svg";
import adidas2 from "assets/img/chinelo adidas.svg";

const AMain = () => {
    return (
        <S.AMain>
            <div>
                <picture>
                    <img src={adidas1} alt="Sapato da Adidas"/>
                </picture>
                <picture>
                    <img src={adidas2} alt="Chinelo da Adidas"/>
                </picture>
            </div>
        </S.AMain>
    )
}

export default AMain