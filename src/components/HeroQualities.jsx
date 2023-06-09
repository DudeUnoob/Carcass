import "./HeroQualityStyles.css";
import HeroQualitiesData from "./HeroQualitiesData";
// import Trip1 from "../assets/5.jpg";
// import Trip2 from "../assets/8.jpg";
// import Trip3 from "../assets/6.jpg";
import Caesar1 from "../assets/caesar_1.png"
import Caesar2 from "../assets/caesar_2.png"
import Caesar3 from "../assets/caesar_3.jpg"

function Trip() {
  return (
    <div className="trip">
      <h1>Qualities</h1>
      <p>Discover the standout qualities of Caesar</p>
      <div className="tripcard">
        <HeroQualitiesData
          //image={Trip1}
          
          heading="Charismatic and Confident"
          image={Caesar1}
          
          text="I'm known for my magnetic personality and ability to inspire loyalty in others. My confidence in my own abilities 
          leads me for destined greatness. I'm not afraid to take risks and make difficult decisions as I am willing to put myself in danger for the sake of my goals.
          "
        />
        <HeroQualitiesData
          //image={Trip2}
          image={"https://t4.ftcdn.net/jpg/05/73/41/43/240_F_573414315_ralJ4yViCgFV3b5R5rwQCs29pBgPWW16.jpg"}
          heading="Arrogant and Egotistical"
          text="My overconfidence turns into arrogance making me believe I am above the laws of fate and destiny. This leads me to being highly concerned of my own reputation
          and legacy."
        />
        <HeroQualitiesData
          //image={Trip3}
          image={Caesar3}
          heading="Authoritative and Patriotic"
          text="My commanding presence gives a strong presence of authority making me respected and admired by my friends, people, and characters in the play who look up to me
          as a great leader. However, this authority also the source of fear and mistrust as some of my friends start to view me as a tyrant seeking to consolidate power. My patrioism 
          is commited to the prosperity and well-being of Rome, but blinds me to the concerns and grievances of other factions in Rome leading to my downfall."
        />
      </div>
    </div>
  );
}

export default Trip;
