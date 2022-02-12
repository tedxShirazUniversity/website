import React from 'react';
import style from "./ReadMore.module.scss";

const ReadMore = ({txt:fullParagraph , lines},props) => {

    // const slicedParagraph=fullParagraph.slice(0,chars);
    // const [showedParagraph,setShowedParagraph]=React.useState(slicedParagraph);
    const [isShowFullParagraph,setIsShowFullParagraph]=React.useState(false);

   
    // const showMore=()=>{        
    //     setShowedParagraph(fullParagraph);
    // }
    // const showLess=()=>{
    //     setShowedParagraph(slicedParagraph);
    // }
    const toggleShow=()=>{
        if(isShowFullParagraph){
            // showLess();
            setIsShowFullParagraph(false);
        }
        else{
            // showMore();
            setIsShowFullParagraph(true);
        }
    }
    
    const ReadMoreButton=()=>{
        return (
            <span className={style.button} onClick={toggleShow}>Readmore</span>
        )
    }
    
    return (
        // <div className={style.container}>
        //     <div >
        //         {
        //             showedParagraph
        //         }
        //         {
        //             !isShowFullParagraph&&"..."
        //         }
        //     </div>
        //     {
        //         !isShowFullParagraph&&<ReadMoreButton />
        //     }
        // </div>
        <>
            <div className={[style.paragraph,!isShowFullParagraph ? style.hide: null].join(" ")} style={{WebkitLineClamp:lines}}>
                {
                    fullParagraph
                }
            </div>
            {
                !isShowFullParagraph&&<ReadMoreButton />
            }
        </>

    );
}
 
export default ReadMore;