import React from 'react'

function FilterPost(props){

    return(
        <>
        <h1>Looking for someone ?</h1>
        <form>
            <input type="text" value ={props.filter} onChange={props.filterHandler}/>
        </form>
        </>
    )
}



export default FilterPost