import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <div>
            <Head>
                <title>NxtJob</title>
                <meta name="description" content="Landing page for Ahead app redesign concept" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <Hero />
                <Features />
                <About />
                <Contact />
            </main>
        </div>
    );
}
