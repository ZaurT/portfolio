import React from 'react'
import NavItem from '../NavItem/NavItem'


export default function Nav(props){
    return (
        <ul className="Nav-items">
            {props.items.map(item =>{
                return <NavItem currentItem={item} />
            })}
        </ul>
    )
}