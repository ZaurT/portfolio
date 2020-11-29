import React from 'react'
import CardItem from '../CardItem/CardItem'

export default function Workflow(){

    const cardItems = [
        {img: 'https://i.imgur.com/ZGgyQXM.png', title: 'ICNX', position: ['CRM Specialist'], years: ['[2019 - 2021]'], skills: ['Marketing Cloud triggered sends','TSQL', 'AMPscript', 'SSJS']},
        {img: 'https://i.imgur.com/7GtKCHh.png', title: 'Expasys', position: ['Web Producer', 'Frontend Developer'], years: ['[2019 - 2021]', '[2018 - 2019]'], skills: ['html','css', 'Bootstrap', 'UIkit', 'jquery', 'Ajax queries', 'DotNetNuke', 'Photoshop', 'Illustrator', 'C#']},
        {img: 'https://i.imgur.com/7PFjtqJ.png', title: 'Freelance', position: ['Web developer'], years: ['[2014 - 2016]'], skills: ['HTML','CSS', 'JavaScript', 'php', 'Wordpress']},
    ]

    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <h1  data-title="Workflow">Workflow</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <span>
                                My key functional responsibilities are: creating a unique website design, HTML layout from PSD layouts, 
                                adapting new and ready-made HTML pages for mobile devices, implementing JavaScript logic (sliders, popups, 
                                animations, AJAX requests), working with JQuery, installing CMS and configuring its plugins, developing 
                                templates for CMS. In my work, I use CSS preprocessors (Sass, Less), Bootstrap and Foundation CSS frameworks. 
                                Experience working with the git version control system and image editors Photoshop, 
                                Illustrator, Figma. Introduction to Angular, React, and the Gulp project Builder.
                            </span>
                        </div>
                    </div>
                    <div className="col-9">
                        {cardItems.map(item =>{
                            return (
                                <div className="row">
                                    <div className="col-12">
                                        <CardItem item={item} />
                                    </div>
                                </div>
                            )
                        })} 
                    </div>
                </div>
            </div>
        </div>
    )
}