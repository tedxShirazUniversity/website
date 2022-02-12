import React from 'react';
import Timer from "../../../../components/Timer/Timer";
import style from "./HomePage.module.scss";
import Description from "../../../../components/Description/Description";
import TitleMarquee from "../../../../components/TitleMarquee/TitleMarquee";
const accordionItems=[
    {
        title: "SHIRAZ UNIVERSITY",
        description:"Shiraz University Established in 1946 and formerly known as Pahlavi University, is one of the major universities of Iran and has always ranked as Top 5 among Iranian universities and is well respected in Iran. The University of Pennsylvania assisted the Iranian government in transforming Shiraz University into the only institution in the Middle East based on American-style higher education. The University has the second biggest campus in Iran and has pioneered the establishment of doctoral programs in Iran. Presently the university has over 19,000 students, with 200 Bachelor's degree programs (B.A., B.Sc.), 300 Master's degree programs (M.A., M.Sc.), one professional degree program (Doctor of Veterinary Medicine), and 150 Ph.D. programs. At present Shiraz University consists of 14 colleges."
    },
    {
        title: "TEDx SHIRAZUNIVERSITY",
        description:"There are many ideas which are still kept to their owners. Many of them are worth spearding. TED and TEDx events are an opportunity for these ideas so that they can be spreaded and find their way in order to be fulfilled. For the first time in Shiraz University, we are holding a TEDx event. It is time for us to do our part in spreading these ideas."
    },
    {
        title: "WHAT IS TEDx ?",
        description:"In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)"
    },
];
const HomePage = () => {
    React.useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    
    return (  
        <div className={style.homePage}>

            <div className={style.marqueeContainer}>
                <TitleMarquee background={"THOUGHT THROUGHOUT TIME"} title={"Thought Throughout Time"}/>
            </div>
            <div className={style.container}>
                <p className={style.themeDesc}>
                    Human ideas change over the course of history. Intellectuals, scientists, and philosophers of each period react to what has been previously said and thus contribute to the body of the existing knowledge. The citationary quality of human knowledge extends from repetition, confirmation, and reformation to problematization, competition and refutation. In order to have a deep grasp of man's historical development, it is necessary to know how men and women of different eras have contributed to the history of ideas. It is also necessary to reveal, through addressing different issues, how human knowledge, whether empirical or theoretical, has developed in the course of history, what ideas have been universally acknowledged and which ones have been local and short- lived.
                </p>
                <p className={style.themeDesc}>
                    We are not to judge whether man has moved along a progressive or regressive path. Theories and practices that have survived the test of time, and those that have gone out of fashion can equally be interesting to people who care about the betterment of the world in which they are living. In order to move into a better future, it is beneficial to have a review of the intellectual history, philosophical history and history of science. Such a historical perspective, can help us to remain detached and think without bias and prejudice about different people, cultures, periods and geographies.
                </p>
            </div>
            <div className={style.container}>
                <div className={style.timerContainer}>                
                    <Timer img={require("../../../../assets/images/logos/TEDxShirazuniversityLogo/logo-black-text.png")} date={"05 September 2016"} time={"8:00 AM - 5:00 PM"}/>
                </div>
            </div>
            
            <div className={style.container}>
                {
                    accordionItems.map((elem,index)=>{
                        return  <div key={index} className={[style.marTop,style.desc].join(" ")}><Description title={elem.title} description={elem.description}/></div>
                    })
                }
            </div>
            
        </div>
    );
};

export default HomePage;