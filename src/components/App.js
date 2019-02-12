import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            not Good !
            <Link to="/pagetwo">PageOne</Link>
        </div>

    );
};

const PageTwo = () => {
    return <div>
        PageTwo
        <button>
            click Me!
        </button>
    </div>
};

const App = () => {
    return (
        <div>
            <BrowserRouter>

                <div>

                    <Route path="/" exact component={PageOne}/>
                    <Route path="/pagetwo" component={PageTwo}/>

                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;