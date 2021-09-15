import React from 'react'
import axios from 'axios'

export default class New extends React.Component{
	constructor(){
		super();
		this.state={
			a:[
				{name:"abc",host:"aqwse"},
			],
			bc:[]
		}
	}
	async componentDidMount(){
		await axios.get(`http://localhost:5000`).then(res=>{
			
			this.setState({bc:res.data})
		})
	}
	render(){
		
		return(
			<div>
				{
					this.state.a.map(s=>(
						<>
							{console.log(s)}
							<p>{s.name}</p>
							<p>{s.host}</p>
						</>
					))
				}
				{
					this.state.bc.map(k=>(
						<>
							{console.log(k)}
						</>
					))
				}
				{console.log("Bc",this.state.bc)}
				
			</div>
		)
	}
}