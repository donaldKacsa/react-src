import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


class App extends React.Component {
    render() {
        return(
            <div className="App">
                <h1>Give it the name</h1>
                <form>
                    <input type="text"/>
                    <button>Send</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)