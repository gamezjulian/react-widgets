import { EventEmitter } from "events";
import axios from 'axios';
import Dispatcher from '../dispatcher';

class PostStore extends EventEmitter {
    constructor() {
        super();

        this.posts = [];

        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((data) => {
            this.posts = data.data;    
            this.emit("change");        
        });
    }

    getAllPosts() {
        return this.posts;
    }

    removeFirstPost() {
        this.posts.shift();
        this.emit("change");
    }

    handleActions(action) {
        switch (action.type) {
            case "DELETE_POST": {
                this.removeFirstPost();
            }
        }
    }
}

const postStore = new PostStore();
Dispatcher.register(postStore.handleActions.bind(postStore));

export default postStore;