import * as S from "./styles";
import esporte1 from "assets/img/tênis de esporte com cardaço.svg";
import esporte2 from "assets/img/tênis de esporte sem cardaço.svg";

const SMain = () => {
    return (
        <S.SMain>
            <div>
                <picture>
                    <img src={esporte1} alt="Sapato de esporte preto e branco"/>
                </picture>
                <picture>
                    <img src={esporte2} alt="Sapato de esporte sem cardaço cinza"/>
                </picture>
            </div>
        </S.SMain>
    )
}

export default SMain