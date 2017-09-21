import { EventEmitter } from "events";
import axios from 'axios';
import Dispatcher from '../dispatcher';

class PostStore extends EventEmitter {
    getAllPosts() {
        return axios.get('http://jsonplaceholder.typicode.com/posts');
    }

    handleActions(action) {
        switch (action.type) {
        }
    }
}

const postStore = new PostStore();
Dispatcher.register(postStore.handleActions.bind(postStore));

export default postStore;