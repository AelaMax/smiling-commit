import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Appointment from '../components/Appointment';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Appointment />
      <Services />
    </main>
  );
};
export default Home;
