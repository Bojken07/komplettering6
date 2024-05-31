import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MeatDishList from './components/MeatDishList';
import MeatDishDetail from './components/MeatDishDetail';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MeatDishList />} />
                    <Route path="/dish/:id" element={<MeatDishDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

