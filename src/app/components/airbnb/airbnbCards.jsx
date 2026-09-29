'use client';
import "./airbnblist.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export function AirbnbCards({listing, isFavorite, onToggleFavorite}){
    const photo = listing.images?.picture_url;

    return (
        <div className="airbnb-card">
                <div className="airbnb-image-container">
                    {(photo ? (
                        <img src={photo} alt={listing.name} className="airbnb-image"/>
                    ) : 
                        <div className="airbnb-image-placeholder"><p>Sin imagen</p></div>
                    )}
                    <button type="button" className="favorite-button" onClick={() => onToggleFavorite(listing._id)}>
                    {isFavorite 
                        ? <FaHeart className="favorite-icon favorited"/>
                        : <FaRegHeart className="favorite-icon not-favorited"/>}
                        </button>
                </div>
            <div className="airbnb-content">
                <h3 className="airbnb-name">{listing.name}</h3>
                <p className="airbnb-summary">{listing.summary}</p>
                <a href={listing.listing_url} target="_blank" className="airbnb-url">Ver en Airbnb</a>
            </div>

        </div>
    )
}