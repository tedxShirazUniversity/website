import React from 'react';
import {Route } from "react-router-dom";
import HomePage from './HomePage';
import Sponsers from "../../Sponsers/Sponsers";
import Speakers from "../../Speakers/Speakers";


const sponsers=[
    {
        title:"Partners",
        items:[
            {
                image:require("../../../assets/images/sponsors/shzu.png"),
                url:"https://www.shirazu.ac.ir/",
                title:"Shiraz University"
            },  
            {
                image:require("../../../assets/images/sponsors/ASA.png"),
                url:"http://asamedtech.com/",
                title:"آسا طب شریف"
            },                
            {
                image:require("../../../assets/images/sponsors/Pouyesh.jpg"),
                url:"http://instagram.com/suwfea",
                title:"پویش بانوان استاد دانشگاه پشتیبان توامند‌سازی دانشجویان"
            },                
        ]
    },
    {
        title:"",
        items:[
            {
                image:require("../../../assets/images/sponsors/Quantumaccelerator.png"),
                url:"https://qstartups.ir/",
                title:"شتابدهنده کوآنتوم"
            },
            {
                image:require("../../../assets/images/sponsors/RECONNECT.jpg"),
                title:"Reconnect office"
            },                
        ]
    },        
    {
        title:"",
        items:[

            {
                image:require("../../../assets/images/sponsors/Abee.jpg"),
                url:"https://instagram.com/abee.culturalcenter",
                title:"مجموعه فرهنگی آبی"
            },
            {
                image:require("../../../assets/images/sponsors/Catmap.jpg"),
                url:"https://thecatmap.com/",
                title:"TheCatMap"
            },                   
        
            {
                image:require("../../../assets/images/sponsors/Aparat.png"),
                url:"https://www.aparat.com/",
                title:"Aparat"
            },          
            {
                image:require("../../../assets/images/sponsors/hisupport.png"),
                url:"https://hisupport.net/",
                title:"Hisupport"
            },         
            {
                image:require("../../../assets/images/sponsors/Sprout-Coffee.png"),
                title:"Sprout Coffee"
            },                
        ]
    },
];

let speakers=[
    {
        name:"Mohammad Nami",
        description:"Mohammad Nami (1978, Tehran) is an Iranian medical doctor and neuroscientist. He gained his medical specialty in neuroscience and his fellowship in sleep disorders. Not only is he among the university's top-ranked scholars due to his numerous scientific articles and speeches presented in international congresses but also, he has been recognized as a top-rated contributor to numerous international neuroscience events. During the past several years, he has led several Brain Awareness and Autism Multidisciplinary works, conducted workshops on Sleep Medicine/Sleep Neuroscience across the country, and gained experience as corporate trainer in the field of professional development skills at Behphar Pharmaceutical Holding in Iran. Dr. Nami is currently the Head of the Department of Neuroscience at Shiraz University of Medical Sciences (SUMS), the chief-editor of two international and interdisciplinary journals (JAMSAT, Neuroscience Research Letters), and the president of the Iranian Neuroscience Society, Fars Chapter. The Neuroscience Lab (NSL) at SUMS has been a dynamic platform for interdisciplinary studies where he and his associates deal with. He has been a Dale Carnegie’s alumnus since 2014 and yearns to gain further expertise in the field of organizational and leadership training. He is also passionate about the concept of “Neuro-leadership” and how human brain potentials drive their behavior as a leader to inspire others. In addition to his scientific activities, he is an avid artist interested in traditional Iranian country music, especially singing."
        ,img:require("../../../assets/images/speakers/2021/MohammadNami.jpg"),
    },
    {
        name:"Kaveh Fattahi",
        description:"Kaveh Fattahi is a designer with an academic background and experience in both Architecture and Urban Design. Currently he is an Assistant Professor of Architecture in the Faculty of Art and Architecture of Shiraz University and the Founder and Director of Tech-Lab. He holds a PhD in Urban Design and Planning from the Graduate School of Engineering, Hokkaido University in Japan (2010), where he was a Postdoc Research Fellow in the Architectural Design Laboratory as well. His main research topic is Neuro-architecture, which is a novel method of studying restorative/destructive effects of architectural/urban environmental cues on users' mental well-being, perception, sensation and behavior using Neurotechnology-oriented approach. In 2019 he has started a new division in the Tech-lab called NEUROTECHTURE (Neuroscience + Technology + Architecture) to address such research themes and to initiate and strengthen the application of emerging technology tools/methods in architecture and urban design studies. He has received two National Research Grants from the Ministry of Science, Research and Technology and Ministry of Education respectively to define the first National Green University and Green Schools’ Reference Guides and Rating Systems. He has been awarded in several international and national level conferences/competitions during his career.   ",
        img:require("../../../assets/images/speakers/2021/KavehFattahi.jpg"),
    },
    {
        name:"Afshin Montakhab",
        description:"Afshin Montakhab has a Ph.D. in Theoretical Condensed Matter Physics from the University of California, Santa Barbara. His specialty is Statistical Mechanics. He has been teaching and doing research at Shiraz University since 2000. He works on a variety of problems from complex networks to relativistic thermodynamics. He is also interested in the two fast-growing fields of quantum information and neuroscience.",
        img:require("../../../assets/images/speakers/2021/AfshinMontakhab.jpg"),
    },
    {
        name:"Mohammad Reza Amini",
        description:"Dr. Mohammad Reza Amini, born in 1339, first began studying sociology at Shiraz University, but changed majors to Persian literature during the Cultural Revolution. His scientific curiosity led him to study general linguistics during his master's courses. He studied Persian literature in his doctoral course. He is currently an associate professor in this field at Shiraz University. In addition to literary articles, which are mainly in the fields of literary criticism, poetry, stylistics and analysis of the language of poetry, he has translated texts and poems from English and French into Persian. His first translated book is the poetry of the seventeenth-century French poet Nicolas Boalou, some poems by Andre Chagnie and Victor Hugo. He has been teaching Persian language and literature at the University of Strasbourg, France, for four years and is one of the founders of the University Center of Iranian Studies and Research in Alsace. Dr. Amini has always been interested in studying and thinking about the philosophy of art and has done some work in drawing and painting for a long time. In 1398, he published the book \"New Miniatures\".",
        img:require("../../../assets/images/speakers/2021/MohammadRezaAmini.jpg"),
    },
    {
        name:"Mohammad Reza Aslani",
        description:"Mohammad Reza Aslani is a filmmaker, documentarian, poet, painter, graphic designer, and an art theorist. He has a bachelor’s degree in painting from the College of Decorative Arts (currently Tehran University of Arts). He also studied filmmaking at the Higher School of Cinema and Television and holds a First Class Academy Award.",
        img:require("../../../assets/images/speakers/2021/MohammadRezaAslani.jpg"),
    },
    {
        name:"Alireza Askari Chavardi",
        description:"Alireza Askari Chavardi, a faculty member of the history department at Shiraz University, received his doctorate in Historical Archeology from Tarbiat Modares University. He has been the dean of Shiraz University of Arts for several years and has completed several excavation projects, cooperating with archaeologists from different universities.",
        img:require("../../../assets/images/speakers/2021/AliRezaAsgari.jpg"),
    },
    {
        name:"Armin Sanayei",
        description:"Armin Sanayei born in Tehran-Iran in 1992.As a freelance composer, his pieces have been performed in several halls by great musicians and ensembles such as Hugo Wolf Quartet, Alban Berg Ensemble Wien, Duo Arcord, Reconsil Ensemble Vienna (conducted by Roland Freisitzer), Max Brand Ensemble, Florian Berner(Cello), Marta Sudraba(Cello), Ana Topalovic(Cello), Elise Jacoberger(Bassoon),Theresa Dinkhauser(Clarinet), Linus Köhring(Viola), Kaori Nishii(Piano), Jacob Hernández Enríquez(Violin), etc.On the summer of 2019, he also had a remarkable opportunity to be invited by Peter Ruzicka to conduct his orchestral piece(Veins, as tree branches)with the \"Tonkünstler Orchestra\" at the Grafenegg Festival 2019.Also, his 1st string quartet has been premiered on 24th February 2020 by \"Alban Berg Ensemble Wien\" in Wiener Musikverein- Brahms hall.Armin Sanayei started music with plying violin under Ebrahim Lotfi at the age of 6 in Tehran. he started to learn composition from Amir H.Eslami and then under renowned Iranian composer, Ahmad Pejman when he was 12.In 2013 he has been invited by Dr.Peter Leisch to Festival 4020 in Linz to get his “Clarinet Quintet” premiered with \"Hugo Wolf String Quartet\" in Brucknerhaus. it spired him to move to Austria and pursue his composition study in Vienna.Since 2013 he is a composition student in the university of music and performing arts Vienna (MDW) under Prof. Dr. Martin Lichtfuss and Prof. Detlev Müller-Siemens(student of G.Ligeti and O.Messiean)",
        img:require("../../../assets/images/speakers/2021/ArminSanaei.jpg"),
    },

];

const Event2021 = ({addNavLinks},props) => {
    return (
        <>
            <Route exact path="/2021/" component={HomePage} />
            <Route exact path="/2021/partners" component={()=>{return <Sponsers sponsers={sponsers}/> }} />
            <Route exact path="/2021/speakers" component={()=>{return <Speakers speakers={speakers}/>}} />
        </>
    );
}
 
export default Event2021;