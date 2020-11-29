import React from 'react'

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutCard(){
    return (
        <div className="card">
            <img src="avatar.jpg" className="avatar" alt="avatar" />
            <div className="cardText">
                <h2>Zaur Tigiev</h2>
                <span>Web Developer, CRM Specialist</span>
                <p class="social">
                    <a href="mailto:zaurtigiev@yandex.ru" target="_blank"><img src="./envelope-solid.svg" /></a>
                    <a href="https://ru.pinterest.com/zaurtigiev/portfolio/" target="_blank"><img src="./pinterest-brands.svg" /></a>
                    <a href="https://dribbble.com/Zaur94" target="_blank"><img src="./basketball-ball-solid.svg" /></a>
                    <a href="https://codepen.io/zaurtigiev/" target="_blank"><img src="./codepen-brands.svg" /></a>
                    <a href="https://github.com/ZaurT" target="_blank"><img src="./github-brands.svg" /></a>
                </p>
            </div>
        </div>
    )
}