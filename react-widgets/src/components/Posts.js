import React from 'react';
import PostStore from '../stores/PostStore';
import * as PostActions from '../actions/PostActions';


export default class Posts extends React.Component {
    constructor() {
        super();

        this.state = { posts: [] };
        this.getAllPosts = this.getAllPosts.bind(this);
        const posts = PostStore.getAllPosts()
        this.setState({ posts })
    }

    componentWillMount() {
        PostStore.on('change', this.getAllPosts)
    }

    componentWillUnmount() {
        PostStore.removeListener("change", this.getAllPosts);
    }

    getAllPosts() {
        this.setState({ posts: PostStore.getAllPosts() })
    }

    removeFirstItem() {
        PostActions.removeFirstPost();
    }

    render() {
        const { posts } = this.state;
        const postsItems = posts.map((post) => {
            return (
                <a className="media tall" href="#" target="_blank" key={post.id}>
                    <div className="media-body media-middle">
                        <h4 className="media-heading"><span title="Link to a generic exturnal link">{post.title}</span></h4>
                        <p >{post.body}}</p>
                    </div>
                </a>
            )
        })

        return (
            <div className="col-md-4">
                <div className="widgets rss-feed">
                    <div className="widgets__title">
                        <span className="widgets__icon">
                            <span className="icomoon-connection"></span>
                        </span>
                        <span className="title">Posts</span>
                    </div>
                    <div className="widgets__body">
                        <button onClick={this.removeFirstItem.bind(this)}>Remove</button>
                        {postsItems}
                    </div>
                </div>
            </div>
        )
    }
}