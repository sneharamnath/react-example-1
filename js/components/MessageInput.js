import React from 'react';

class MessageInput extends React.Component {
	render(){
		var updateInput = function(event){
			if(parseInt(event.which) === 13){
				this.props.updateMessageBox(this.__input.value);
				this.__input.value='';
			}
		}
		return(
			<div>
				<input 
					ref={(component) => this.__input = component}
					onKeyPress={updateInput.bind(this)}
					type="text"
					placeholder="Say Hello To Groot" />
			</div>
		);
	}
}

export default MessageInput