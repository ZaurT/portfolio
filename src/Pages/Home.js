import React from 'react'
import AboutCard from '../About/AboutCard';
import Blog from '../Blog/Blog';

export default function Home(){
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <AboutCard />
                    </div>
                    <div className="col-9">
                        <Blog />
                    </div>
                </div>
            </div>
        </div>
    )
}