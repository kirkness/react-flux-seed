
import React, { Component } from 'react';
import FormActions from '../actions/FormActions.js';
import FormStore from '../stores/FormStore.js';

import TextInput from './TextInput.js'
import TextDisplay from './TextDisplay.js'

export default class App extends Component {
  render () {
    return (
      <div>
        <TextDisplay />
        <form>
          <TextInput />
        </form>
      </div>
    );
  }
}
