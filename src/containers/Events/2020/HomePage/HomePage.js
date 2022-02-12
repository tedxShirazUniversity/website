import React from 'react';
import Timer from "../../../../components/Timer/Timer";
import style from "./HomePage.module.scss";
import TitleMarquee from "../../../../components/TitleMarquee/TitleMarquee";
import Description from "../../../../components/Description/Description";

const accordionItems=[
    {
        title: "TEDxShirazUniversity",
        description:"We are mainly looking forward to broaden the minds of students as well as faculty members and the ones who are merely fond of the subjects of the event. Students of different majors such as engineering, medical sciences, humanities, and art, from undergraduates to graduates. Those who tend to explore new ideas and follow them through and those who strive to make a change in the world and make it a better place to live in."
    },
    {
        title: "WHAT IS TEDx ?",
        description:"In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)"
    },
    {
        title: "WHAT IS TED ?",
        description:(
            <>
                TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
                <br /> The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established The Audacious Project that takes a collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities. 
                <br /> Follow TED on Twitter at <a href="https://www.twitter.com/TEDTalks" target="_blank" rel="noopener noreferrer">twitter.com/TEDTalks</a>, or on Facebook at <a href="https://www.facebook.com/TED" target="_blank" rel="noopener noreferrer">Facebook.com/TED</a>. 
            </>)
    },
];

const HomePage = () => {
    React.useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (  
        <div className={style.homePage}>
            <div className={style.marqueeContainer}>
                {/* <TitleMarquee background={"Cognitive Science"} title={"The unknown"}/> */}
                <TitleMarquee background={"COGNITIVE SCIENCE"} title={"COGNITIVE SCIENCE"}/>
            </div>
            <div className={style.container}>
                {/* <p className={style.themeDesc}>
                    <strong>Theme: The unknown</strong> With the constant redefinition of science and the growing number of newly emerging interdisciplinary studies, the need for reaching a general level of comprehension in areas which are not necessarily in our field of expertise, seems of the utmost importance. Furthermore, if we peer into the history and philosophy of sciences and achieve a proper understanding of scientific methods, by the means of critical reasoning and thinking, we may be able to differentiate between science and pseudoscience. The science that is defined as: Rules and theories, depending on facts, that are both empirically verifiable and practically reliable.
                </p>
                <p className={style.themeDesc}>
                    Frank Wilczek, MIT professor and physics Nobel laureate, quotes Einstein in an interview with the BBC, and says “Imagination is more important than knowledge.” But later he emphasizes that both are equally crucial and that “knowledge without imagination is barren”
                    In order to establish a new trend in various fields of science, technology, art, etc. there seems to exist the need for imagination more than ever before. This process, hand in hand with reflection, could make us step into “the unknown”, an awe-inspiring terrain, which ideally has a practical output for making the world a better place for people to live in.
                </p> */}
                <p className={style.themeDesc}>
                    “Whether we know it or not, there resides within our skulls the most complex organ ever known in the universe.”
                </p>
                <p className={style.themeDesc}>
                    One major scientific challenge of the twenty-first century is to understand the human mind from a biological perspective. By using the integration of cognitive psychology (the scientific study of the mind) and neuroscience (the scientific study of the brain) in the late twentieth century, this challenge began to be met. 
                    The result was the advent of a new scientific approach to the mind which addresses a variety of matters ranging from mental processes such as perception, learning and memory to the nature of human emotions, consciousness and awareness, encompassing also questions about free will and what determines its limits.
                    Such an approach to the study of the brain brings with it a better understanding of what makes people who they are and how the brain, with its fatty tissue and all the gyri and sulci, forms the various aspects of one's identity. Moreover, cognitive science establishes significant interactions between the scientific study of the mind and brain and other fields of science. Such interconnections help understand the mechanisms leading to scientific, artistic, interpersonal perception and creativity; and by so doing, science enters the realm of human collective experience.

                </p>
            </div>
            <div className={style.container}>
                <div className={style.timerContainer}>
                    <Timer img={require("../../../../assets/images/logos/TEDxShirazuniversityLogo/logo-black-text.png")} date={"7 Feb 2020"} time={"9 AM - 12:00 PM"}/>
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
}
export default HomePage;