import React from 'react';

class CandidateItem extends React.Component {
	constructor (){
		super();
		this.state = {
			data : {}
		};
	}
	componentDidMount (){
		this.setState({
			data : this.props.candidate
			// first_name : this.props.candidate.first_name,
			// last_name : this.props.candidate.last_name
		})
	}
	componentWillReceiveProps(props){
		this.setState({
			data : props.candidate
		})
	}
    render () {   
        return (
        	<div>
  				<hr/>
  				<img className="profile-image" src={this.state.data.profile_picture} alt="Avatar"/>
  				<div className="right">
	  				<span>{this.state.data.first_name} {this.state.data.last_name}</span><br/>
	  				<span>{this.state.data.current_role} at {this.state.data.current_company}</span><br/>
	  				<span>({this.state.data.current_location})</span><br/>
	  				<span> Worked at </span>
  				</div>
			</div>
        );
    }
};

export default CandidateItem;