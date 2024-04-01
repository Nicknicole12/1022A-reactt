import "./Main.css";
import Estudante from "../estudante/Estudante";
type EstudanteType = {
  nome: string;
  descricao: string;
  foto: string;
  githubLink: string;
};
function Main() {
  const estudantesIMDB: EstudanteType[] = [
    {
      nome: "Guilherme Figueiredo Terenciani",
      descricao: "Professor no IFMS-NV",
      foto: "https://github.com/guilhermeterenciani.png",
      githubLink: "https://github.com/guilhermeterenciani",
    },
    {
      nome: "Rafael Tomazini Marani",
      descricao: "Aluno do IFMS-NV",
      foto: "https://github.com/RafaTMZ.png",
      githubLink: "https://github.com/RafaTMZ",
    },
    {
      nome: "Maria Julia Alves ",
      descricao: "Estudante do IFMS-NV",
      foto: "https://github.com/maajulia.png",
      githubLink: "https://github.com/maajulia",
    },
    {
      nome: "Julia Ribeiro",
      descricao: "Aluna no IFMS-NV",
      foto: "https://github.com/juliaribeiroxxx.png",
      githubLink: "https://github.com/juliaribeiroxxx",
    },
    {
      nome: "Nicole de Souza Gois",
      descricao: "estudante do ifms-nv",
      foto: "https://github.com/Nicknicole12.png",
      githubLink: "https://github.com/Nicknicole12/1022A-reactt/tree/main",
    },
    {
      nome: "Katiely Fernanda Góis Santos",
      descricao: "Estudante do IFMS-NV",
      foto: "https://github.com/katielizinha.png",
      githubLink: "https://github.com/katielizinha",
    },
    {
      nome: "Caick gabriel",
      descricao: "Aluno ifms",
      foto: "https://avatars.githubusercontent.com/u/109927313?v:4",
      githubLink: "https://github.com/tio-mec",
    },
    {
      nome: "Rafael Miranda da Silva",
      descricao: "Aluno turma 1022-A IFMS-NV",
      foto: "https://github.com/MiraMiranda.png",
      githubLink: "https://github.com/MiraMiranda",
    },

    {
      nome: "José Rosa Leite",
      descricao: "Estudante no IFMS",
      foto: "https://github.com/josefh852.png",
      githubLink: "https://github.com/josefh852",
    },
    {
      nome: "Gabriele Pimentel Flores",
      descricao: "Aluna no IFMS-NV",
      foto: "https://github.com/gabiiiflores.png",
      githubLink: "https://github.com/gabiiiflores",
    },
    {
      nome: "Narriane Aparecida Neves Silva",
      descricao: "Aluna do IFMS no 3ano de informatica",
      foto: "https://github.com/narrianesil.png",
      githubLink: "https://github.com/narrianesil",
    },
    {
      nome: "Ryan Gosling",
      descricao: "I drive",
      foto: "https://github.com/pkz1nzz.png",
      githubLink: "https://github.com/pkz1nzz",
    },
    {
      nome: "Clara Elis da Silva Larsen",
      descricao: "Aluna do IFMS-NV",
      foto: "https://github.com/Claraeex.png",
      githubLink: "https://github.com/Claraeex",
    },

    {
      nome: "Camila Haiane dos Santos Pereira",
      descricao: "Estudante no IFMS-NV",
      foto: "https://github.com/camilahsp.png",
      githubLink: "https://github.com/camilahsp",
    },
    {
      nome: "Kauã Luiz dos Santos",
      descricao: "Aluno do Instituto Federal de Mato Grosso do Sul",
      foto: "https://github.com/bladekkkkkk.png",
      githubLink: "https://github.com/bladekkkkkk",
    },

    {
      nome: "Tainara de Oliveira Dias",
      descricao: "Aluna no IFMS-NV",
      foto: "https://github.com/Tainaradias31.png",
      githubLink: "https://github.com/Tainaradias31",
    },
    {
      nome: "Ana Carla",
      descricao: "Estudante do IFMS-NV",
      foto: "https:/github.com/anacarla2212.png",
      githubLink: "https://github.com/anacarla2212",
    },
    {
      nome: "Pedro Lucas Alves da Silva",
      descricao: "Estudante do IFMS",
      foto: "https://github.com/ETHGWRTJTYJ.png",
      githubLink: "https://github.com/ETHGWRTJTYJ",
    },
    {
      nome: "Vinícius Amâncio Martins Pereira",
      descricao: "Estudante do IFMS",
      foto: "https://github.com/vinizerahsz.png",
      githubLink: "https://github.com/vinizerahsz",
    },

    {
      nome: "Kauan Da Silva",
      descricao: "Aluno no IFMS-NV",
      foto: "https://github.com/kauanSilva01.png",
      githubLink: "https://github.com/kauanSilva01",
    },
    {
      nome: "Emily Marques",
      descricao: "Estudante no IFMS-NV",
      foto: "https:/github.com/ime-m.png",
      githubLink: "https://github.com/ime-m",
    },
    {
      nome: "Júlia Strey Bem",
      descricao: "Estudante do IFMS, turma: 1022-A",
      foto: "https://github.com/J0lix.png",
      githubLink: "https://github.com/J0lix",
    },
    {
      nome: "Lays Wimmer",
      descricao: "Aluna IFMS",
      foto: "https://github.com/layswim.png",
      githubLink: "https://github.com/layswim",
    },
    {
      nome: "Iwarley Silva Santana",
      descricao: "Aluno no IFMS-NV",
      foto: "https://github.com/Iwarley.png",
      githubLink: "https://github.com/iwarley",
    },
    {
      nome: "Vinicius Azevedo Matheus",
      descricao: "Estudante no IFMS-NV",
      foto: "https://github.com/Jubiscreubio.png",
      githubLink: "https://github.com/Jubiscreubio",
    },
    {
      nome: "Bianca de Oliveira Moraes",
      descricao: "Estudante do IFMS",
      foto: "https://github.com/biawo.png",
      githubLink: "https://github.com/biawo",
    },
    {
      nome: "André Angelo",
      descricao: "so Deus sabe como ta a mente do palhaço",
      foto: "https://github.com/GarotoMeninoHack.png",
      githubLink: "https://github.com/GarotoMeninoHack",
    },
    {
      nome: "Gabriel Sales",
      descricao: "Aluno do IFMS",
      foto: "https://github.com/SallesTachiyomi.png",
      githubLink: "https://github.com/SallesTachiyomi",
    },
    {
      nome: "Matheus Gehrke da Silva",
      descricao: "Estudante no IFMS-NV",
      foto: "https://github.com/GehrkeSilva.png",
      githubLink: "https://github.com/GehrkeSilva",
    },
  ];

  return(
    <main>
        {
            estudantesIMDB.map((estudante)=>{
                return (
                    <Estudante nome={estudante.nome}
                               descricao={estudante.descricao}
                               foto={estudante.foto}
                               githubLink={estudante.githubLink}
                    />
                )
            })
        }
    </main>
  );
}

export default Main;
