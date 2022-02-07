class Machine extends React.Component{
    // we only do {} when we are inside html tags 
    render(){
        const {s1,s2,s3} = this.props
        let msg = <p>{s1} {s2} {s3}</p>
        let output
        const win = "you win"
        const lose = "you lose"
        //const winner = (si === s2 ) && (s2 === s3)
        if((s1 === s2) && (s2 === s3)){
            output = 
            <div>
                {msg}
                {win}
            </div>
        }else{
            output = 
            <div>
                {msg}
                {lose}
            </div>  
        }
        return(
            output
        )
    }
}
