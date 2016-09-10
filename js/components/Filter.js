import React from 'react';

class Filter extends React.Component {
	constructor () {
		super();
		this.state = {
			locations : [],
			companies: []
		};
		this.handleOnChange = this.handleOnChange.bind(this);
	}
	componentDidMount () {
  		this.request = $.getJSON(this.props.url , (data)=> {
  			this.setState({
  				locations : data.locations || [],
  				companies: data.companies || []
  			})
  		})
  	}
  	handleOnChange(){
  		let value = this.refs.locationVal.value;
      let company = this.refs.companyVal.value;
      let searchText = this.refs.searchVal.value;
  		this.props.onLocationChange(value,company,searchText);
  	}
	render () {   
        return (
        	<div>
        		<select ref="locationVal" onChange={this.handleOnChange}>
            <option value=""> None </option>
        		{
        			this.state.locations.map((item,index) => {
  						return (<option key={index} > {item} </option>);
        			})
        		}
        		</select>
        		<select ref="companyVal" onChange={this.handleOnChange}>
            <option value=""> None </option>
        		{
        			this.state.companies.map((item,index) => {
  						return (<option key={index} > {item} </option>);
        			})
        		}
        		</select>
        		<input type="text" placeholder="Search" ref="searchVal" onChange={this.handleOnChange}/>
			</div>
        );
    }
}

export default Filter;