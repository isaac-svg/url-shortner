import { FormEvent, useEffect, useRef, useState } from "react"
import axios from "axios"
import clipboardCopy from "clipboard-copy"
import useLocalStorage from "../utils/useLocalStorage"
import "../styles/form.css"
import Loader from "../widgets/Loader"
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
const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(()=>{
  
    const urls = getAllData()
    setUrl(urls)
    
  },[])
  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
    if (!formRef.current?.value)
    {
      setIsError(true)
      return setTimeout(()=>{setIsError(false);},3000)
    }
    const data:string = formRef.current?.value!
    console.log(data)
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
    setIsLoading(true)
    const result =  await  axios.post("https://stly.vercel.app/stly",{url})
    if (result.status)
    {
      setIsLoading(false)
    }
  
    addToStorage({origUrl:url, shortUrl:result.data.payload})
    const res = getAllData()
    setUrl(res)
  } catch (error : any) {
    console.log(error)
    setIsLoading(false)
    alert(error.message)
    // setIsError(error.message)
  }
  }
  return (
    <section className="form_wrapper">
      <div className="form_box">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input_container">
        <input ref={formRef} type="url" placeholder="shorten a link here..." className={`input_field ${isError  && "input_error"}`} />
        {isError && <span className="error_msg" > Please add a link</span>}
        </div>
    <button className="form_btn">Shorten it!</button>
      </form>
      </div>

      <div className="outputs">
        {
          urls?.map((url,idx)=>{
            return (
              <div className="single_output" key={url.shortUrl+idx}>
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
    { isLoading && <Loader />}
    </section>
  )
}

export default Form