import { Videos } from "../data";
import Videocard from "../components/videocard";
import '../style/home.css'
function Home() {
    return ( 
        <div className="parent">
            {Videos.map((v)=>(<Videocard key={v.id} v={v}/>))}
        </div>
     );
}

export default Home;