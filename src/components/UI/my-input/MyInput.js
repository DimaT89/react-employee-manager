import React from 'react';
import './MyInput.css'

const MyInput = React.forwardRef((props, ref) => {
	return (
		<input className='myInput' ref={ref} {...props}/>
	);
});

export default MyInput;
