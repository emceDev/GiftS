import React, {useState, useEffect } from 'react'
import '../styles/Section.css'


export const Section = props =>{
    const [ImgH, setImgH] = useState('100vh')
    const [imgLoad, setimgLoad] = useState(false)
    function res(e){
        if(e!==undefined){
            setImgH(e.target.height)
        }else{
            let elmnts = document.getElementsByClassName('Section')
            let imgH = elmnts[props.id].getElementsByTagName('img')[0]
            setImgH(imgH.height)
        }
        
    }
    
    useEffect(() => {
        res()
    }, [props.resized])

    useEffect(()=>{
        let Section = document.getElementsByClassName('Section')[props.id]
        let bound = Section.getClientRects()[0]
        console.log('Scrolling')
        if(100 > bound.top && bound.bottom > 100){
            props.inView(props.oC)
            console.log(props.id +" SectionBot:  "+ bound.bottom+ "  SectionTop: "+bound.top)
            console.log(ImgH)
            var el = Section.getElementsByTagName('div')[0]
            if(-bound.top > ImgH/2){
                console.log(props.id,"  ",'Moving out...')
                el.className = 'moved'
                let amount = ImgH-ImgH/2-bound.bottom
                console.log("amgit initount"+amount)
                el.style.transform = 'translateY('+amount*2+'px)'
                // el.style.transform = 'translate(0px,'+ImgH+'px)'
            }else if(bound.bottom === ImgH){
                console.log('Backe')
            }
     
            let wynik=0;
            if(wynik>0){
                wynik=(100-(Math.floor(props.scrPos)/10))
                // odejmuj
            }else{
                // dodawaj
            }
            // console.log('hHERE !!!!!!!s')
            // console.log(Math.floor(props.scrPos/90))
            // console.log('WYNIK')
            // console.log(wynik)
            
            // console.log("In VIew "+props.id)
        }
    },[props.scrPos])

    return (
        <div className="Section" style={{opacity:imgLoad ?'1':'0' }}>
            <img onLoad={(e)=>{res(e);setimgLoad(true)}} src={props.img}></img>
            <div style={{ bottom:ImgH/2 }}>
               <p style={{color:props.tC, backgroundImage:"linear-gradient(43deg,#4158d0 "+Math.floor(props.scrPos/100)+"%,#ce2cc5 "+Math.floor(props.scrPos/80)+"%,#ffcc70 "+Math.floor(props.scrPos/10)+"%)"}}>{props.text}</p>
            </div>
        </div>
    )
}