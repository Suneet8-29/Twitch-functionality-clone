import React from 'react'
import { Router, Route } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'



const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header></Header>
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/delete/:id' exact component={StreamDelete} />
                    <Route path='/streams/edit/:id' exact component={StreamEdit} />
                    <Route path='/streams/show' exact component={StreamShow} />
                    <Route path='/' exact component={StreamList} />
                </div>
            </Router>
        </div>
    )
}

export default App;