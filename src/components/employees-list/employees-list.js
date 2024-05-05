import React from 'react';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary}) => {
	return (
		<ul className='app-list list-group'>
			{data.map(item => {
				const {id, ...itemProps} = item;
				return (
					<EmployeesListItem
						key={id}
						{...itemProps}
						onDelete={() => onDelete(id)}
						onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
						onChangeSalary={(salary) => onChangeSalary(item.name, salary)}
					/>
				)
			})}
		</ul>
	);
};

export default EmployeesList;