import React from 'react';
import {Link} from 'react-router-dom';
import './cabecalho.css'

export default props =>
    <div className='cabecalho'>
        <div className='menu'>
            <Link to='/' className='anchor'>Apresentação</Link>
            <Link to='/segunda' className='anchor'>Experiência</Link>
        </div>
    </div>