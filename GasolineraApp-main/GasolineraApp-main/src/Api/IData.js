export async function getData(url,msg,method){
    try{
        const response = await fetch(url,{
            method: method,
            mode: 'cors'
        });
        if(response.ok){
            return await response.json();

        }
    }catch(error){
        console.log(`Error de ${msg}: ${error}`)
    }
}

export async function setData(url,msg,method,body){
    try{
        const response = await fetch(url,{
            method: method,
            mode: 'cors',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(body)
        });
        if(response.ok){
            return await response.json();
        }

    }catch(error){
        console.log(`Error de ${msg}: ${error}`)
    }
}