import React, {useEffect, useState} from 'react';
import './App.css';
import {Datum, Pagination, RootObject} from "./types";

const getData = async () : Promise<RootObject> => {
    const response  = await fetch(
        `https://paulcamper.de/api/inventory/search?center_lat=52.504043&center_lng=13.393236&page_size=24&sort=[name,asc]`
    )
    const data = await response.json();
    return data;
}

function App() {
    const [data, setData] = useState<Datum[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    useEffect(() => {
        getData()
            .then(data => {
                setData(data.Data);
                setPagination(data.Pagination);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h3>{pagination?.PageSize}/{pagination?.Total}</h3>
            <div>
                {data?.map((camper, index: number) => camper.Profile.CamperType ? (
                    <div key={index}>
                        <p><b>TYPE:</b>
                            <span>{camper.Profile.CamperType}</span> - <span><b>NAME:</b>{camper?.Profile?.Name}</span>
                        </p>
                    </div>
                ) : null)}
            </div>
        </div>
    );
}

export default App;
