import Hero from '@/components/landing/Hero';
import Problem from '@/components/landing/Problem';
import Story from '@/components/landing/Story';
import HowItWorks from '@/components/landing/HowItWorks';
import Preview from '@/components/landing/Preview';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Story />
      <HowItWorks />
      <Preview />
      <CTA />
      <Footer />
    </main>
  );
} 