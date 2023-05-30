import React, {Component} from "react";

class PlayerForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            position:''
        }
        console.log('Constructor runs');
    }
    changeHandler = (e) => {
        // e.preventDefault()
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNewPlayer(this.state)
        this.setState({name:'', position:''})
    }

    componentDidMount(){
        console.log('Component did mount');
    }
    
    componentDidUpdate(){
        console.log('Component Did update');
    }

    render(){
        console.log('Render');
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={this.changeHandler} value={this.state.name}/>

                    <label>Position:</label>
                    <input type="text" name="position" onChange={this.changeHandler} value={this.state.position}/>

                    <button>Add Player</button>
                </form>
            </div>
        )
    }

}
export default PlayerForm