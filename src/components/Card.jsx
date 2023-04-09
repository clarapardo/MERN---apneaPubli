import { IoMailOutline, IoChevronForward, IoApps, IoNotifications, IoPieChart, IoNewspaper, IoCard, IoColorFill } from "react-icons/io5";
import { IconContext } from "react-icons";


const Card = ({ title, dates, location }) => {

    return (
        <div className={location ? 'card' : 'card dark'} >
            {
                title ?
                    <>
                        < div className="icon" ></div >
                        <h6>{title}</h6>
                        <p className="date">{dates}</p>
                        <p className="location">{location}</p>
                        <a to="/001"><span>learn more</span>
                            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
                                <IoChevronForward />
                            </IconContext.Provider>
                        </a>
                    </>
                    :
                    <>
                        <img src={process.env.PUBLIC_URL + '/images/line.png'} alt="line" className="line" />
                        <h6>More...</h6>
                        <a to="#">
                            <span>view more...</span>
                            <div className="icon">
                                <IconContext.Provider value={{ color: "#fff", size: "18px" }}>
                                    <IoChevronForward />
                                </IconContext.Provider>
                            </div>
                        </a>
                    </>
            }
        </div >
    )
}

export default Card;