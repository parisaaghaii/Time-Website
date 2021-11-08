import React from 'react';
import './Button.css';

export default function Button(props ) {
    return (
      <div>
        <button className="button" onClick={props.handleClick}>
          {props.label}
        </button>
      </div>
    );
}
