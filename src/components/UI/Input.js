import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => { //use it as callback function
  //Since it is a custom component here, we need to explicitely mention ref here
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
