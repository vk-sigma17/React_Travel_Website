import React from "react";

export default function Card(props){
    return (
        <section className="card">
            <img src={props.imageUrl} alt="place-img" className="card-img"/>
            <div className="card-info">
                <div className="card-location">
                    <img src="images/location-icon.png" alt="location symbol"/>
                    <h4>{props.location}</h4>
                    <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google maps</a>
                </div>
                <h2>{props.title}</h2>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </section>
    )
}