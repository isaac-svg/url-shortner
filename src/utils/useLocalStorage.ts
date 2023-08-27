
interface urlObj{
    origUrl:string,
    shortUrl:string
}
interface storageObj{
    _id:string,
    value:string,
}
const addToStorage = (data:urlObj) : void=>{

    const _id: string = Date().toString()
    const value = JSON.stringify(data);
    localStorage.setItem(_id,value)
}

const removeFromStorage = (_id:string) : void =>{

    localStorage.removeItem(_id);
}

const getAllData = () : Record<string, string>[] =>{ 

    const allData :Record<string, string> = {}
    const keys: string[] = Object.keys(localStorage);

    const result:Record<string, string>[] = [];
  
    keys.forEach(key=>{
     const data =   localStorage.getItem(key) || ""
        allData[key] = data
        
    })
     result.push(allData)

     return result;

}
const useLocalStorage = ()=>{
    return [addToStorage, removeFromStorage, getAllData]
}

export default useLocalStorage