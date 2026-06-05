export default function DocumentBadge({ document: doc }) {
  return (
    <div>
      <p className="text-xs text-gray-500 mb-1">Supporting document attached</p>
      <div className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-red-500 rounded flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[10px] font-bold uppercase">{doc.extension || "DOC"}</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">{doc.name}.{doc.extension}</p>
            <p className="text-xs text-gray-400">{doc.sizeLabel}</p>
          </div>
        </div>

        {/* Eye + Download buttons */}
        <div className="flex gap-2">
          <button
            aria-label="Preview"
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          <button
            aria-label="Download"
            className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}