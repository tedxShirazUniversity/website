import React from "react";
import Timer from "../../../components/Timer/Timer";
import style from "./HomePage.module.scss";
import TitleMarquee from "../../../components/TitleMarquee/TitleMarquee";
import Description from "../../../components/Description/Description";
import bannerBg from "../../../assets/images/textures/header-bg.png";
import bannerLogo from "../../../assets/images/textures/bannerLogo.png";
// import {Button} from "@material-ui/core";
// import {OpenInNew as OpenIcon} from '@material-ui/icons';

import picAfshinMontakhab from "../../../assets/images/speakers/2021/AfshinMontakhab.jpg";
import picAliRezaAsgari from "../../../assets/images/speakers/2021/AliRezaAsgari.jpg";
import picAmirGoshtasbi from "../../../assets/images/speakers/2021/AmirGoshtasbi.jpg";
import picArminSanaei from "../../../assets/images/speakers/2021/ArminSanaei.jpg";
import picKavehFattahi from "../../../assets/images/speakers/2021/KavehFattahi.jpg";
import picMohammadNami from "../../../assets/images/speakers/2021/MohammadNami.jpg";
import picMohammadRezaAmini from "../../../assets/images/speakers/2021/MohammadRezaAmini.jpg";
import picMohammadRezaAslani from "../../../assets/images/speakers/2021/MohammadRezaAslani.jpg";
import picSoroushNaziri from "../../../assets/images/speakers/2021/SoroushNaziri.jpg";

// const calculateDiff=(startTime,endTime)=>{
//     const diff=endTime - startTime;
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);
//     return{
//         days:days,
//         hours:hours,
//         minutes:minutes,
//         seconds:seconds
//     }
// };

const accordionItems = [
  {
    title: "TEDxShirazUniversity",
    description:
      "We are mainly looking forward to broaden the minds of students as well as faculty members and the ones who are merely fond of the subjects of the event. Students of different majors such as engineering, medical sciences, humanities, and art, from undergraduates to graduates. Those who tend to explore new ideas and follow them through and those who strive to make a change in the world and make it a better place to live in.",
  },
  {
    title: "WHAT IS TEDx ?",
    description:
      "In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)",
  },
  {
    title: "WHAT IS TED ?",
    description: (
      <>
        TED is a nonprofit organization devoted to Ideas Worth Spreading.
        Started as a four-day conference in California 30 years ago, TED has
        grown to support its mission with multiple initiatives. The two annual
        TED Conferences invite the world's leading thinkers and doers to speak
        for 18 minutes or less. Many of these talks are then made available,
        free, at TED.com. TED speakers have included Bill Gates, Jane Goodall,
        Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe
        Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
        <br /> The annual TED Conference takes place each spring in Vancouver,
        British Columbia. TED's media initiatives include TED.com, where new TED
        Talks are posted daily; TED Translators, which provides subtitles and
        interactive transcripts as well as translations from volunteers
        worldwide; the educational initiative TED-Ed. TED has established The
        Audacious Project that takes a collaborative approach to funding ideas
        with the potential to create change at thrilling scale; TEDx, which
        supports individuals or groups in hosting local, self- organized
        TED-style events around the world, and the TED Fellows program, helping
        world-changing innovators from around the globe to amplify the impact of
        their remarkable projects and activities.
        <br /> Follow TED on Twitter at{" "}
        <a
          href="https://www.twitter.com/TEDTalks"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter.com/TEDTalks
        </a>
        , or on Facebook at{" "}
        <a
          href="https://www.facebook.com/TED"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook.com/TED
        </a>
        .
      </>
    ),
  },
];

const partnersImg = [
  picMohammadNami,
  picKavehFattahi,
  picAfshinMontakhab,
  picMohammadRezaAmini,
  picMohammadRezaAslani,
  picAliRezaAsgari,
  picArminSanaei,
  picAmirGoshtasbi,
  picSoroushNaziri,
];
const Banner = () => {
  // const [countdown,setCountdown]= React.useState(null);
  // const [countdownText,setCountdownText]= React.useState(null);

  // React.useEffect(()=>{
  //     const countdownSetter=(cd,intervalId)=>{
  //         if (cd.days>=0 && cd.hours >= 0 && cd.minutes >= 0 && cd.seconds >= 0){
  //             setCountdownText("Event Starts in: ")
  //             setCountdown(cd);
  //         }
  //         else{
  //             setCountdownText("Watch Online on Aparat");
  //             setCountdown(null);

  //             if(intervalId){
  //                 clearInterval(intervalId);
  //             }
  //         }
  //     }

  //     const eventTime = new Date("June 24, 2021 18:00:00").getTime();
  //     const currentTime= new Date().getTime();

  //     const cd = calculateDiff(currentTime,eventTime);
  //     countdownSetter(cd);
  //     let intervalID;
  //     if (cd.days>=0 && cd.hours >= 0 && cd.minutes >= 0 && cd.seconds >= 0){
  //         intervalID = setInterval(()=>{
  //             const currentTime= new Date().getTime();
  //             const cd = calculateDiff(currentTime,eventTime);
  //             countdownSetter(cd,intervalID);
  //         },1000)
  //     }

  //     return ()=>{
  //         clearInterval(intervalID);
  //     }

  // },[]);

  return (
    <a href="https://www.aparat.com/event/4681">
      <div className={style.bannerContainer}>
        <img
          draggable="false"
          className={style.bannerBg}
          src={bannerBg}
          alt="TEDxShirazUniversity banner"
        />
        {/* <div className={style.bannerTxtContainer}>
                    <div className={style.bannerTxt}>{countdownText}</div>
                    <div className={style.countdown}>{countdown ? `${countdown.days>0 ?  countdown.days : ""} ${countdown.days>0 ? countdown.days>1 ? "days" : "day" : "" } ${countdown.hours<10 ? '0' + countdown.hours : countdown.hours }:${countdown.minutes<10 ? '0' + countdown.minutes : countdown.minutes}:${countdown.seconds<10 ? '0' + countdown.seconds : countdown.seconds}` :""}</div>
                    <div className={style.button}>GET A TICKET &nbsp;<OpenIcon fontSize="small"/></div>
                </div> */}
        <img
          draggable="false"
          className={style.bannerLogo}
          src={bannerLogo}
          alt="TEDxShirazUniversity banner"
        />
      </div>
    </a>
  );
};

const HomePage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.homePage}>
      <Banner />

      <div className={style.marqueeContainer}>
        <TitleMarquee background={"THE UNKNOWN"} title={"The unknown"} />
      </div>
      <div className={style.container}>
        <p className={style.themeDesc}>
          <strong>Theme: The unknown</strong> With the constant redefinition of
          science and the growing number of newly emerging interdisciplinary
          studies, the need for reaching a general level of comprehension in
          areas which are not necessarily in our field of expertise, seems of
          the utmost importance. Furthermore, if we peer into the history and
          philosophy of sciences and achieve a proper understanding of
          scientific methods, by the means of critical reasoning and thinking,
          we may be able to differentiate between science and pseudoscience. The
          science that is defined as: Rules and theories, depending on facts,
          that are both empirically verifiable and practically reliable.
        </p>
        <p className={style.themeDesc}>
          Frank Wilczek, MIT professor and physics Nobel laureate, quotes
          Einstein in an interview with the BBC, and says “Imagination is more
          important than knowledge.” But later he emphasizes that both are
          equally crucial and that “knowledge without imagination is barren” In
          order to establish a new trend in various fields of science,
          technology, art, etc. there seems to exist the need for imagination
          more than ever before. This process, hand in hand with reflection,
          could make us step into “the unknown”, an awe-inspiring terrain, which
          ideally has a practical output for making the world a better place for
          people to live in.
        </p>
      </div>
      <div className={[style.container, style.speakersContainer].join(" ")}>
        {partnersImg.map((partnerImg) => {
          return (
            <div key={partnerImg} className={style.item}>
              <img
                draggable="false"
                width="300"
                src={partnerImg}
                alt="TEDxShirazUniversity partner"
              />
            </div>
          );
        })}
      </div>
      <div className={style.container}>
        <div className={style.timerContainer}>
          <Timer
            img={require("../../../assets/images/logos/TEDxShirazuniversityLogo/logo-black-text.png")}
            date={"24 June 2021"}
            time={"6 PM - 21 PM"}
          />
        </div>
        {/* <div>
                    <a href="https://www.aparat.com/event/4681">
                        <Button style={{fontFamily:"Vazir",background:"#F0280B",color:"#fff",padding:"8px 14px",fontSize: "clamp(.9rem, 1.5vw, 1.2rem)" }}>Get a Ticket | خرید بلیط</Button>
                    </a>
                </div> */}
      </div>
      <div className={style.container}>
        {accordionItems.map((elem, index) => {
          return (
            <div key={index} className={[style.marTop, style.desc].join(" ")}>
              <Description title={elem.title} description={elem.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HomePage;
