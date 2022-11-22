import { useImc } from '../hooks'
import '../styles/Header.css'
import { Inputs } from './Inputs'

export const ImcResult = () => {

    const { result, 
            imcMesure, 
            kgMesure, 
            heightMesure, 
            handleKgChange, 
            handleHeightChange } = useImc()

    return (
        <div style={{backgroundColor:`${result.color}`}} className='result-content'>
            
            <Inputs props={{value:kgMesure, onChange:handleKgChange, option:'kg', min:0, max:400}}/>
            <Inputs props={{value:heightMesure, onChange:handleHeightChange, option:'m', min:0, max:250}}/>
            <p><b>Índice de masa corporal:</b> {imcMesure}</p>
            <p><b>Clasificación:</b> {result.clasificacion}</p>
            <p><b>Riesgo:</b> {result.riesgo}</p>
            
        </div>
  )
}
