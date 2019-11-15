import React from 'react';
import './rodape.css'
import FB from './fb.png'
import WP from './wp.png'
import ST from './st.png'

export default props =>
    <div className='rodape'>
        Entre em contato:
        <a href="https://www.facebook.com/SiegKaiser"><img className='logo' src={FB}></img></a>
        <a href="https://api.whatsapp.com/send?phone=5585997922517"><img className='logo' src={WP}></img></a>
        <a href="https://steamcommunity.com/id/SiegKaiser/"><img className='logo' src={ST}></img></a>
    </div>