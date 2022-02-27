class Hello extends React.Component{
    render(){
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
