"use client"
import React from "react";
import { useState } from "react";
import Appcontext from '../context/Appcontext'


const Appstate = (props)=>{

  
    return (
        <Appcontext.Provider value={{}}>
  {props.children}
        </Appcontext.Provider>
    )
}

export default Appstate;