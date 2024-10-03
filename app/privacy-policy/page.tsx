'use client';

import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');
    const handleChange = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">At Diffchecker, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our service.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
      <p className="mb-4">We collect information that you provide directly to us when using our service, such as when you create an account or use our text comparison tools.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
      <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you about updates and new features.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Data Security</h2>
      <p className="mb-4">We implement appropriate technical and organizational measures to protect the security of your personal information.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
      <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
    </Layout>
  );
}