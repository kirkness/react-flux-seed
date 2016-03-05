
import Actions from './actions.js';
import dispatcher from '../core/dispatcher.js';

/**
 * This file will hold all actions for the 'FormStore' and will reference a key
 * value from the ./actions.js file.
 */

export default {
  onTextChange: text => {

    console.log(`2: FormActions.onTextChange( ${text} )`);

    dispatcher.dispatch({
      actionType: Actions.TEXT_UPDATE,
      text
    });
  },
};
