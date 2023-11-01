import Listing from "./component/listing/listing";
import data from "./data/data.json";
import './css/listing.css';

function App() {
  return (
    <Listing data={data}/>
  );
}

export default App;
