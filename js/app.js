

class Counter extends React.Component{
    constructor(props){
        super();
        this.state = {count: 0 };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        this.setState(prevState => {
            return{
                count : prevState.count + 1
            }
        });
    }


    decrement(){
        this.setState(prevState => {
            return{
                count : prevState.count > 0 ? prevState.count - 1 : 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1 style={{color:this.props.color}}>Vous avez {this.state.count} copine(s)</h1>
                <button onClick={this.increment}>J'ai une nouvelle copine</button>
                <button onClick={this.decrement}>J'ai perdu une copine</button>
            </div>
        )
    }
}

class  App extends React.Component{
    render(){
        return (
            <div>
                <Counter color="green"></Counter>
                <Counter color="orange"></Counter>
                <Counter color="red"></Counter>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById("root"))
