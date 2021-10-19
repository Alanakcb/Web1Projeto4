import * as S from "./styles";

const CMain = () => {
    return (
        <S.CMain>
            <form method="POST" action="">
                <fieldset>
                    <legend>Cadastro</legend>
                    <label>Nome: </label>
                    <input type="text" name="nome"/><br/>
                    <label for="nascimento">Data de nascimento:</label>
                    <input type="date" name="nascimento"/><br/>
                    <label for="email">Email:</label>
                    <input type="email" name="email"/></br>
                    <label for="némero">Celular:</label>
                    <input type="number" name="número"/></br>
                    <input type="reset"/></br>
                    <input type="submit"/></br>
                </fieldset>
            </form>
        </S.CMain>
    )
}

export default CMain