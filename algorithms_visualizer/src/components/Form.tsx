import { useState } from "react"
import "../styles/form.css"
const Form = () => {
  const [isError,setIsError] =  useState<boolean>(false)
  return (
    <section className="form_wrapper">
      <form className="form">
        <div className="input_container">
        <input type="text" placeholder="shorten a link here" className="input_field" />
        {isError && <span className="error_msg" > please add a link</span>}
        </div>
    <button className="form_btn">Shorten it!</button>
      </form>
      <div className="outputs">
        <div className="single_output">
          <div className="original_link-wrapper">
          <span className="original_link">
            https://localhost:3000/valence.coksdjgfdskjfhkdsjhfkjdsfhkjsdfkdsjfksfkdsjfks
          </span>
          </div>
          <div className="horizontal_line"></div>
          <div className="shortened_link-container">
            
            <span className="shortend_link">
              https://we3.rewrdjhdskjfghdksjfgdskjhfsdkhfkdsjfhks.codfgjfdgodfgidgdogdogid
            </span>
          
           <div>
           <button className="copy_btn">Copy</button>
           </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form