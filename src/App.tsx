import * as React from 'react';
import './App.css';
import { AppContextProvider } from './state/AppContext';
import StickyBoard from './StickyBoard/StickyBoard';

class App extends React.Component {
    public render() {
        return (
            <AppContextProvider>
                <StickyBoard />
            </AppContextProvider>
        );
    }
}

export default App;
