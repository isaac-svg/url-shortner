import Form from "./Form";
import "../styles/Content.Home.css"

export default function HomePage() {
    return(
        <div className="content">
            <p className="rabit">🐰</p>
            <h2>Securely Shortern your url</h2>
            <Form />
        </div>
    )
}