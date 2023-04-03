import "./HomeHeroStyles.css";
import { TypeAnimation } from "react-type-animation"

function HomeHero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="heroImg" />
        <div className="hero-text">
          {/* <h1>{props.title}</h1> */}
          <h1>
          <TypeAnimation 
          
            sequence={[
              "Made by Dom",
              2000,
              props.title,
              
            ]}
            
            cursor={true}
            
          
          />
          </h1>
          <p>{props.text}</p>
          <a className={props.btnClass} href={props.url}>
            {props.buttonText}
          </a>

        </div>
        {/* <h1>Your Journey Your Story</h1>
        <p>Choose Your Favourite Destination.</p>
        <a href="index.html">Travel Plan</a> */}
      </div>
    </>
  );
}

export default HomeHero;
