'use client';

import { useState } from 'react';
import { diffChars, Change } from 'diff';

export default function TextCompare() {
  const [originalText, setOriginalText] = useState('');
  const [changedText, setChangedText] = useState('');
  const [diffResult, setDiffResult] = useState<Change[]>([]);

  const handleCompare = () => {
    const diff = diffChars(originalText, changedText);
    setDiffResult(diff);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Original text</h2>
            <button className="text-purple-600 hover:text-purple-800">Open file</button>
          </div>
          <textarea
            className="w-full h-64 p-2 border border-gray-300 rounded"
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
            placeholder="Enter original text here..."
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Changed text</h2>
            <button className="text-purple-600 hover:text-purple-800">Open file</button>
          </div>
          <textarea
            className="w-full h-64 p-2 border border-gray-300 rounded"
            value={changedText}
            onChange={(e) => setChangedText(e.target.value)}
            placeholder="Enter changed text here..."
          />
        </div>
      </div>
      <button
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 self-end"
        onClick={handleCompare}
      >
        Find difference
      </button>
      {diffResult.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Difference Result</h2>
          <pre className="whitespace-pre-wrap border border-gray-300 rounded p-4">
            {diffResult.map((part, index) => (
              <span
                key={index}
                className={
                  part.added ? 'bg-green-200' : part.removed ? 'bg-red-200' : ''
                }
              >
                {part.value}
              </span>
            ))}
          </pre>
        </div>
      )}
    </div>
  );
}