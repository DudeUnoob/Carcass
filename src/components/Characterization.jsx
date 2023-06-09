import React from "react";
// import Mountain1 from "../assets/1.jpg";
// import Mountain2 from "../assets/2.jpg";
// import Mountain3 from "../assets/5.jpg";
// import Mountain4 from "../assets/8.jpg";
import CharacterizationData from "./CharacterizationData";
import Caesar4 from "../assets/caesar_4.jpg"
import Caesar5 from "../assets/caesar_5.jpg"
import Caesar6 from "../assets/caesar_6.jpg"
import MarkAntony1 from "../assets/mark_antony_1.png"

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
          heading="Manipulative"
          text={"Caesar uses flattery to manipulate Antony into being loyal to him: \"When Caesar says 'Do this,' it is performed. / Set on; and leave no ceremony out.\" \
          (Act 1, Scene 2, Lines 193-197). \
          Another Instance is when Caesar is able to use his oratory skills to try to persuade and sway the crowd at his funeral, even though he's dead: \
          \"Friends, Romans, countrymen, lend me your ears; I come to bury Caesar, not to praise him. The evil that men do lives after them; The good is oft interred with their bones; So let it be with Caesar.\" (Act 3, Scene 1, Lines 222-229)" 
          }
          //img1={Mountain3}
          //img1={"https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAyNzE2MjI2ODg5/gettyimages-587489068-2.jpg"}
          img1={MarkAntony1}
          //img2={Mountain4}
          img2={"https://t3.ftcdn.net/jpg/03/62/02/98/240_F_362029878_DhDXrt6JyBmK8ZFIXl8RAJjinThSWp8a.jpg"}
        />
        <CharacterizationData
          className="first-des"
          heading="Tragic Flaw"
          text="We can analyze his tragic flaw in Act 3 Scene 1 when Caesar
          enters the Senate and is greeted by his conspirators. Despite warnings from his friend Brutus, 
          Caesar responds with a town of arrogance and disbelief exclaiming 'Et tu, Brute?' where Caesar has the 
          inability to recognize the true nature of his enemies while misplacing his trust around
          his true people leading to his tragic downfall.
          "
          //img1={Mountain3}
          //img1={"https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAyNzE2MjI2ODg5/gettyimages-587489068-2.jpg"}
          img1={Caesar6}
          //img2={Mountain4}
          img2={"https://www.historytoday.com/sites/default/files/reviews/deathofbrutus.jpg"}
        />
      </div>
    </>
  );
};

export default Characterization;
