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