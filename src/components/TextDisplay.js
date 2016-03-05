
import React, { Component } from 'react';
import FormStore from '../stores/FormStore.js';


export default class TextDisplay extends Component {

  constructor (props) {
    super(props);

    this.state = {
      text: FormStore.text
    };

    this.onFormChange = this._onFormStoreChange.bind(this);
  }

  /**
   * On componentDidMount add the change listener to
   * this FormStore. Note that we remove it on componentWillUnmount,
   * and that we bind to 'this' in the constructor as every time you 'bind'
   * it creates a new instance of the method (and we need to be adding/removing
   * different instances).
   */

  componentDidMount () {
    FormStore.addChangeListener(this.onFormChange);
  }

  componentWillUnmount () {
    FormStore.removeChangeListener(this.onFormChange);
  }

  /**
   * Every time a store change is emitted we'll set the state to rerender the
   * compnent with the new value from the store.
   */

  _onFormStoreChange () {

    console.log('6: TextDisplay._onFormStoreChange()');

    this.setState({ text: FormStore.text }, () => {
      // Final stage is setting state; creating break in console for clarity
      console.log('--------');
    });
  }

  render () {
    return (
      <h1>{ this.state.text }</h1>
    );
  }
}
