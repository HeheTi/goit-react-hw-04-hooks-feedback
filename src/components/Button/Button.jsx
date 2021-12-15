import React from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => {
  return (
    <button className={s.btn} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
