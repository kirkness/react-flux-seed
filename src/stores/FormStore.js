
import dispatcher from '../core/dispatcher.js';
import BaseStore from './BaseStore';
import Actions from '../actions/actions';


class FormStore extends BaseStore {

  constructor () {
    super();

    this._dispatchToken = dispatcher.register(this._registerToActions.bind(this));

    this._text = '';
  }

  /**
   * Any flux action dispatched by the dispatch (app wide) will run the
   * following method/switch. Note other stores will use the same dispatcher and
   * so could potentially listen and respond to the same action.
   */

  _registerToActions (action) {

    console.log(`3: FormStore._registerToActions( ${JSON.stringify(action)} )`);

    switch(action.actionType) {

      // Use the same key/value as the FormActions
      case Actions.TEXT_UPDATE:
        this._handleTextChange(action.text);

        /**
         * Once we have handled the change, tell all listeners that the change
         * has occured by calling the super.emitChange() method found in the BaseStore
         */
        
        this.emitChange();
      default:
        break;
    };
  }

  /**
   * Method that handles the given action; any logic can go in here. In this
   * case we are just setting the private property '_text' that is then accessed
   * via a public getter.
   */

  _handleTextChange (text) {

    console.log(`4: FormStore._handleTextChange( ${text} )`);

    this._text = text;
  }

  get text () {
    return this._text;
  }
}


module.exports = new FormStore();
