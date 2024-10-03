'use client';

import TextCompare from './components/TextCompare';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Compare text</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Find the difference between two text files</p>
      <TextCompare />
    </Layout>
  );
}