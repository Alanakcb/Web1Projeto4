import { Link } from "react-router-dom";
import * as S from "./styles";

const Section = () => {
    return (
        <S.Section>
           <ul>
            <li>
                <Link to="">nike</Link>
            </li>
            <li>
                <Link to="">adidas</Link>
            </li>
            <li>
                <Link to="">botas</Link>
            </li>
            <li>
                <Link to="">sport</Link>
            </li>
            <li>
                <Link to="">lazer</Link>
            </li>
        </ul>
        </S.Section>
    )
}

export default Section