import * as React from 'react';
import './App.css';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <div className="block_topleft">TOPLEFT</div>
                <div className="block_topright">TOPRIGHT</div>
                <div className="block_bottomleft">BOTTOMLEFT</div>
                <div className="block_bottomright">BOTTOMRIGHT</div>
            </div>
        );
    }
}

export default App;
