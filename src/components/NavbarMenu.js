import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const logo = require('../assets/images/terraceLogo.png');

const navOptions = [
    { key:1 , label : <Link to='/'>Salon Ekle</Link>},
    { key:2 , label : <Link to='/menu'>Menu Ekle</Link>},
]
export default class NavbarMenu extends Component {
    render() {
        return (
            <div>
                <header className='container-fluid flex'>
                    <div>
                        <img src={logo} className="Logo" />
                    </div>
                    <ul className='flex ul'>
                        {navOptions.map((list, index)=> (
                            <li key={list.key}>
                                {list.label}
                            </li>
                        ))}
                    </ul>
                </header>
            </div>
        )
    }
}
