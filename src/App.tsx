import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-brand-dark text-[#FAFAFA] font-sans relative">
                {/* Cinematic Effects */}
                <div className="fixed inset-0 bg-gradient-radial pointer-events-none"></div>
                <div className="cinema-grain"></div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/terminos" element={<Terms />} />
                    <Route path="/privacidad" element={<Privacy />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
