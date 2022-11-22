import React, { useState } from 'react'
import { imcTableValues } from '../data/imcTableValues'

import '../styles/Header.css'

export const ImcResult = () => {

    const [kgMesure, setKgMesure] = useState(10)

    const [heightMesure, setHeightMesure] = useState(0)

    const [imcMesure, setImcMesure] = useState(0)

    const [result, setResult] = useState({})

    const calculateImc = () =>{
        let heightMesureNew = (heightMesure * .01) * (heightMesure * .01)
        setImcMesure(kgMesure/heightMesureNew )

        imcTableValues.map(imc =>{
            if (imcMesure > imc.imc_low && imcMesure < imc.imc_high) {
                setResult(imc)
            }
        }
        )
    }

    const handleKgChange = (e)=>{
        setKgMesure(e.target.value)
        calculateImc()
    }
    const handleHeightChange = (e)=>{
        setHeightMesure(e.target.value)
        calculateImc()
    }


    return (
        <div style={{backgroundColor:`${result.color}`}} className='result-content'>
            <input step="1"  defaultValue="150"  type="range" min="0" max="100" onChange={handleKgChange} value={kgMesure} id="kgPerson"/>
            <p>
                {kgMesure} kg
            </p>
            <input step="1"  defaultValue="150"  type="range" min="0" max="220" onChange={handleHeightChange} value={heightMesure}  id="heightPerson"/>
            
            <p>
                {heightMesure*.01} m
            </p>
            
            <p>Índice de masa corporal: {imcMesure}</p>
            <p>Clasificación: {result.clasificacion}</p>
            <p>Riesgo: {result.riesgo}</p>
            
        </div>
  )
}
