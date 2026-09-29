'use client';

import "./airbnblist.css";
import { AirbnbCards } from "./airbnbCards";
import { useEffect, useState } from "react";

const API_URL = "https://backendairbnb-befph8eegzabfudb.eastus2-01.azurewebsites.net/api/listings";
const PAGE_SIZE = 100;

export default function AirbnbList(){
    const [listings, setListings] = useState([]);
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
        .then(data => setListings(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, []);
    

    return (
        <div className="airbnb-page">
            <div className="airbnb-container">
                <div className="airbnb-header">
                    <h1 className="airbnb-title">Airbnb</h1>
                </div>
                {loading && (
                    <div className="loading-container">
                        <div className="loading-spinner">
                            <p className="loading-text"></p>
                        </div>
                    </div>
                )}

                {!loading && error && (
                    <div className="error-container">
                        <p className="error-message">Error al cargar</p>
                    </div>
                )}

                {!loading && !error && (
                    <div className="airbnb-grid">
                    {listings.map(listing => (
                        <AirbnbCards key={listing._id} listing={listing} />
                    ))}
                    </div>
                )}
            </div>
        </div>
    )
}
