import './Main.css'
import Estudante from '../estudante/Estudante'
function Main(){
    return(
        <main>
            <Estudante 
                nome="Guilherme Figueiredo Terenciani"
                descricao='Professor no IFMS-NV'
                foto='https://github.com/guilhermeterenciani.png'
                githubLink='https://github.com/guilhermeterenciani'/>
            <Estudante 
                nome="Guilherme Figueiredo Terenciani"
                descricao='Professor no IFMS-NV'
                foto='https://github.com/guilhermeterenciani.png'
                githubLink='https://github.com/guilhermeterenciani'/>
        </main>
    )
}

export default Main