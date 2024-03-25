import './Estudante.css'
type EstudanteProps = {
    nome:string,
    foto:string,
    descricao:string,
    githubLink:string
}
function Estudante(props:EstudanteProps){
    return(
        <div className="estudante-box">
                <img className='estudante-foto' src={props.foto} alt=""/>
                <div className="informacoes">
                    <h3 className="estudante_nome">{props.nome}</h3>
                    <p className="estudante_descricao">{props.descricao}</p>
                    <a className='link-git' href={props.githubLink}>GitHub</a>
                </div>
            </div>
    )
}
export default Estudante