import React from "react";
// import Mountain1 from "../assets/1.jpg";
// import Mountain2 from "../assets/2.jpg";
// import Mountain3 from "../assets/5.jpg";
// import Mountain4 from "../assets/8.jpg";
import CharacterizationData from "./CharacterizationData";

const Characterization = () => {
  return (
    <>
      <div className="destination" id="destination">
        <h1>Character</h1>
        <p>These are some of the main criteria and analysis of Caesar</p>
        <CharacterizationData
          className="first-des"
          heading="Ambition"
          text="He is depicted as a man who craves power, glory, 
          and fame above all else. Caesar is not content with being just 
          another Roman politician or general; he wants to be the greatest 
          leader that Rome has ever seen. He is driven by a deep-seated 
          belief in his own destiny and his right to rule. His ambition is 
          evident in his actions such as willing to risk everything to achieve 
          his goals, including the 
          betrayal of friends and allies. For example, he ignores the warnings
          of his own wife Calpurnia about dangers that await him at the Senate and the
          Ides of March. We can also further see in Act 3 Scene 1 lines 61-63 that his ambition
          is also tied to his ego as he says: 'I am constant as the Northern Star Of whose true-fixed and resting quality There is no fellow in the firmament'
          saying that he compares himself to a celestial like body above the mortal realm
          "
          // img1={Mountain1}
          img1={"https://images.unsplash.com/photo-1648739614336-cf2ccf5634ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
          //img2={Mountain2}
          img2={"https://images.unsplash.com/photo-1552076170-3b3f5c8fe1c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"}
        />

        <CharacterizationData
          className="first-des-reverse"
          heading="Tragic Flaw"
          text="We can analyze his tragic flaw in Act 3 Scene 1 when Caesar
          enters the Senate and is greeted by his conspirators. Despite warnings from his friend Brutus, 
          Caesar responds with a town of arrogance and disbelief exclaiming 'Et tu, Brute?' where Caesar has the 
          inability to recognize the true nature of his enemies while misplacing his trust around
          his true people leading to his tragic downfall
          "
          //img1={Mountain3}
          img1={"https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAyNzE2MjI2ODg5/gettyimages-587489068-2.jpg"}
          //img2={Mountain4}
          img2={"https://www.historytoday.com/sites/default/files/reviews/deathofbrutus.jpg"}
        />
      </div>
    </>
  );
};

export default Characterization;

// function Destination() {
//   return (
//     <>
//       <div className="destination">
//         <h1>Popular Destinations</h1>
//         <p>Tours give you the opportunity to see a lot, within a time frame.</p>
//         <div className="first-des">
//           <div className="des-text">
//             <h2>Taal Volcano, Batangas</h2>
//             <p>
//               One of the most iconic views in Luzon, Mt. Taal boasts a volcano
//               inside a lake inside an island. If you fancy a closer look, the
//               hike up to the crater is a mere 45 minutes, and is easy enough for
//               beginners. Guides will assist you most of the way, and you’ll see
//               the peculiar environment found on an active volcano, including
//               volcanic rocks and steam vents. The hike can be dusty and hot, so
//               plan for an early morning trip, and then unwind with some bulalo
//               before heading back home!
//             </p>
//           </div>
//           <div className="image">
//             <img src={Mountain1} alt="img" />
//             <img src={Mountain2} alt="img" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Destination;
