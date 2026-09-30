'use client';
import "./airbnblist.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const API_URL = "https://backendairbnb-befph8eegzabfudb.eastus2-01.azurewebsites.net/api/listings";
const PAGE_SIZE = 100;

export default function AirbnbDetail({ id }){
    const [listing, setListings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`${API_URL}?page=1&pageSize=${PAGE_SIZE}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
        })
        .then(response => {
            if(!response.ok) throw new Error(`Error ${response.status}`);
            return response.json();
        })
        .then(data => {
            const list = Array.isArray(data) ? data : data.listings ?? data.data ?? [];
            const found = list.find(item => String(item._id) === id);
            if(!found) throw new Error("No se encontró la propiedad")
                setListings(found);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, [id]);

    if(loading){
        return (
            <div className="loading-container">
                <div className="loading-spinner">
                    <p className="loading-text"></p>
                </div>
            </div>
        );
    }

    if(error)(
        <div className="error-container">
            <p className="error-message">Error al cargar</p>
            <Link href="/airbnb" className="back-button">
                Volver
            </Link>
        </div>
    )

    const photo = listing.images?.picture_url;
    
    return(
        <div>
            <div className="airbnb-detail-content">
                <div className="airbnb-detail-image-container">
                    <img src={photo} alt={listing.name} className="airbnb-detail-image"/>
                </div>
                <div className="airbnb-detail-info">
                {listing.name && <h3 className="airbnb-detail-title">{listing.name}</h3>}
                    {listing.summary && <p className="airbnb-detail-summary">{listing.summary}</p>}
                    <Link href="/airbnb" className="back-button">
                        Volver
                    </Link>
                </div>

            </div>
        </div>
    )
    
}
