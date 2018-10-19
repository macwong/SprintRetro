import * as React from 'react';
import './App.css';
import StickyBoard from './StickyBoard/StickyBoard';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <StickyBoard />
            </div>
        );
    }
}

export default App;
