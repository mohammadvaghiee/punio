import { Link } from "react-router-dom";
import '../style/videocard.css'
function Videocard({v}) {
    return ( 
        <div className="video-card">
            <Link to={`http://localhost:3000/watch/${v.id}`}>
                <img className="thumbnail" src={v.thumbnail} alt={v.title} />
            </Link>
            <div className="video-detalist">
                <div className="chanelPic-con">
                    <Link to={`http://localhost:3000/chanel/${v.videoChanel.chanel}`}>
                        <img src={v.videoChanel.chanelPic} alt="chanel Picture" className="chanelPic" />
                    </Link>
                </div>
                <div className="detalist">
                    <h2>{v.title}</h2><br/>
                    <hr/>
                    <p>{v.videoChanel.chanel}</p>⨀<p>{v.views}</p>
                </div>
            </div>
        </div>
     );
}

export default Videocard;