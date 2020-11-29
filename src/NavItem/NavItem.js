import React from 'react';
import { NavLink } from 'react-router-dom';



export default function NavItem(props){
    const classes = []

    return (
        <li><NavLink activeClassName="active" to={props.currentItem.link} data-title={props.currentItem.title}><span>{props.currentItem.title}</span></NavLink></li>
    )
}