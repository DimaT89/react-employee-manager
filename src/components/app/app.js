import React, {Component} from 'react';
import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'John C.', salary: '800', increase: false, rise: true, id: 1},
				{name: 'Alex M.', salary: '3000', increase: false, rise: false, id: 2},
				{name: 'Carl W.', salary: '15000', increase: true, rise: false, id: 3},
			],
			query: '',
			filter: 'all'
		}
		this.maxId = 4
	}

	/* addItem */
	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++
		}

		this.setState(({data}) => {
			const newArr = [...data, newItem]
			return {
				data: newArr
			}
		})
	}

	/* deleteItem */
	deleteItem = (id) => {
		this.setState(({data}) => ({
			data: data.filter(item => item.id !== id)
		}))
	}

	/* onToggleProp */
	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))
	}

	/* searchItems */
	searchItems = (items, query) => {
		if (query.length === 0) return items

		return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
	}

	onUpdateSearch = (query) => {
		this.setState({query})
	}

	/* filterPost */
	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise)
			case 'moreThen1000':
				return items.filter(item => item.salary > 1000)
			default:
				return items
		}
	}

	/* onFilterSelect */
	onFilterSelect = (filter) => {
		this.setState({filter})
	}

	/* onChangeSalary */
	onChangeSalary = (name, salary) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.name === name) {
					return {...item, salary: salary}
				}

				return item
			})
		}))
	}

	render() {
		const {data, query, filter} = this.state
		const employees = this.state.data.length
		const increased = this.state.data.reduce((count, item) => {
			return item.increase ? count + 1 : count
		}, 0)
		const visibleData = this.filterPost(this.searchItems(data, query), filter)

		return (
			<div className="App">
				<AppInfo
					employees={employees}
					increased={increased}
				/>

				<div className="search-panel">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch}
					/>

					<AppFilter
						filter={filter}
						onFilterSelect={this.onFilterSelect}
					/>
				</div>

				<EmployeesList
					onDelete={this.deleteItem}
					data={visibleData}
					onToggleProp={this.onToggleProp}
					onChangeSalary={(name, salary) => this.onChangeSalary(name, salary)}
				/>

				<EmployeesAddForm onAdd={this.addItem}/>
			</div>
		);
	}
}

export default App;
