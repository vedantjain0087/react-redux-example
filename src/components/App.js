import React, { Component } from 'react'
import Posts from './Posts'
import PostForm from  './PostForm'
class App extends Component {
    render() {
        return (
            <div>
                <PostForm/>
                <Posts />
            </div>
        )
    }
}
export default App;