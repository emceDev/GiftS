import React, {useState, useEffect} from "react";
import "./App.css";
import { Section } from "./components/Section";


export const App = () => {
	const [overCol, setoverCol] = useState('blue')
	const [scrPos, setscrPos] = useState('0')
	const [resized, setresized] = useState(false)
	const [tranformations, set_tranformations] = useState()
	const data = [

		{
			'id':'0',
			'text':'Sto lat Brat!',
			'img':'https://res.cloudinary.com/m4t1ce/image/upload'+tranformations+'/v1603814005/serafin/seraf_itiv1j.jpg',
			'oC':'blue',
			'tC':'white',
		},	
		{
			'id':'1',
			'text':'Kawał świata...',
			'img':'https://res.cloudinary.com/m4t1ce/image/upload'+tranformations+'/v1603814004/serafin/bridge_jcktvp.jpg',
			'oC':'purple',
			'tC':'white',
		},	
		{
			'id':'2',
			'text':'na zdjęciach zatrzymałeś,',
			'img':'https://res.cloudinary.com/m4t1ce/image/upload'+tranformations+'/v1603814000/serafin/see2_b6litf.jpg',
			'oC':'orange',
			'tC':'white',
		},	
		{
			'id':'3',
			'text':'sporo więcej przejeżdziłeś,',
			'img':'https://res.cloudinary.com/m4t1ce/image/upload'+tranformations+'/v1603813995/serafin/forestSnow_mngk1v.jpg',
			'oC':'green',
			'tC':'white',
		},	
		{
			'id':'4',
			'text':'uwieczniłeś miłe chwile,',
			'img':'https://res.cloudinary.com/m4t1ce/image/upload'+tranformations+'/v1603813995/serafin/sehen1_bjpopo.jpg',
			'oC':'red',
			'tC':'white',
		},	
		{
			'id':'5',
			'text':'życzę ci po tysiąc tyle',
			'img':'https://res.cloudinary.com/m4t1ce/image/upload'+tranformations+'/v1603813988/serafin/road1_u5dydl.jpg',
			'oC':'white',
			'tC':'white',
		},	
		{
			'id':'6',
			'text':'i drugie tyle',
			'img':'https://res.cloudinary.com/m4t1ce/image/upload/v1633950011/serafin/serafinoliwer2_uu4uo8.jpg',
			'oC':'yellow',
			'tC':'white',
		}
		
	]
	function inView(color) {
		setoverCol(color)
	}

	function resi(){
		setresized(true)
		setresized(false)
	}

	useEffect(() => {
		// console.log(window.pageYOffset)
		window.addEventListener('scroll',(()=>{setscrPos(window.pageYOffset)}))
		window.addEventListener('resize', resi)
		let width=window.screen.width
		if(width<700){
			set_tranformations('/e_improve,w_700,h_600,c_thumb,g_auto')
			console.log('smaller')
		}else{
			set_tranformations('')
			// set_tranformations('/e_improve,w_'+window.screen.width+',h_600,c_thumb,g_auto')
		}
		
		
	}, [])

	return (
		<div className="App">
			<div>
				<div style={{position:"fixed",top:'0',left:'0',width:'100vw',height:'100vh',opacity:'0.3',zIndex:'3',transition:'background-color 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',backgroundColor:overCol}}>
				</div>

				{data.map((x)=>{
					return(
						<Section  id={x.id} resized={resized} inView={inView} scrPos={scrPos} img={x.img} text={x.text} oC={x.oC} tC={x.tC}/>
					)
				})}
			</div>
		</div>
	);
};

export default App;
