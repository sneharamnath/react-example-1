import React from 'react';

class MessageBox extends React.Component {
	render() {
		const reply = "I am Groot!!";
		const messageContainer = this.props.data.map((message, idx) => {
			return (
				<li key={idx}>
					<div>{message}</div>
					<div>{reply}</div>
					<audio autoPlay="true">
						<source src="/media/groot.mp3" type="audio/mp3" />
						<source src="/media/groot.ogg" type="audio/ogg" />
					</audio>
				</li>
			);
		});

		return (
			<ul>{messageContainer}</ul>
		);
	}
}

export default MessageBox