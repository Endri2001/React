class App extends React.Component{
    render(){
        return(
        <div>
            <h1>This is app</h1>
            <Friend //adding some props 
                name = "Bob"
                hobbies = {['video games','soccer']}
            />
            <Friend 
                name = "Olga"
                hobbies = {['who knows','watching Tv']}
            />
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
