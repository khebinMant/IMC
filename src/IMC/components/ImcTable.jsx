import React from 'react'
import { imcTableValues } from '../data/imcTableValues'

export const ImcTable = () => {


  return (
    <div className='table-content'>
        <table className='firstLine'>
            <tbody>
            <tr >
                <th>Clasificación</th>
                <th>IMC(Kg/m2)</th>
                <th>Riesgo</th>
            </tr>
            {
                imcTableValues.map((imc, index)=>(
                    <tr style={{background:`${imc.color}`}} key={index}>
                        <td>{imc.clasificacion}</td>
                        <td style={{margin:'auto'}}>{`${imc.imc_low} - ${imc.imc_high}`}</td>
                        <td>{imc.riesgo}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
  )
}
