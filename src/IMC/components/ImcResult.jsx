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
            
            <Inputs props={{value:kgMesure, onChange:handleKgChange, option:'kg', min:0, max:100}}/>
            <Inputs props={{value:heightMesure, onChange:handleHeightChange, option:'m', min:0, max:220}}/>
            {/* <input step="1"  defaultValue="150"  type="range" min="0" max="100" onChange={handleKgChange} value={kgMesure} id="kgPerson"/>
            <p>
                {kgMesure} kg
            </p>
            <input step="1"  defaultValue="150"  type="range" min="0" max="220" onChange={handleHeightChange} value={heightMesure}  id="heightPerson"/>
            
            <p>
                {heightMesure*.01} m
            </p> */}
            
            <p>Índice de masa corporal: {imcMesure}</p>
            <p>Clasificación: {result.clasificacion}</p>
            <p>Riesgo: {result.riesgo}</p>
            
        </div>
  )
}
