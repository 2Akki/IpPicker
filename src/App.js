// import logo from './logo.svg';
import "./App.css";
import { GETIP } from "./GetIp.js";
import FormComponent from "./components/FormComponent";
import ListComponent from "./components/ListComponent";
import LogoComponent from "./components/LogoComponent.js";
import MapComponent, { FetchIpTocords } from "./components/MapComponent.js";
import StatusComponent from "./components/StatusComponent";
import { useEffect, useState } from "react";
function App() {
  const [ItemsObject, SetItemsObject] = useState([
   
  ]);
  const [IsEditButton, SetIsEditButton] = useState(false);
  const [EditId, SetEditId] = useState(null);
  const [sortBy, setSortBy] = useState("input");
  const [ip, setIp] = useState("");
  const [location, setlocation] = useState(false);
  const [pos, setpos] = useState({latitude: 0, longitude: 0});
  const [data, setdata] = useState([])
  useEffect(() => {
    
      const ipapiUrl = `https://ipapi.co/${ip}/json/`;
      fetch(ipapiUrl)
    .then(response => response.json())
    .then(data => {

      const { latitude, longitude } = data;
      // Step 2: Use latitude and longitude with a map API (e.g., Mapbox) to display a map
      setdata(data);
      setpos({latitude:latitude,longitude:longitude})
    })
    .catch(error => {
     
    });
  
    GETIP(setIp)
    if(ip!==""){
      setTimeout(()=>{setlocation(true)},3000)
      
    }
  },[ip]);
  return (
    <>
    {location?<><div className="center" >
      <p className="fullblock" style={{textAlign:"center"}}>WELL WELL WELL.....</p>
      <img src="https://media.tenor.com/vkYnJE2Jdj8AAAAM/oh-my-god.gif" alt="🤫🧏‍♂️" style={{height:"35rem",width:"auto", marginLeft:"30%"}}></img>
      <div>
        <p>you know this?
         <br></br>
          {ip} 💀
        </p>
        
      </div>
      <MapComponent latitude={pos.latitude} longitude={pos.longitude}ip={ip}></MapComponent>
      <p>👍have a nice day </p>
      <div>
      <h2>Ur data bbg</h2>
      {Object.keys(data).map((key) => (
              <p key={key}>
                <strong>{key}:</strong> {data[key]}
              </p>
            ))}

      </div>
    </div>
    </>
    :<div className="app">
      <LogoComponent />
      <FormComponent
        
        IsEditButton={IsEditButton}
        ItemsObject={ItemsObject}
        EditId={EditId}
        
      />
      <div className="list">
        <ul>
          {ItemsObject.map((i) => {
            return (
              <ListComponent
                item={i}
                
               
                key={i.id}
               
              ></ListComponent>
            );
          })}
        </ul>
        <div className="actions">
          <select>
            <option defaultValue value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button
            
          >
            Clear list
          </button>
        </div>
      </div>
      <StatusComponent ItemsObject={ItemsObject} />
    </div>}
    </>
  );
}
export default App;
