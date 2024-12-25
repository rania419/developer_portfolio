import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import Recent from '@/components/Recent';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
export default function Home() {
  return (
  <main className="relative bg-black-100 flex justify-center items-center
  flex-col overflow-hidden mx-auto sm:px-10 px-5 text-white">
    <div className="max-w-7xl w-full">
      <Hero />
      <Grid />
      <Recent />
      <Clients />
      <Experience />
      <Footer />
    </div>
  </main>
  );
}
