import React from 'react';
import './conteudo.css'
import avatar from './byJonhS.png'

export default props =>
    <div className='conteudo'>
        <div className="SelfIntrod">Eduardo Pontes(1997-),Fortaleza(CE)<br /><br />
        Um jovem carismático, desenvolvedor full stack e freelancer, que gosta de apreciar a beleza 
        e a dedicação das pessoas no que fazem, mesmo que falhem.<br />
        Em programação e dev, prefiro ficar no lado front-end do projeto, 
        apesar de saber de back-end também.<br />
        Mesmo não curtindo liderar projetos,
        não viro as costas e visto a camisa se necessário.<br />
        Níveis em lingua estrangeira:<br />
        Ingles: Intermediário<br />
        Espanhol: Intermediário<br />
        Email:eduardo-pdf@outlook.com
        </div>
        <div className='avatar'>
            <img src={avatar} />
        </div>
    </div>