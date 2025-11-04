import {useParams} from 'react-router-dom';
import { Videos } from "../data.js";
import '../style/watch.css';
import { Link } from 'react-router-dom';
function Watch() {
    const {id} = useParams();
    const video = Videos.find(i => i.id == id)
    return ( 
        <div className='video-page'>
            <video controls src={video.videoUrl}></video>
            <div className="video-detalist">
                <div className="chanelPic-con">
                    <Link to={`http://localhost:3000/chanel/${video.videoChanel.chanel}`}>
                        <img src={video.videoChanel.chanelPic} alt="chanel Picture" className="chanelPic" />
                    </Link>
                </div>
                <div className="detalist">
                    <h2>{video.title}</h2><br/>
                    <hr/>
                    <p>{video.videoChanel.chanel}</p>⨀<p>{video.views}</p>
                </div>
            </div>
        </div>
     );
}

export default Watch;