import React, { useState, useEffect } from 'react'
import WorldMap from '../components/WorldMap'
import Country from '../components/Country'
import { Route } from "react-router-dom";

const MapContainer = () => {

    return (
        <>
            <Route exact path="/map" component={() => (<WorldMap countries={countries} />)} />
            <Route exact path="/country" component={() => (<Country countries={countries} />)} />
        </>
    )
}