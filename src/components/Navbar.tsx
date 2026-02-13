import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full p-5 md:p-6 flex justify-between items-center z-40 max-w-6xl mx-auto left-0 right-0">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                LOOVIE
            </Link>
            <div className="flex items-center gap-4">
                <a
                    href="https://app.loovieapp.com"
                    className="text-sm text-gray-400 hover:text-white transition-colors border border-white/10 rounded-full px-4 py-2 hover:border-white/30"
                >
                    Ya tengo cuenta
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
