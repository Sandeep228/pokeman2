import React from 'react'

function Pokemon({pokemon,Details ,open}) {
    return (
        <div  className="flx flex-col justify-center items-center">
            {pokemon.map(({name,url})=>
            <div onClick={open} className="bg-green-300 flex justify-center items-center rounded-md m-2 p-3 "  key={name}>
                <p className=" text-xl font-bold " onClick={()=>Details(url)}>{name}</p>
            </div>)}
        </div>
    )
}

export default Pokemon


