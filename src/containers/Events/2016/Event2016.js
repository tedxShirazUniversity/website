import React from 'react';
import {Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import Team from "../../../components/Team/Team";
import Sponsers from "../../Sponsers/Sponsers";
import Speakers from "../../Speakers/Speakers";


const sponsers=[
    {
        title:"MAIN PARTNER",
        items:[
            {
                image:require("../../../assets/images/sponsors/shzu.png"),
                url:"https://www.shirazu.ac.ir/",
                title:"Shiraz University"
            }
        ]
    },
    {
        title:"SUPPORTING PARTNERS",
        items:[
            {
                image:require("../../../assets/images/sponsors/nokhb.png"),
                url:"https://bmn.ir",
                title:"Bonyade melli nokhbegan"
            },
            {
                image:require("../../../assets/images/sponsors/dey.png"),
                url:"https://bank-day.org",
                title:"Dey bank"
            },
        ]
    },
    {
        title:"CATERING PARTNERS",
        items:[
            {
                image:require("../../../assets/images/sponsors/lucida.jpg"),
                title:"lucida"
            },
            {
                image:require("../../../assets/images/sponsors/plant.jpg"),
                title:"coffee plant"
            },
            {
                image:require("../../../assets/images/sponsors/kaleh.png"),
                url:"https://kalleh.com",
                title:"kalleh"
            },
        ]
    },
    {
        title:"IN-KIND PARTNERS",
        items:[
            {
                image:require("../../../assets/images/sponsors/chapchi.png"),
                title:"chapchi"
            },
            {
                image:require("../../../assets/images/sponsors/honar.png"),
                title:"honar"
            },
            {
                image:require("../../../assets/images/sponsors/bamilo.png"),
                title:"bamilo"
            },
            {
                image:require("../../../assets/images/sponsors/bazar.png"),
                title:"bazar"
            },
            {
                image:require("../../../assets/images/sponsors/agah.png"),
                title:"agah"
            },
        ]
    },
    {
        title:"MEDIA PARTNERS",
        items:[
            {
                image:require("../../../assets/images/sponsors/event.png"),
                title:"event"
            },
            {
                image:require("../../../assets/images/sponsors/shzu.png"),
                title:"ShirazUniversity"
            },
            {
                image:require("../../../assets/images/sponsors/rah.png"),
                title:"Rah pardakht"
            },
            {
                image:require("../../../assets/images/sponsors/pring.png"),
                title:"pring"
            },
            {
                image:require("../../../assets/images/sponsors/shiraz1400.png"),
                title:"shiraz1400"
            },
            {
                image:require("../../../assets/images/sponsors/sarmad.png"),
                title:"sarmad"
            },
            {
                image:require("../../../assets/images/sponsors/ictstartup.png"),
                title:"ictstartup"
            },
            {
                image:require("../../../assets/images/sponsors/barsam.png"),
                title:"barsam"
            },
            {
                image:require("../../../assets/images/sponsors/bird.jpg"),
                title:"bird"
            },
        ]
    },
]
const team=[
    {
        name:"Ghazal Kaviani",
        image:require("../../../assets/images/team/gKaviani.jpg"),
        description:"Organiser",
        groups:["curation" ,"sponsership"],
        // socialMedia:[
        //     {
        //         media:"email",
        //         link:"somelink"
        //     },
        //     {
        //         media:"instagram",
        //         link:"somelink"
        //     },
            
        // ]
    },
    {
        name:"Mohammad Hossein Farshad",
        image:require("../../../assets/images/team/mFarshad.jpg"),
        description:"Co-Organiser",
        groups:["curation" ,"sponsership", "webdev", "media"]
    },
    {
        name:"Reza Marzban",
        image:require("../../../assets/images/team/rMarzban.jpg"),
        description:"",
        groups:["sponsership" ,"curation", "graphic"]
    },
    {
        name:"Sepehr Taghavi",
        image:require("../../../assets/images/team/sTaghavi.jpg"),
        description:"",
        groups:["sponsership"]
    },
    {
        name:"Masih Ariani",
        image:require("../../../assets/images/team/mAriani.jpg"),
        description:"",
        groups:["curation", "sponsership", "graphic", "media", "webdev"]
    },
    {
        name:"Mona Kherad",
        image:require("../../../assets/images/team/mKherad.jpg"),
        description:"",
        groups:[]
    },
    {
        name:"Mahsa Asadi",
        image:require("../../../assets/images/team/mAsadi.jpg"),
        description:"",
        groups:["curation"],

    },
    
    {
        name:"Reza Moghimi",
        image:require("../../../assets/images/team/rMoghimi.jpg"),
        description:"",
        groups:["curation", "media"]
    },
    {
        name:"Negar Foroutan",
        image:require("../../../assets/images/team/nForoutan.jpg"),
        description:"",
        groups:["curation"]
    },
    {
        name:"Hesam Sharifi",
        image:require("../../../assets/images/team/hSharifi.jpg"),
        description:"",
        groups:["sponsership" ,"curation"]
    },
    {
        name:"Aida Namdari",
        image:require("../../../assets/images/team/aNamdari.jpg"),
        description:"",
        groups:["decor", "photograph"]
    },
    {
        name:"Hirad Babayan",
        image:require("../../../assets/images/team/hBabayan.jpg"),
        description:"",
        groups:["media"]
    },
    {
        name:"Bahar Radfar",
        image:require("../../../assets/images/team/bRadfar.jpg"),
        description:"",
        groups:["media"]
    },
    {
        name:"Marjan Mohsenzadeh",
        image:require("../../../assets/images/team/mMohsenzadeh.jpg"),
        description:"",
        groups:["decor"]
    },
    {
        name:"Sina Jangjoo",
        image:require("../../../assets/images/team/sJangjoo.jpg"),
        description:"",
        groups:["decor"]
    },
    {
        name:"Bahar Abiri",
        image:require("../../../assets/images/team/bAbiri.jpg"),
        description:"",
        groups:["graphic", "decor" ,"photograph"]
    },
    {
        name:"Parham Davari",
        image:require("../../../assets/images/team/pDavari.jpg"),
        description:"",
        groups:[]
    },
    {
        name:"Mohammad Banari",
        image:require("../../../assets/images/team/mBanari.jpg"),
        description:"",
        groups:["sponsership"]
    },
    {
        name:"Tahereh Sadeghi",
        image:require("../../../assets/images/team/tSadeghi.jpg"),
        description:"",
        groups:["graphic" ,"photograph"]
    },
    {
        name:"Ali M. Hesamfar",
        image:require("../../../assets/images/team/aHesamfar.jpg"),
        description:"",
        groups:[]
    },
    {
        name:"Hossein Rezaianzadeh",
        image:require("../../../assets/images/team/hRezaianzadeh.jpg"),
        description:"",
        groups:["webdev"]
    }, 
]
const speakers=[
    {
        name:"مهندس محمود کریمی",
        description:"معتقد است بودن بی جای پا، مثل نبودن است. همه زندگی محمود کریمی به ایده‌های خلاقانه و نوآوری‌ گره خورده است. از مهندسی صنایع و مدیریت اجرایی خواندن در دانشگاه علم و صنعت ایران و یادگیری TRIZ و نوآوری نظام‌یافته از استادان شرق و غرب دنیا، تا پژوهش‌ها، مشاوره‌ها، تألیف‌ها، تدریس و فعالیت‌های مطبوعاتی و رسانه‌ای که یک سر همه آن‌ها به دانش TRIZ می‌رسد. از ستون‌ها و نوشته‌های او درباره نوآوری و فناوری در روزنامه‌های جام جم و همشهری تا برنامه‌های تلویزیونی‌اش مثل «روز از نو»، «عمق آب»، «360 درجه»، «کندو»، «618/1»، «سرزمین دانایی» و ... که او را در قاب آن‌ها در کسوت مجری‌ ـ کارشناس دیده‌ایم تا مسؤولیتش در مؤسسه پیرانو یا مدیرعاملی شرکت سرمایه‌گذاری کارآفرینی سیمرغ آریا و تجاری‌سازی ایده‌های نو."
        ,img:require("../../../assets/images/speakers/2016/karimi.jpg"),
    },
    {
        name:"دکتر مریم ذاکری نیا",
        description:"استاد دانشگاه علوم پزشکی شیراز، متخصص داخلی و فوق تخصص سرطان و خون او‌ در شهر شیراز چشم به جهان گشود. انگیزه پزشک شدنش در شش سالگی وقتی یکی از نزدیکان‌ به علت رماتیسم قلبی فوت کرد آغاز شد. این در حالی بود که زین العابدین جراح (پدر بزرگش) هم با شفای چشم بیماران بسیار این انگیزه را قوت می‌بخشید. پس از راهیابی به دانشگاه و گذراندن سال های ابتدایی رشته داخلی را برای تخصص برگزید. پس از آن فعالیت هایش را در حوزه تخصصی خون و سرطان آغاز کرد. او برای ایجاد بخش پیوند مغز و استخوان در داخل، دوره‌های آموزشی را در ایتالیا سپری کرد و سپس اقدام به تاسیس اولین بخش استاندارد پیوند مغز و استخوان ایران در بیمارستان نمازی شیراز کرد. او همچنین در سال های اخیر برای اولین بار در ایران سلول درمانی بیماران نورولوژیک از جمله بیماران cp، پارکینسون و آتروفی مخچه را انجام داده است که ثمره آن بهبود ۳۰ درصدی بیشتر این بیماران بوده است."
        ,img:require("../../../assets/images/speakers/2016/zakerinia.jpg"),
    },
    {
        name:"دکتر فرید مر",
        description:"استاد زمين شناسى دانشگاه شیراز،‌ رئیس پارک علم و فناوری استان فارس دانش آموخته‌ی سالهای دور دانشگاه شیراز که پس از انتخاب به عنوان نفر اول بورسیه وزارت علوم مدرک دکتری خود را در زمینه علوم زمین از دانشگاه لندن دریافت کرد اکنون سالهاست که به فعالیت های فراوان پژوهشی،آموزشی و اجرایی در ارتباط با رشته تخصصی خود فعالیت های فراوانی دارد که در ادامه به بخشی از آنها اشاره خواهد شد. در حوزه آموزشی از کارهای ماندگار ایشان می توان به راه اندازی دوره‌های کارشناسی ارشد و دکتری رشته‌های زمین‌شناسی اقتصادی و زمین‌شناسی زیست محیطی و دوره کارشناسی ارشد زمین شیمی در دانشگاه شیراز اشاره کرد. این استاد ممتاز و نمونه کشوری 31 کتاب دانشگاهی تالیف و ترجمه کرده‌اند و تا کنون بیش از 10 بار برنده کتاب سال جمهوری اسلامی و کتاب سال دانشگاهی شده اند. از دیگر عناوین تشویقی دکتر مر می توان به انتخاب ایشان به عنوان پژوهشگر برتر فرهیخته کشور و پژوهشگر برتر علوم پایه در ایران و دریافت جایزه ملی علامه طباطبایی اشاره کرد؛ایشان همچنین موفق به چاپ 117 مقاله پژوهشی ISI و 30 مقاله پژوهشی ISC و ارائه 56 مقاله علمی در سمینارها و کنفرانس‌های بین المللی شده‌اند. دکتر مر در سمت‌های اجرایی مرتبط با زمینه پژوهشی خود نیز موفقیت‌های بسیاری داشته اند،شامل: مشاور معاون پژوهشی وزارت علوم، دبیر شورای تحقیقات و فناوری کشور، مشاور علمی رئیس سازمان محیط زیست کشور و رئیس مرکز نشر دانشگاهی و چندین عنوان اجرایی دیگر که همگی گواه موفقیت ایشان در این حوزه نیز می‌باشند."
        ,img:require("../../../assets/images/speakers/2016/moore.jpg"),
    },
    {
        name:"منصور ضابطیان",
        description:"او كه دانش‌آموخته رشته‌ی سینما است، با روزنامه‌نگاری قدم در مسیر حرفه‌ای خود نهاد و با همکاری در مجلات و روزنامه‌های گوناگونی از جمله «چلچراغ»، «حیات نو» و «ایران» خود را بیش از پیش به جامعه فرهنگی و هنری معرفی نمود. او پس از مدتی كار در تلویزیون را آغاز كرد و در این سال‌ها جزء موفق‌ترین برنامه‌ سازان و مجریان تلویزیون به شمار رفته است. او در این سال‌ها و در كنار كارهای مطبوعاتی و برنامه‌سازی تلویزیون، سفرهای فراوانی نیز به كشورهای مختلف جهان داشته است و حاصل تجربه‌های ارزشمند این سفرها، چاپ کتاب‌های موفقی چون «مارك و پلو»، «مارك دو پلو» و «برگ اضافی» بوده است. از ویژگی‌های بارز منصور ضابطیان می توان به آرامش درونی او و تبلور آن در آثارش، اشراف و احترام به فرهنگ مردم و عدم تغییر خود و افكارش برای مورد پسند واقع شدن اشاره كرد."
        ,img:require("../../../assets/images/speakers/2016/zabetian.jpg"),
    },
    {
        name:"جمشید بایرامی",
        description:"به گفته خودش از روزی كه برای اولین بار دوربین به دست گرفت تا به امروز كه سه دهه از آن روز می‌گذرد و در این حوزه وجهه جهانی به دست آورده همواره شاگرد مكتب تجارب خویش بوده است. مدت كوتاهی پس از شروع عكاسی عازم جبهه‌های جنوب ایران شد تا از جنگ ایران و عراق عكاسی كند.علاقه بسیار به آیین‌های دینی همچون حج و عزاداری محرم دارد و توانسته با عكس‌هایی نوآورانه مراسم حج را از دیدگاه زیبایی شناختی به جهانیان معرفی كند. عكاسی حرفه‌ای را از عكاسی خبری آغاز كرد و سپس به ساخت مستندهای اجتماعی و عكاسی فاین آرت پرداخت. نمایشگاه‌های عكس او از جمله در موزه پاریس سازمان یونسکو، موزه سلطنتی هلند ،موزه ایلكس آمریکا و دانشگاه آکسفورد بازدیدكنندگان فراوانی را به تماشا خوانده است. جمشید بایرامی که دارای نشان درجه یک هنری نیز می‌باشد و پیش از این برای خبرگزاری فرانسه و رویترز عکاسی کرده است؛ تا کنون موفق به چاپ چهار کتاب عکاسی و ساخت نه ویدئو آرت شده است. اگرچه هیچگاه عكاسی را در كلاس درس فرا نگرفت؛ اما اكنون چنان مهارتی در این هنر داراست كه با فضای آكادمیك نیز در ارتباط است و به تدریس در دانشگاه نیز مشغول است."
        ,img:require("../../../assets/images/speakers/2016/bayrami.jpg"),
    },
    {
        name:"حسین كلهر",
        description:"نویسنده، طراح كمپین های تبلیغاتی و برنامه ساز تلویزیون نوشتن را به عنوان خبرنگار از مجله همشهری جوان شروع کرد. بعدتر پایش به تلویزیون باز شد. مجری برنامه اقتصادی پایش بوده است و در رادیو هفت، ماه عسل و خندوانه هم به عنوان نویسنده و عضو اتاق فکر فعالیت داشته و دارد. این روزها به عنوان مشاور رسانه‌ای، در طراحی و ساخت کمپین‌های ویدئویی با برندهایی همچون ایرانسل، دامداران، یونیلیور، کانفتی و بیپ تیونز همکاری می‌کند. او حسب علاقه شخصی مطالعات گسترده ای پیرامون اقتصاد رفتاری و رفتارشناسی مشتری داشته است."
        ,img:require("../../../assets/images/speakers/2016/kalhor.jpg"),
    },
];

const Event2016 = () => {
    return (
        <>
            <Route exact path="/2016" component={HomePage} />
            <Route exact path="/2016/partners" component={()=>{ return <Sponsers sponsers={sponsers}/> }} />
            <Route exact path="/2016/team" component={()=>{return <Team team={team}/>}} />
            <Route exact path="/2016/speakers" component={()=>{return <Speakers lang="per" speakers={speakers}/>}} />
        </>
    );
}
 
export default Event2016;