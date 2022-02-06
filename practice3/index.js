class App extends React.Component{
    render(){
        return(
        <div>
            {/* this to and from is essentially a form of prop
            where we pass data in to our components  */}
            <Hello
            to = "Bob"
            from = "Jimmy"
            // we use {} to pass ints because  "" is for strings
            // anything thats not strings we use {} when we pass
            // num = {3}
            bangs = {4}
            img = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            />
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
