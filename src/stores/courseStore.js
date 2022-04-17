import {EventEmitter} from 'events';

const CHANGE_EVENT = "change";
class CourseStore extends EventEmitter {
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange(callback){
        this.emit(CHANGE_EVENT, callback);
    }
}

const store = new CourseStore();
export default store;