import React, { Fragment } from 'react'
import AllRooms from './components/AllRooms'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateRooms from './components/Rooms/CreateRooms';
import Editroom from './components/Rooms/Editroom';
import DeleteRoom from './components/Rooms/DeleteRoom';
import PageNotFound from './pages/PageNotFound';
import NavBar from './components/NavBar';

const App = () => {
    return (
            <Fragment>
            <Router>
                <header>
                    <NavBar />
                </header>
                <Switch>
                    <Route path="/" exact>
                        <AllRooms />
                    </Route>
                    <Route path="/createRooms" exact>
                        <CreateRooms />
                    </Route>
                    <Route path="/editRooms/:id" exact>
                        <Editroom />
                    </Route>
                    <Route path="/deleteRooms/:id" exact>
                        <DeleteRoom />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App