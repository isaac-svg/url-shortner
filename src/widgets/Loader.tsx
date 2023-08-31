import "../styles/loader.css"

const Loader = () => {
    return (
        <div className="loader_wrapper">
            <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
      )
}

export default Loader