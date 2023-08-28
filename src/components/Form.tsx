import { FormEvent, useEffect, useRef, useState } from "react"
import axios from "axios"
import clipboardCopy from "clipboard-copy"
import useLocalStorage from "../utils/useLocalStorage"
import "../styles/form.css"
const Form = () => {
  const [isError,setIsError] =  useState<boolean>(false)
  const {addToStorage, getAllData} = useLocalStorage()
  const formRef = useRef<HTMLInputElement>(null)
  const urldataRef = useRef<HTMLSpanElement>(null)
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  interface urlObj{
    origUrl:string,
    shortUrl:string
}
  const urlData:urlObj = {
    origUrl: "",
    shortUrl: ""
  }
  const  [urls, setUrl] = useState<urlObj[]>([urlData])

  useEffect(()=>{
  
    const urls = getAllData()
    setUrl(urls)
    
  },[])
  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
    const data:string = formRef.current?.value!
    generateURL(data)
  }

const copyToBoard =  (shortUrl:string)=>{
  setCopyStatus((prevCopyStatus) => ({
      ...prevCopyStatus,
      [shortUrl]: true,
    }));
  if (urldataRef.current) {
    clipboardCopy(shortUrl)
  }
  setTimeout(()=>{
    setCopyStatus((prevCopyStatus) => ({
      ...prevCopyStatus,
      [shortUrl]: false,
    }));
    
  },3000)

}
  const generateURL = async (url:string)=>{
  try {
    const result =  await  axios.post("http://localhost:8080",{url},{
      withCredentials:true,
      headers:{
        "Content-Type":"application/json"
      }

       
    })

  const data =   result.data
    addToStorage(data)
    const res = getAllData()
    setUrl(res)
  } catch (error : any) {
    console.log(error)
    setIsError(error.message)
  }
  }
  return (
    <section className="form_wrapper">
      <div className="form_box">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input_container">
        <input ref={formRef} type="text" placeholder="shorten a link here..." className={`input_field ${isError  && "input_error"}`} />
        {isError && <span className="error_msg" > Please add a link</span>}
        </div>
    <button className="form_btn">Shorten it!</button>
      </form>
      </div>

      <div className="outputs">
        {
          urls?.map((url)=>{
            return (
              <div className="single_output" key={url.shortUrl}>
          <div className="original_link-wrapper">
          <span className="original_link">
           {url.origUrl}
          </span>
          </div>
          <div className="horizontal_line"></div>
          <div className="shortened_link-container">
            
            <div className="shortened_link-wrapper">
            <span className="shortend_link" ref={urldataRef}>
              {url.shortUrl}
            </span>
            </div>
           
           <div>
           <button className={`copy_btn ${copyStatus[url.shortUrl] ? "copied" : ""}`} onClick={()=>copyToBoard(url.shortUrl)}>{copyStatus[url.shortUrl] ? "Copied!" : "Copy"}
           </button>
           </div>
          </div>
        </div>
            )
          }

          )
        }
        

      </div>
    </section>
  )
}

export default Form