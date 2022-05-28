import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import css from './MapDirections.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWt6ejA2NCIsImEiOiJja3h6NzRmOXkyeHFqMnFtdjM1d2p5MDl5In0.gTKgv5icPsLpIyy4qurNFA';

const MapDirections = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.394902, 23.820950],
            zoom: 15
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirections;