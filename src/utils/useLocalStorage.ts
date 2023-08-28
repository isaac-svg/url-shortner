
interface urlObj{
    origUrl:string,
    shortUrl:string
}

const addToStorage = (data:urlObj) : void=>{

    const _id: string = Date().toString()
    const value = JSON.stringify(data);
    localStorage.setItem(_id,value)
}

const removeFromStorage = (_id:string) : void =>{

    localStorage.removeItem(_id);
}

const getAllData = () : urlObj[] =>{ 

    const allData :urlObj[] = []
    const keys: string[] = Object.keys(localStorage);

  
    keys.forEach(key=>{
     const data =   localStorage.getItem(key) || ""
     console.log(data, "data")
     const jsonData = JSON.parse(data)
        allData.unshift(jsonData)
        
    })
     

     return allData;

}
const useLocalStorage = ()=>{
    return {addToStorage, removeFromStorage, getAllData}
}

export default useLocalStorage