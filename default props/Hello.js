class Hello extends React.Component{
    //this default props thing states what values should be if not defined
    // key is the variable name and value what you want it 
    static defaultProps = {
        to: "Who knows",
        from: "No one"
    }
    render(){
        const props = this.props;
        console.log(this.props)
        return(
            <div>
                <p>HELLO {props.to} From {props.from}</p>
            </div>
        )
    }
}
