import Dispatcher from '../dispatcher';

export function removeFirstPost(){
    Dispatcher.dispatch({
        type: 'DELETE_POST'
    })
}