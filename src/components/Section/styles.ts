import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Section = styled.section`
    ul{
        display: flex;
        flex-direction: row;
        border: 0.1rem solid ${colors.blue};
        border-right: 0;
        border-left: 0;
        li{
            list-style-type: none;
            padding: 0.4rem;
            a{
                padding: 5rem;
            }
        }
    }
`
