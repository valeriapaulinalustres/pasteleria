import React from 'react';
import './carousel.css';


function Carousel() {

    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://media.istockphoto.com/photos/black-forest-cake-piece-with-cherries-berries-picture-id483309592?b=1&k=20&m=483309592&s=170667a&w=0&h=a-njSCTc2CCK4_em3oLnEi16KiEG1KCK0Je-w9jrMis=" alt="selva negra" width="100%"/>
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2018/05/21/16/09/pastries-3418653__340.jpg" alt="alfajores" width="100%"/>
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2017/11/17/17/44/cookie-2957985__340.jpg"  alt="torta de frutas" width="100%"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel