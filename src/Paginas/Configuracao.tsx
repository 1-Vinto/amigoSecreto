import Card from "../component/Card"
import Formulario from "../component/Formulario/Formulario"
import ListaParticipantes from "../component/ListaParticipantes"
import Rodape from "../component/Rodape/Rodape"

const Configuracao = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </section>
        </Card>
    )
}

export default Configuracao