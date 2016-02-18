
import React, { Component } from 'react';
import FormActions from '../actions/FormActions.js';

export default class TextInput extends Component {

  /**
   * On every text change trigger the Flux 'Action'.
   */

  _handleTextChange (event) {

    console.log('1: TextInput._handleTextChange(event)');

    FormActions.onTextChange(event.target.value);
  }

  render () {
    return (
      <input type={ 'text' } onChange={ this._handleTextChange.bind(this) } />
    );
  }
}
