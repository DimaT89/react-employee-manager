import React, {Component} from 'react';
import './search-panel.css'
import MyInput from '../UI/my-input/MyInput';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {query: ''};
	}

	onUpdateSearch = (e) => {
		const query = e.target.value;
		this.setState({query});
		this.props.onUpdateSearch(query);
	}

	render() {
		return (
			<MyInput
				type='text'
				className='form-control search-input'
				placeholder='Найти сотрудников...'
				value={this.state.query}
				onChange={this.onUpdateSearch}
			/>
		)
	}
}

export default SearchPanel;
