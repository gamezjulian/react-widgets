import React from 'react';
import PostStore from '../stores/PostStore';


export default class Posts extends React.Component {
    constructor() {
        super();

        this.state = { posts: [] };

        PostStore.getAllPosts().then((data) => {
            this.setState({ posts : data.data })
        });
    }

    render() {
        const { posts } = this.state;
        const postsItems = posts.map((post) => {
            return (<div key={post.id}>
                {post.title}
                {post.body}
            </div>)
        })

        return (
            <div>
                {postsItems}
            </div>
        )
    }
}