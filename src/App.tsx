import React from 'react';
import "./styles.css"
import IMAGE from "./react.png"
import LOGO from "./react.svg"
import ClickCounter from './ClickCounter';
export const App = ()=>{
    return (<>
    <h1>Web React with typescript and webpack {process.env.name} {process.env.NODE_ENV}</h1>
    <h2>Making changes</h2>
    <img src={IMAGE} alt="" width="300" />
    <img src={LOGO} alt="" width="300"/>
    <br />

    <ClickCounter/>
    </>)
}