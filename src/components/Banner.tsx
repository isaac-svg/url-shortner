import "../styles/banner.css"

const Banner = () => {
  return (
    <section className='banner_wrapper'>
      <div className='banner_img-container'>
        <img src="/images/illustration-working.svg" alt="banner" className='banner_img'/>
      </div>
      <div className='banner_info-wrapper'>
        <span className='banner_info-bold'>More than just shorter links</span>
        <span className='banner_info-small'>Build your brand's recognition and get detailed insights on how your links are peforming</span>
        <div className='banner_btn-container'>
          <button className='banner_btn'>
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner