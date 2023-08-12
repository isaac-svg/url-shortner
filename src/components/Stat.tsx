import '../styles/stat.css'
const Stat = () => {
  return (
    <div className="stat_container">
      
      <div className="stat_msg">
        <h4 className='stat_msg-header'>Advanced Statistics</h4>
        <span className='stat_msg-description'> Track how your links are performing across the web with our advanced statistics dashboard.</span>
      </div>
      <div className="cards">
      <div className="ruler"></div>
        <div className="card card_1">
          <div className="card_logo">
            <img src="images/icon-brand-recognition.svg" alt="" />
          </div>
          <h3 className="card_title">Brand Recognition</h3>

          <span className="card_msg" >Boost your brand recognition with each click. Generate links that don't mean a thing. Branded links help instil confident in your product.</span>
        </div>
        <div className="card card_2">
          <div className="card_logo">
            <img src="images/icon-detailed-records.svg" alt="" />
          </div>
          <h3 className="card_title">Detailed Records</h3>

          <span className="card_msg" >Gain insights into who is clicking your link. Knowing when and where people engage with your contents helps inform better decisions.</span>
        </div>
        <div className="card card_3">
          <div className="card_logo">
            <img src="images/icon-fully-customizable.svg" alt="" />
          </div>
          <h3 className="card_title">Fully Customizable</h3>

          <span className="card_msg" >Improve brand awareness and content discoverability through customizable links. supercharging audience engagement.</span>
        </div>
         
      </div>
    </div>
  )
}

export default Stat