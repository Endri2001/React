class Friend extends React.Component{
    // we only do {} when we are inside html tags 
    render(){
        const {name,hobbies} = this.props;

        return(
            <div>
                <h1>Name: {name}</h1>
                <ul>
                    {/*loop over hobbies arr and for every hobby (call it h) 
                    make an li for it */}
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}