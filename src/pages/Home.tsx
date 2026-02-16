import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Founders from '../components/Founders';
import Industry from '../components/Industry';
import PlayStoreBanner from '../components/PlayStoreBanner';
import Footer from '../components/Footer';

const Home = () => {
    const [searchParams] = useSearchParams();
    const referralCode = searchParams.get('ref');

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10"
        >
            <Navbar />
            <Hero referralCode={referralCode} />
            <HowItWorks />
            <Founders referralCode={referralCode} />
            <Industry />
            <PlayStoreBanner />
            <Footer />
        </motion.main>
    );
};

export default Home;
