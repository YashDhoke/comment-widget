import { useRef } from "react";
import { fileToDocument } from "./utils/formatters";

export default function FileUpload({ file, onChange }) {
  const ref = useRef(null);
  return (
    <div>
      <label className="block text-xs text-gray-500 mb-1">Upload support document</label>
      <div
        onClick={() => ref.current?.click()}
        className="flex items-center justify-between border border-gray-300 rounded px-3 py-2 cursor-pointer hover:border-gray-400 transition-colors"
      >
        <span className={`text-sm truncate ${file ? "text-gray-700" : "text-gray-400"}`}>
          {file ? `${file.name}.${file.extension}` : "Select a file to upload"}
        </span>
        <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      </div>
      <input ref={ref} type="file" className="hidden"
        onChange={(e) => onChange(e.target.files?.[0] ? fileToDocument(e.target.files[0]) : undefined)} />
    </div>
  );
}