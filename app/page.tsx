import TextCompare from './components/TextCompare';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-purple-600">Diffchecker</h1>
            <nav className="ml-10">
              <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Text</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Images</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Documents</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Excel</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Folders</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">Features</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">Desktop</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">Pricing</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">Sign in</a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Download Diffchecker Desktop
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Compare text</h2>
          <p className="text-gray-600 mb-6">Find the difference between two text files</p>
          <TextCompare />
        </div>
      </main>
    </div>
  );
}
