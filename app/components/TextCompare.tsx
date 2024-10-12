'use client';

import { useState, useRef, useEffect } from 'react';
import { diffLines, Change } from 'diff';

export default function TextCompare() {
  const [originalText, setOriginalText] = useState('');
  const [changedText, setChangedText] = useState('');
  const [diffResult, setDiffResult] = useState<Change[]>([]);
  const [isCompared, setIsCompared] = useState(false);
  const [textareaHeight, setTextareaHeight] = useState('24rem'); // 默认高度
 
  const originalTextareaRef = useRef<HTMLTextAreaElement>(null);
  const changedTextareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCompare = () => {
    const diff = diffLines(originalText, changedText);
    setDiffResult(diff);
    setIsCompared(true);
  };

  const handleReset = () => {
    setIsCompared(false);
    setDiffResult([]);
  };

  const renderLineNumbers = (text: string) => {
    return text.split('\n').map((_, index) => (
      <div key={index} className="text-gray-400 text-right pr-2">
        {index + 1}
      </div>
    ));
  };

  const adjustTextareaHeight = () => {
    if (originalTextareaRef.current && changedTextareaRef.current) {
      const height = Math.max(
        originalTextareaRef.current.scrollHeight,
        changedTextareaRef.current.scrollHeight,
        384 // 最小高度 24rem (24 * 16px)
      );
      setTextareaHeight(`${height}px`);
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [originalText, changedText]);

  return (
    <div className="flex flex-col space-y-4">
      {!isCompared ? (
        <>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Original text</h2>
                <button className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">Open file</button>
              </div>
              <div className="flex" style={{ height: textareaHeight }}>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-l overflow-hidden">
                  {renderLineNumbers(originalText)}
                </div>
                <textarea
                  ref={originalTextareaRef}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-r resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 overflow-y-scroll"
                  value={originalText}
                  onChange={(e) => setOriginalText(e.target.value)}
                  placeholder="Enter original text here..."
                  style={{ height: textareaHeight }}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Changed text</h2>
                <button className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">Open file</button>
              </div>
              <div className="flex" style={{ height: textareaHeight }}>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-l overflow-hidden">
                  {renderLineNumbers(changedText)}
                </div>
                <textarea
                  ref={changedTextareaRef}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-r resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 overflow-y-scroll"
                  value={changedText}
                  onChange={(e) => setChangedText(e.target.value)}
                  placeholder="Enter changed text here..."
                  style={{ height: textareaHeight }}
                />
              </div>
            </div>
          </div>
          <button
            className="px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 self-end text-lg font-semibold"
            onClick={handleCompare}
          >
            Find difference
          </button>
        </>
      ) : (
        <>
          <button
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-400 dark:hover:bg-gray-500 self-start mb-4"
            onClick={handleReset}
          >
            Back
          </button>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">Original text</h2>
              <div className="border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
                <div className="flex" style={{ height: textareaHeight }}>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 overflow-hidden">
                    {renderLineNumbers(originalText)}
                  </div>
                  <pre className="flex-grow overflow-auto whitespace-pre-wrap p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    {diffResult.map((part, index) => (
                      <div key={index} className={`${part.removed ? 'bg-red-200 dark:bg-red-900' : ''} ${part.added ? 'hidden' : ''}`}>
                        {part.value}
                      </div>
                    ))}
                  </pre>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-2">Changed text</h2>
              <div className="border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
                <div className="flex" style={{ height: textareaHeight }}>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 overflow-hidden">
                    {renderLineNumbers(changedText)}
                  </div>
                  <pre className="flex-grow overflow-auto whitespace-pre-wrap p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    {diffResult.map((part, index) => (
                      <div key={index} className={`${part.added ? 'bg-green-200 dark:bg-green-900' : ''} ${part.removed ? 'hidden' : ''}`}>
                        {part.value}
                      </div>
                    ))}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
