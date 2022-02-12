import React from 'react';
import {Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import Sponsers from "../../Sponsers/Sponsers";
import Speakers from "../../Speakers/Speakers";


const sponsers=[
    {
        title:"Main Partners",
        items:[
            {
                image:require("../../../assets/images/sponsors/shzu.png"),
                url:"https://www.shirazu.ac.ir/",
                title:"Shiraz University"
            },
            {
                image:require("../../../assets/images/sponsors/ghajari.png"),
                title:"قاجاری"
            },
            {
                image:require("../../../assets/images/sponsors/Park.png"),
                url:"http://www.fstp.ir/",
                title:" پارک علم و فناوری"
            },                
            {
                image:require("../../../assets/images/sponsors/Artfactory.jpg"),
                url:"https://artfactoryedu.com/",
                title:"ArtFactory"
            },                
        ]
    },
    {
        title:"In-Kind Partners",
        items:[
            {
                image:require("../../../assets/images/sponsors/hisupport.png"),
                url:"https://hisupport.net",
                title:"Hisupport"
            },
            {
                image:require("../../../assets/images/sponsors/mailchimp.png"),
                url:"https://mailchimp.com/",
                title:"MailChimp"
            },
            {
                image:require("../../../assets/images/sponsors/techlab.jpg"),
                url:"https://archtechlab.ir",
                title:"Techlab"
            }
        ]
    }
]
let speakers=[
    {
        name:"Mohammad Nami",
        description:"Mohammad Nami (1978, Tehran) is an Iranian medical doctor and neuroscientist. He gained his medical specialty in neuroscience and his fellowship in sleep disorders. Not only is he among the university's top-ranked scholars due to his numerous scientific articles and speeches presented in international congresses but also, he has been recognized as a top-rated contributor to numerous international neuroscience events. During the past several years, he has led several Brain Awareness and Autism Multidisciplinary works, conducted workshops on Sleep Medicine/Sleep Neuroscience across the country, and gained experience as corporate trainer in the field of professional development skills at Behphar Pharmaceutical Holding in Iran. Dr. Nami is currently the Head of the Department of Neuroscience at Shiraz University of Medical Sciences (SUMS), the chief-editor of two international and interdisciplinary journals (JAMSAT, Neuroscience Research Letters), and the president of the Iranian Neuroscience Society, Fars Chapter. The Neuroscience Lab (NSL) at SUMS has been a dynamic platform for interdisciplinary studies where he and his associates deal with. He has been a Dale Carnegie’s alumnus since 2014 and yearns to gain further expertise in the field of organizational and leadership training. He is also passionate about the concept of “Neuro-leadership” and how human brain potentials drive their behavior as a leader to inspire others. In addition to his scientific activities, he is an avid artist interested in traditional Iranian country music, especially singing."
        ,img:require("../../../assets/images/speakers/mNami.jpg"),
    },
    {
        name:"Reza Boostani",
        description:"Reza Boostani was born in 1973. He received his B.Sc. degree in electrical engineering from Shiraz University, Shiraz, Iran, in 1996, and his M.Sc. and Ph.D. degrees in biomedical engineering from Amirkabir University of Technology (a.k.a Tehran Polytechnique), Tehran, Iran, in 1999 and 2004, respectively. During his Ph.D. program, he spent his research period at Graz University of Technology, Graz, Austria, in the field of BCI, from 2002 to 2003. Since 2004, he has been a faculty member at the department of Computer Science, Engineering and IT (CSE & IT) in Shiraz University. He is a two-time winner of “The Distinguished Professor of Shiraz University” title, in years 2010 and 2017. He has published more than 100 journal papers in the international magazines. His current research interests include biomedical signal processing, statistical pattern recognition, and machine learning. (Based on document published on 1 May 2019).",
        img:require("../../../assets/images/speakers/rBostani.jpg"),
    },
    {
        name:"Afshin Montakhab",
        description:"Afshin Montakhab has a Ph.D. in theoretical condensed matter physics from University of California, Santa Barbara. His specialty is Statistical Mechanics. He has been teaching and doing research at Shiraz University since 2000. He works on a variety of problems from complex networks to relativistic thermodynamics. He is also interested in the two fast-growing fields of quantum information and neuroscience.",
        img:require("../../../assets/images/speakers/aMontakhab.jpg"),
    }
]
const Event2020 = ({addNavLinks},props) => {
    return (
        <>
            <Route exact path="/2020/" component={HomePage} />
            <Route exact path="/2020/partners" component={()=>{ return <Sponsers sponsers={sponsers}/> }} />
            <Route exact path="/2020/speakers" component={()=>{return <Speakers speakers={speakers}/>}} />
        </>
    );
}
 
export default Event2020;