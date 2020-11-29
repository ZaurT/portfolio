import React from 'react'
import CardItem from '../CardItem/CardItem'

export default function Education(){

    const cardItems = [
        {img: 'https://i.imgur.com/T7rNqj2.png', title: 'СКГМИ (ГТУ)', position: ['Бакалавриат "Прикладная информатика"', 'Магистратура "Прикладная информатика"', 'Курсы повышения квалификации "Программирование и разработка веб-сатов. Углубленное изучение'], years: ['[2012 - 2016]', '[2016 - 2018]', '[2015 - 2016]']},
        {img: './kemgu.png', title: 'КЕМГУ', position: ['Преакселерационная программа "Фонда содействия инновациям"'], years: ['[2018]']},
        {img: 'https://i.imgur.com/ilk216g.png', title: 'YANDEX | MIPT', position: ['Обучающий курс "Разработка интерфейсов: вёрстка и JavaScript'], years: ['[2019]']},
    ]

    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <h1 data-title="Education">Education</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <img src="./photo.jpg" />
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