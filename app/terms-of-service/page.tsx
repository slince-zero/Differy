import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">These are the terms of service for Diffchecker...</p>
      {/* Add more content here */}
      <Link href="/" className="text-purple-600 dark:text-purple-400 hover:underline">Back to Home</Link>
    </div>
  );
}