import React, { Component } from 'react';


class Article extends Component {
	state = {
		isOpen: true
	};
	render() {
		const {article} = this.props;
		// console.log('---', this.props);
		// console.log('---', article);
		const body = this.state.isOpen && <section>{article.text}</section>;
		let butName = this.state.isOpen ? 'close' : 'open';
		return (
			<div>
				<h2>{article.title}
					<button onClick={this.handleClick}>{butName}</button>
				</h2>
				{body}
				<h3>creation date: {new Date(article.date).toDateString()}</h3>
			</div>
		);
	}
	handleClick = () => {
		this.setState((prevState, props) => ({
			isOpen: !prevState.isOpen
		}));
	};
}

export default Article
