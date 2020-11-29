import React from 'react';



export default function CardItem(props){

    return (
        <div className="card">
            <img className="smallImg" src={props.item.img} />
            <div className="cardText">
                <h2>{props.item.title}</h2>
                <p>
                    {props.item.position.map((item, index) => {
                            return(
                                <div>
                                    {item}
                                    <small>
                                        {props.item.years[index]}
                                    </small>
                                </div>
                            )
                        })
                    }
                </p>
                <ul>
                    {
                        props.item.skills && props.item.skills.map(item => {
                            return(
                                <li>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}