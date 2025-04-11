import { useState, useEffect } from "react"
import "./App.css"
export default function App() {

    const [result, setResult] = useState([]);
    const [value, setValue] = useState("");

    const [showresult, setShowResult] = useState(false);

    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/recipes/search?q=' + value);
        const data = await response.json();
        console.log(data, "data");
        setResult(data?.recipes);
    }

    useEffect(() => {
        const timer = setTimeout(fetchData, 300);
        return () => { clearTimeout(timer) }
    }, [value])

    return (
        <>
            <div>
                <h1> Auto complete  Search </h1>
                <input className="search-box" value={value} onChange={(e) => { setValue(e.target.value) }}
                    onFocus={() => setShowResult(true)}
                    onBlur={() => setShowResult(false)}
                />
                {showresult && (<div className="result-box" >
                    {result.map((res) => (
                        <span className="result">{res.name} </span>
                    ))}
                </div>)}
            </div>
        </>
    )
}
