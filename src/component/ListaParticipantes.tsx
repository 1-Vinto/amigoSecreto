import { useListaDeParticipantes } from "../state/hook/useListaDeParticipante"

const ListaParticipantes = () =>{
    
    const participantes: string[] = useListaDeParticipantes()
    return(
        <ul>
            {participantes.map(participante => <li key={participante}>{participante}</li>)}
        </ul>
    )
}

export default ListaParticipantes