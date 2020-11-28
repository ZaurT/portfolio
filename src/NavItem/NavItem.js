import React from 'react';
import { NavLink } from 'react-router-dom';



export default function NavItem(props){
    const classes = []

    return (
        <li><NavLink activeClassName="active" to={props.currentItem.link}>{props.currentItem.title}</NavLink></li>
    )
}