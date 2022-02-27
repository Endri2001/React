class Machine extends React.Component{
    // we only do {} when we are inside html tags 
    render(){
        const {s1,s2,s3} = this.props
        const styling = {fontSize: '50px',backgroundColor:'yellow'}
        
        // in line styling in react
        let msg = <p style = {styling}>{s1} {s2} {s3}</p>
        let output
        const win = "you win"
        const lose = "you lose"
        //const winner = (si === s2 ) && (s2 === s3)
        if((s1 === s2) && (s2 === s3)){
            output = 
            // in react they substituted html class for className since we are in javascript
            <div className = "Machine">
                {msg}
                <p className = "win">{win}</p>
            </div>
        }else{
            output = 
            <div className = "Machine">
                {msg}
                <p className = "lose">{lose}</p>
            </div>  
        }
        return(
            output
        )
    }
}
