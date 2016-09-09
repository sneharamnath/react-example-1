import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
};

class CandidateList extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			data : {} 
		}
	}
  	loadCommentsFromServer () {
	    $.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
  	}
  	componentDidMount () {
    	this.loadCommentsFromServer();
  	}
  	render () { 
  		return (
  			<CandidateItem data={this.state.data.candidates} />
  		)	
  	}
}

class CandidateItem extends React.Component {
    render () {
        // var items = this.props.data.map(function (item) {    
	        return (
	        	<div>
	        		Test
	        	</div>
	            // <ul>
	            //     <li> Component 1 </li>
	            //     <li> Component 2 </li>
	            //     <li> Component 3 </li>
	            // </ul>
	        );
        // });
    }
};

class App extends React.Component {
	render() {
		return (
			<Header title="Candidate List" />,
			<CandidateList url="http://104.199.147.85/candidates" />
		)
	}
}
export default App