import React from 'react'
import logo from '../logo.svg';
import Nav from '../Nav/Nav';

export default function Header(){
    const items = [
        {link: '/blog', title: 'blog'},
        {link: '/workflow', title: 'workflow'},
        {link: '/projects', title: 'projects'},
        {link: '/education', title: 'education'}
    ]
    return (
        <header className="header">
            <div className="container">
                <img src={logo} className="App-logo" alt="logo" />
                <Nav items={items} />
            </div>
        </header>
    )
}