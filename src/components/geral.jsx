import React from 'react';
import Cabecalho from './cabecalho';
import Conteudo from './conteudo';
import Rodape from './rodape';
import './geral.css'

export default props =>
    <div className='tudo'>
        <Cabecalho />
        <Conteudo />
        <Rodape />
    </div>