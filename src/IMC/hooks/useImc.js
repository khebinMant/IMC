import { useState } from 'react'
import { imcTableValues } from '../data/imcTableValues'


export const useImc = () => {
    const [kgMesure, setKgMesure] = useState(1)

    const [heightMesure, setHeightMesure] = useState(1)

    const [imcMesure, setImcMesure] = useState(0)

    const [result, setResult] = useState({})

    const calculateImc = () =>{
        let heightMesureNew = (heightMesure * .01) * (heightMesure * .01)
        setImcMesure(kgMesure/heightMesureNew )

        imcTableValues.map(imc =>{
            if (imcMesure > imc.imc_low && imcMesure < imc.imc_high) {
                console.log(imc)
                setResult(imc)
            }
        })
    }

    const handleKgChange = (e)=>{
        setKgMesure(e.target.value)
        calculateImc()
    }
    const handleHeightChange = (e)=>{
        setHeightMesure(e.target.value)
        calculateImc()
    }

    return {
        kgMesure,
        heightMesure,
        imcMesure,
        result,
        handleKgChange,
        handleHeightChange
    }
}
