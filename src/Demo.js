import React from 'react';
import axios from 'axios';

export default class Demo extends React.Component{
	constructor(){
		super();
		this.state={
			json:[],
			name:''
		}
	}
	componentDidMount(){
		
		axios.get(`http://localhost:5000`).then(response => {
			this.setState({json:response.data})
			console.log(response.data);
			console.log("||",this.state.json)
		});
	}

	render(){
		return(
			<div>
				<h1>Json from the Displayingarrayaxios component</h1>
				{console.log(this.state.json)}
			</div>
		)
	}
}
//export default Demo;
		