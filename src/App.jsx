import { useState, useEffect } from "react"
import './App.css';

   const App = () => {
      const [data, setData] = useState({})

      useEffect(() => {
         handleFetch() 
      }, [])


         const handleFetch = async () => {
           let response = await fetch(
              "https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
           );
            let data = await response.json();
            setData(data)
         };
   



     return (
        <div className="wrapper">
           <h1>Star Wars Quote Generator</h1>
           <button onClick={handleFetch}>Give me a quote!</button>
         <p>{data.content}</p>
        </div>
     );
};


export default App





