import './employees-list-item.css'
import MyInput from '../UI/my-input/MyInput';
import MyButton from '../UI/my-button/MyButton';

const EmployeesListItem = ({name, salary, onToggleProp, onDelete, increase, rise, onChangeSalary}) => {

	let classNames = 'list-group-item d-flex justify-content-between'

	// increase
	if (increase) {
		classNames += ' increase'
	}
	// like
	if (rise) {
		classNames += ' like'
	}

	return (
		<li className={classNames}>
				<span
					className="list-group-item-label like"
					onClick={onToggleProp}
					data-toggle={'rise'}
				>
					{name}
				</span>
			<MyInput
				type='text'
				value={salary + '$'}
				onChange={e => onChangeSalary(e.target.value.slice(0, -1))}
				className='list-group-item-input'
			/>

			<div className='d-flex justify-content-center align-items-center'>
				<MyButton
					type="button"
					className="btn-cookie btn-sm "
					onClick={onToggleProp}
					data-toggle={'increase'}
				>
					<i className="fas fa-cookie"></i>
				</MyButton>

				<MyButton
					type="button"
					className="btn-trash btn-sm"
					onClick={onDelete}
				>
					<i className="fas fa-trash"></i>
				</MyButton>

				<i className="fas fa-star"></i>
			</div>
		</li>
	)
}

export default EmployeesListItem

// import './employees-list-item.css';
//
// const EmployeesListItem = (props) => {
//
// 	const {name, salary, onDelete, onToggleProp, increase, rise} = props;
//
// 	let classNames = "list-group-item d-flex justify-content-between";
// 	if (increase) {
// 		classNames += ' increase';
// 	}
// 	if (rise) {
// 		classNames += ' like';
// 	}
//
// 	return (
// 		<li className={classNames}>
// 			<span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
// 			<input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
// 			<div className='d-flex justify-content-center align-items-center'>
// 				<button type="button"
// 				        className="btn-cookie btn-sm "
// 				        onClick={onToggleProp}
// 				        data-toggle="increase">
// 					<i className="fas fa-cookie"></i>
// 				</button>
//
// 				<button type="button"
// 				        className="btn-trash btn-sm "
// 				        onClick={onDelete}>
// 					<i className="fas fa-trash"></i>
// 				</button>
// 				<i className="fas fa-star"></i>
// 			</div>
// 		</li>
// 	)
// }
//
// export default EmployeesListItem;