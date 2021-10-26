import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const WorldMap = ({countries}) => {

    const countryMarkers = countries.map((country, index) => {
        if (country.latlng){
        return (
            <Marker key={index} position={[country.latlng[0], country.latlng[1]]}>
                <Popup>
                    <h3>{country.name}</h3>
                    <a href={`country/?detail=${country.name}`}>Check website</a>
                </Popup>
            </Marker>
        )}
    })

    return(
    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    {countryMarkers}
    </MapContainer>
)}

export default WorldMap;