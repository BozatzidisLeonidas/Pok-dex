import React from 'react';

const Api = () => {
    
    const promises=[];

    for(let i=1; i<=1025; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url)
        .then((res) =>{
             return res.json();
        }))
    }   
    // eslint-disable-next-line no-restricted-globals
    // const results=await Promise.all(promises)
    Promise.all(promises).then(results => {
        const pokemon=results.map((data)=>({
            name:data.name,
            id:data.id,
            image:data.sprites['front_default'],
            // type01:data.types[0].type.name,
            // type02:data.types[1]?.type.name
            type:data.types.map((type) => type.type.name).join(',')
        }))
        console.log(pokemon)
    })

    return(
        console.log('kalhspera')
    );
}

export default Api;