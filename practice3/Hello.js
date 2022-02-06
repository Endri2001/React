class Hello extends React.Component{
    render(){
        // printing out the props passed in 
        // its an object of key value pairs based on what we passed
        // console.log((this.props.to))

        // props are immutable you cant change or add to them 
        // if you do this.props.to = "Something" it will crash
        let bangs = "!".repeat(this.props.bangs)
        const props = this.props;
        console.log(this.props)
        return(
            <div>
                <p>HELLO {props.to} From {props.from}{bangs}</p>
                <img src = {this.props.img} />
            </div>

        )
    }
}
