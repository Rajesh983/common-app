import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from 'components/home';
import NotFound from 'components/not-found';
import SignIn from '../components/signin';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<SignIn />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
