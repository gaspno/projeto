import './styles.css'

export const TextInput =({searchValue,handleChange})=>{

    return(

        <>
        {!!searchValue&&(<>
            <h1 style={{marginBottom: '20px'}} >Search Value :{searchValue}</h1>
            </>)}
            <input type="search"
            onChange={handleChange}
            value={searchValue}
            className="text-input"
            />
            <br/>
            <br/>
            <br/>
    </>
    )

}
    
