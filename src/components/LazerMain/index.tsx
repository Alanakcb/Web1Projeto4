import * as S from "./styles";
import chinelocon from "assets/img/chinelo confortável.svg";
import sapatocon from "assets/img/sapato confortável.svg";

const LMain = () => {
    return (
        <S.LMain>
            <div>
                <picture>
                    <img src={chinelocon} alt="Chinelo amarelo confortável"/>
                </picture>
                <picture>
                    <img src={sapatocon} alt="Sapato cinza confortável"/>
                </picture>
            </div>
        </S.LMain>
    )
}

export default LMain