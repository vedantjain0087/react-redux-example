import React, { Component } from 'react'
import Posts from './Posts'
import PostForm from  './PostForm'
import {Provider} from 'react-redux'
import store from '../store'
class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <div>
                <PostForm/>
                <Posts />
            </div>
            </Provider>
        )
    }
}
export default App;