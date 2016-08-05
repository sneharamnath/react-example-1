import React from 'react';
import MessageBox from './MessageBox';
import MessageInput from './MessageInput';

class App extends React.Component {
	constructor(){
		super();

		this.state = {messages: []};
	}

	update(value){
		this.state.messages.push(value);
		this.setState(this.state.messages);
	}

	render() {
		return (
			<div>
				<MessageBox data={this.state.messages} />
				<MessageInput updateMessageBox={this.update.bind(this)}/>
			</div>
		)
	}
}

export default App