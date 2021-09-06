import { Link } from "react-router-dom";
import * as S from "./styles";

const Section = () => {
    return (
        <S.Section>
           <ul>
                <li>
                    <Link to="/nike">nike</Link>
                </li>
                <li>
                    <Link to="/adidas">adidas</Link>
                </li>
                <li>
                    <Link to="/botas">botas</Link>
                </li>
                <li>
                    <Link to="/sport">sport</Link>
                </li>
                <li>
                    <Link to="/lazer">lazer</Link>
                </li>
            </ul>
        </S.Section>
    )
}

export default Section