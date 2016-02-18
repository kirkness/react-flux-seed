import { EventEmitter } from 'events';

/**
 * Base store exposes some generic methods that can be expose to all stores.
 */

export default class BaseStore extends EventEmitter {

  emitChange() {

    console.log('5: BaseStore.emitChange()');

    this.emit('CHANGE');
  }

  addChangeListener(cb) {
    this.on('CHANGE', cb)
  }

  removeChangeListener(cb) {
    this.removeListener('CHANGE', cb);
  }
}
