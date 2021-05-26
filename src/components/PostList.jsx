import { useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchPosts } from 'actions';

function PostList(props) {

    useEffect(() => {
        props.fetchPosts();
    },[props])

    return (
        <div>
            Post List
        </div>
    )
}

export default connect(null, { fetchPosts })(PostList)