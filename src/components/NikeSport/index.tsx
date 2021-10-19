import * as S from "./styles";
import nike1 from "assets/img/sapato nike preto e branco.svg";
import nike2 from "assets/img/sapato nike preto.svg";

const NMain = () => {
    return (
        <S.NMain>
            <div>
                <picture>
                    <img src={nike1} alt="Sapato Nike preto e branco"/>
                </picture>
                <picture>
                    <img src={nike2} alt="Sapato Nike preto"/>
                </picture>
            </div>
        </S.NMain>
    )
}

export default NMain