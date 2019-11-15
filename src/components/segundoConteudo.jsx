import React from 'react';
import './segundoConteudo.css'
import SD1 from './images/sdgg3d.png'
import SD2 from './images/sdgg3d 2.png'
import SD3 from './images/sdgg3d 3.png'
import SD4 from './images/sdgg3d 4.png'
import SP1 from './images/sp11-1.png'
import SP2 from './images/sp11-2.png'
import SP3 from './images/sp11-3.png'
import SP4 from './images/sp11-4.png'
import GCS1 from './images/gcs1.png'
import GCS2 from './images/gcs2.png'
import XF1 from './images/xf1.png'
import XF2 from './images/xf2.png'
import XF3 from './images/xf3.png'
import UD1 from './images/ud1.png'
import UD2 from './images/ud2.png'
import JS1 from './images/js1.png'
import EX1 from './images/EX1.png'
import dudu from './dudu.png'

export default props =>
    <div className='conteudo2'>
        <div className='dudu'>
        <img src={dudu}></img>
        </div>
        <div className='titulo2'>L. Eduardo Pontes</div>
        Freelancer
        <h2>Experiência Educacional:</h2>
        <div className='titulo'>Informática(Curso Técnico) - UniAteneu (2018/2019):</div>
        <br />Certificações parciais:<br />
        -Assistente de Instalação, Configuração e Manutenção de Redes de Computadores;<br />
        -Operador de Computadores e Sistemas Operacionais;<br />
        -Assistente de Banco de Dados;<br />
        -Assistente em Tecnologia da Informação e Sistemas;<br />
        <hr className='hr' />
        <h2>Atividades experimentais:</h2>
        <div className='titulo'>Site HTML: Games Club Store(Lider e full stack do projeto)</div><br />
        Um projeto que tinha como objetivo desenvolver 
        um site de vendas<br /> de midias digitais de jogos para consoles e pc's.<br />
        <br />Membros do projeto: Eduardo Pontes, Rodrigo Moreira e Vitor Lopes
        <div className='Coluna'>
        <img src={GCS1} 
        className='image' height='300px' />
        <img src={GCS2} 
        className='image' height='300px' />
        </div>
        <hr className='hr' />
        <div className='titulo'>Aplicação de React Native: Link Social(Solo Dev)</div><br />
        Uma aplicação em React Native para smartphone que redirecionava para links sociais na tela.
        <div className='Coluna'>
        <img src={EX1} 
        className='image' height='300px' />
        </div>
        <hr className='hr' />
        <div className='titulo'>Aplicação de React JS: Gerador de link p/ Whatsapp(Solo Dev)</div><br />
        Uma aplicação em ReactJS que criava links para mandar mensagens<br />
        para contatos de whatsapp.
        <div className='coluna'>
        <img src={JS1} 
        className='image' height='300px' /></div>
        <hr className='hr' />
        <div className='titulo'>Aplicação: Xerife(Scrum Master e Full stack do projeto)</div><br />
        Um projeto que tinha como objetivo conhecer o conceito de um projeto em trabalho real,<br />
        usando recursos de alto nivel como o Trello para organizar os passos do projeto,<br />
        dividir as funções para cada membro, sistema de sprints,<br />
        documentações para legalização e viabilidade do projeto e<br />
        Adobe XD para definir as telas da aplicação.<br />
        O conceito da aplicação era um sistema de controle e locações de produtos em um almoxarifado.<br />
        Continha acesso para o usuario administrador, que cuidava do controle de estoque,<br />
        solicitações, reservas e resgates.<br />
        E o usuario cliente, que fazia as reservas e alugava.<br />
        <br />Membros: Natanel Irineu - Lider/Front-end<br />
        Eduardo Pontes - Scrum master/Full stack<br />
        Kamila Gomes - Front-end/Designer<br />
        Issac Souza - Back-end/dev-ops
        <div className='Coluna'>
        <img src={XF1} 
        className='image' height='300px' />
        <img src={XF2} 
        className='image' height='300px' />
        <img src={XF3} 
        className='image' height='300px' />
        </div>
        <hr className='hr' />
        <div className='titulo'>Aplicação Lua + Engine Love2D: Umbrella Decimation(Lider e full stack de projeto)</div><br />
        Um projeto que tinha como objetivo fazer um aplicação em Lua e usando a engine Love2d.<br />
        No fim da demo, o personagem era capaz de se andar, pular e atirar.<br />
        <br />Membros: Luis Eduardo, Rodrigo Moreira e Vitor Lopes
        <div className='Linha'>
        <img src={UD1} 
        className='image' height='300px' />
        <img src={UD2} 
        className='image' height='300px' /></div>
        <hr className='hr' />
        <div className='titulo'>Tradução do jogo: Inazuma Eleven 3 - The Ogre(NDS)</div><br />
        Um projeto de tradução da versão JP de IE 3 - Edição The Ogre do Nintendo DS.<br />
        Um jogo de futebol/rpg distribuido pela level-5. Teve sua versão ocidental para o Nintendo 3DS,<br />
        mas a versão do Nintendo DS nunca viu a luz do dia.<br />
        <br />Membros: Eduardo Pontes - Idealizador e único ativo do projeto
        <div className='Linha'>
        <img src={SP1} 
        className='image' height='300px' />
        <img src={SP2} 
        className='image' height='300px' />
        </div>
        <div className='Linha'>
        <img src={SP3} 
        className='image' height='300px' />
        <img src={SP4} 
        className='image' height='300px' />
        </div>
        <hr className='hr' />
        <div className='titulo'>Tradução do jogo: SD Gundam G Gen 3D(3DS)</div><br />
        Um projeto de tradução do jogo SDGG 3D do Nintendo 3ds.
        Um jogo de estratégia/mecha distribuido pela bandai.<br />
        <br />Membros: Eduardo Pontes - Idealizador e único ativo do projeto
        <div className='Linha'>
        <img src={SD1} 
        className='image' height='500px' />
        <img src={SD4} 
        className='image' height='500px' />
        </div>
        <div className='Coluna'>
        <img src={SD2} className='image'
        height='300px' width='500px' />
        <img src={SD3} className='image'
        height='300px' width='500px' />
        </div>
        <hr className='hr' />
        <h2>Hobbies:</h2>
        Praticar esportes;<br />
        Desenhar;<br />
        Minerar arquivos de jogos para encontrar segredos;<br />
        Fazer testes com engines de jogos;<br />
        <br /><hr className='hr' />
        Consideração final: Este site foi feito em ReactJS
    </div>