import React, {useState, useEffect} from "react";
import "./App.css";
import { Section } from "./components/Section";

const data = [

	{
		'id':'0',
		'text':'Opis obrazka ',
		'img':'https://res.cloudinary.com/m4t1ce/image/upload/v1603814005/serafin/seraf_itiv1j.jpg',
		'oC':'blue',
		'tC':'white',
	},	
	{
		'id':'1',
		'text':'Purple overlay here Bardzo długi z resztą taki na testy w sam raz, a jadnak nie musi byc jeszcze dlyzszy',
		'img':'https://res.cloudinary.com/m4t1ce/image/upload/v1603814004/serafin/bridge_jcktvp.jpg',
		'oC':'purple',
		'tC':'white',
	},	
	{
		'id':'2',
		'text':'Orange overlay here',
		'img':'https://res.cloudinary.com/m4t1ce/image/upload/v1603814000/serafin/see2_b6litf.jpg',
		'oC':'orange',
		'tC':'white',
	},	
	{
		'id':'3',
		'text':'green overlay here',
		'img':'https://res.cloudinary.com/m4t1ce/image/upload/v1603813995/serafin/forestSnow_mngk1v.jpg',
		'oC':'green',
		'tC':'white',
	},	
	{
		'id':'4',
		'text':'green overlay here',
		'img':'https://res.cloudinary.com/m4t1ce/image/upload/v1603813995/serafin/sehen1_bjpopo.jpg',
		'oC':'red',
		'tC':'white',
	},	
	{
		'id':'5',
		'text':'green overlay here',
		'img':'https://res.cloudinary.com/m4t1ce/image/upload/v1603813988/serafin/road1_u5dydl.jpg',
		'oC':'yellow',
		'tC':'white',
	}
]
export const App = () => {
	const [overCol, setoverCol] = useState('blue')
	const [scrPos, setscrPos] = useState('0')
	const [resized, setresized] = useState(false)

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
		window.addEventListener('resize',resi)
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
				<div style={{position:'absolute',zIndex:'565', top:'0',left:"0"}}> woah I'ma Div</div>
			</div>
		</div>
	);
};

export default App;
