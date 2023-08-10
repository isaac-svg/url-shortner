import { useState } from "react"
import "../styles/form.css"
const Form = () => {
  const [isError,setIsError] =  useState<boolean>(true)
  return (
    <section className="form_wrapper">
      <form className="form">
        <div className="input_container">
        <input type="text" placeholder="shorten a link here..." className={`input_field ${isError  && "input_error"}`} />
        {isError && <span className="error_msg" > Please add a link</span>}
        </div>
    <button className="form_btn">Shorten it!</button>
      </form>

      <div className="outputs">
        <div className="single_output">
          <div className="original_link-wrapper">
          <span className="original_link">
            https://localhost:3000/valence.
          </span>
          </div>
          <div className="horizontal_line"></div>
          <div className="shortened_link-container">
            
            <div className="shortened_link-wrapper">
            <span className="shortend_link">
              https://we3.rew
            </span>
            </div>
           
          
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