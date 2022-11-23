
export const Inputs = ({props}) => {
    console.log(props)
    const {value, onChange, option, min, max} = props
    return (
        <>
            <input step="1"  defaultValue="150"  type="range" min={min} max={max} onChange={onChange} value={value} id="kgPerson"/>
                {
                    option === 'kg'
                    ?
                    <p>{value} <b>{option}</b></p>
                    :
                    <p>{value*.01} <b>{option}</b></p>
                }

        </>
    )
}
