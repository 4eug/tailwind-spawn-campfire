/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <section className="h-screen">
        <Hero />

        <Footer />
      </section>
    </>
  );
}
