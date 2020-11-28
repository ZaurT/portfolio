import React from 'react'

export default function AboutCard(){
    return (
        <div className="card">
            <img src="avatar.jpg" className="avatar" alt="avatar" />
            <div className="cardText">
                <h2>Zaur Tigiev</h2>
                <span>Web Developer, CRM Specialist</span>
            </div>
        </div>
    )
}