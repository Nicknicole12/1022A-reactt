import './Estudante.css'
function Estudante(){
    return(
        <div className="estudante-box">
                <img className='estudante-foto' src="https://github.com/guilhermeterenciani.png" alt=""/>
                <div className="informacoes">
                    <h3 className="estudante_nome">Guilherme Figueiredo Terenciani</h3>
                    <p className="estudante_descricao">Professor IFMS campus Naviraí na área de desenvolvimento / desenvolvimento web</p>
                    <a className='link-git' href="https://github.com/guilhermeterenciani">GitHub</a>
                </div>
            </div>
    )
}
export default Estudante