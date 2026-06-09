import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Showcase from './components/Showcase';
import Outlets from './components/Outlets';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(
      'section article, section figure, section blockquote, .reveal'
    );
    targets.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Skip to main */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-rose text-white px-4 py-2 rounded-full z-50 font-body font-semibold text-sm"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Products />
        <Showcase />
        <Outlets />
        <Gallery />
      </main>

      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.link/7h56j5"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        style={{ background: '#25D366', boxShadow: '0 8px 32px rgba(37,211,102,0.55)' }}
        aria-label="Order on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 2C6.477 2 2 6.484 2 12.017c0 1.987.514 3.86 1.426 5.478L2 22l4.62-1.399A10.016 10.016 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2" />
        </svg>
      </a>
    </>
  );
}
