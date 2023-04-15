export const exerciseOptions = {
   
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': '8119f72e85mshddda67c5a2db62cp1eebdbjsn9ff8efb7a4a4'
        }
      
}

export const fetchData = async (url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}