import React from 'react';
import './app-filter.css'
import MyButton from '../UI/my-button/MyButton';

const AppFilter = ({filter, onFilterSelect}) => {
	const buttonsData = [
		{name: 'all', label: 'Все сотрудники'},
		{name: 'rise', label: 'На повышение'},
		{name: 'moreThen1000', label: 'З/П больше 1000$'},
	]


	// const buttons = buttonsData.map(({name, label}) => {
	// 	const active = filter === name
	// 	const clazz = active ? 'btn-light' : 'btn-outline-light'
	//
	// 	return (
	// 		<MyButton
	// 			type='button'
	// 			key={name}
	// 			className={`btn ${clazz}`}
	// 			onClick={() => onFilterSelect(name)}
	// 		>
	// 			{label}
	// 		</MyButton>
	// 	)
	// })

	return (
		<div className='btn-group'>
			{buttonsData.map(({name, label}) => {
				const active = filter === name
				const clazz = active ? 'btn-light' : 'btn-outline-light'

				return (
					<MyButton
						key={name}
						type='button'
						onClick={() => onFilterSelect(name)}
						className={`btn ${clazz}`}
					>
						{label}
					</MyButton>
				)
			})}
		</div>
	);
};

export default AppFilter;
