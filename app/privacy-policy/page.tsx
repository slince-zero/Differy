import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">This is the privacy policy for Diffchecker...</p>
      {/* Add more content here */}
      <Link href="/" className="text-purple-600 dark:text-purple-400 hover:underline">Back to Home</Link>
    </div>
  );
}