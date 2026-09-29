'use client';
import "./airbnblist.css";

export function AirbnbCards({listing}){
    const photo = listing.images?.picture_url;

    return (
        <div className="airbnb-card">
                <div className="airbnb-image-container">
                    {(photo ? (
                        <img src={photo} alt={listing.name} className="airbnb-image"/>
                    ) : 
                        <div className="airbnb-image-placeholder"><p>Sin imagen</p></div>
                    )}
                </div>
            <div className="airbnb-content">
                <h3 className="airbnb-name">{listing.name}</h3>
                <p className="airbnb-summary">{listing.summary}</p>
                <a href={listing.listing_url} target="_blank" className="airbnb-url">Ver en Airbnb</a>
            </div>

        </div>
    )
}