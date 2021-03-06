import React, { Component } from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {
    render() {
        const { label, important = false } = this.props;

        const style = {
            color: important ? 'tomato' : 'black'
        };
    
        return (
            <span className="todo-list-item">
                <span
                className="todo-list-item-label p-2"
                style = {style}>
                { label }
                </span>
           
                <button type="button"
                    className="btn-outline-success btn p-2">
                    <i className="fa fa-exclamation" />
                </button>
    
                <button type="button"
                    className="btn-outline-danger btn p-2">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
                  
            );
    };
}