import React from 'react';
import './MyButton.css'

const MyButton = ({children, ...props}) => {
	return (
		<button className='myBtn' {...props}>
			{children}
		</button>
	);
};

export default MyButton;
