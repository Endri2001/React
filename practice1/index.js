// class Hello extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 			</div>
// 		);
// 	}
// }

function getMood(){
	const moods = ['Happy','Depressed','Endri']
	// return random element in moods array
	return moods[Math.floor(Math.random()*moods.length)];
}

// in JSX self closing tags have to end with a / like <img />
//in JSX you can only return one element so if you wanna return more than one element you wrap them in a div
// class JSXDemo extends React.Component{
// 	render(){
// 		return(	
// 		//  <div>
// 	    //  <h1>IMAGE</h1> 
// 		//  <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"/>
// 		//  </div>
// 		<div>
// 			{/* inside the curly braces you will get the evaluated js code */}
// 			{/* everything inside curly braces is actual js */}
// 			<h1>My mood is: {getMood()}</h1>
// 		</div>
// 		)
// 	}

// }

function getNum(){
	return Math.floor(Math.random()*10+1);
}

class NumPicker extends React.Component{
	render(){
		const num = getNum();
		let msg;
		if(num ===7){
			msg = <div>
					<h2>YOU WON!</h2>
					<img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYuzhQ5bP29t_l9ljN0wdFY81iZbMv-s0FnIFCvnntMRpEj8JPG3jDRjeppfmS-oKs6Js&usqp=CAU"/> 
				  </div>
		}else{
			msg = <p>you lose</p>
		}
		return(
			<div>
				<h1>Your number is:{num}</h1>
				{msg}
			</div>
		)
	}
}

ReactDOM.render(<NumPicker/>, document.getElementById('root'));
