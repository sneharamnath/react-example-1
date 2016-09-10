import React from 'react';
import CandidateList from './CandidateList';

class Header extends React.Component {
    render () {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
};

class App extends React.Component {
	render() {
		return (
			<div>
				<Header title="Candidate List" />
				<CandidateList url="http://104.199.147.85/candidates"/>
			</div>
		)
	}
}
export default App