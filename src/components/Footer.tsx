import "../styles/footer.css"
const Footer = () => {
  return (
    <div className="footer_container">
<div className="footer_logo">Shortly</div>

<div className="footer_info">

  <div className="footer_blog">
    <h3 className="footer_blog-heading">Features</h3>
    <ul className="footer_blog-items">
    <li>Link Shortening</li>
    <li>Branded Links Analytics</li>
    <li>Analytics</li>
    </ul>
  </div>

  <div className="footer_blog">
    <h3 className="footer_blog-heading">Features</h3>
    <ul className="footer_blog-items">
    <li>Blog</li>
    <li>Developers</li>
    <li>Support</li>
    </ul>
  </div>

  <div className="footer_blog">
    <h3 className="footer_blog-heading">Features</h3>
    <ul className="footer_blog-items">
    <li>About</li>
    <li>Our team</li>
    <li>Carrers</li>
    <li>Contact</li>
    </ul>
  </div>

  
</div>

<div className="icons">
    <div className="icon_wrapper">
      <img src="images/icon-facebook.svg" alt="facebook icon" />
    </div>
    <div className="icon_wrapper">
      <img src="images/icon-twitter.svg" alt="twitter icon" />
    </div>

    <div className="icon_wrapper">
      <img src="images/icon-pinterest.svg" alt="pinterest icon" />
    </div>

    <div className="icon_wrapper">
      <img src="images/icon-instagram.svg" alt="instgram icon" />
    </div>
  </div>
    </div>
  )
}

export default Footer