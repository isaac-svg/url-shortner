
interface urlObj{
    origUrl:string,
    shortUrl:string
}

const addToStorage = (data:urlObj) : void=>{

    const _id: string = new Date().toString();
    const value = JSON.stringify(data);
    localStorage.setItem(_id,value)
}

const removeFromStorage = (_id:string) : void =>{

    localStorage.removeItem(_id);
}

const getAllData = () : urlObj[] =>{ 

    const allData :urlObj[] = []
    const keys: string[] = Object.keys(localStorage);

  
    keys.forEach(key=>{   // O(n)
     const data =   localStorage.getItem(key) || ""
    
     const jsonData = JSON.parse(data) 
    
        allData.push(jsonData); // O(1)
        
    })
     

     return (allData.reverse()); //O(n)

}
const useLocalStorage = ()=>{
    return {addToStorage, removeFromStorage, getAllData}
}

export default useLocalStorage