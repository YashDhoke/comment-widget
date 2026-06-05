import { useState, useRef, useEffect } from "react";
import Avatar from "./Avatar";

export default function CommentDialog({ isOpen, comments, onClose, onAddComment }) {
  const [draft, setDraft] = useState("");
  const listRef = useRef(null);

  useEffect(() => {
    if (isOpen && listRef.current)
      listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [comments, isOpen]);

  const handleSubmit = () => {
    if (!draft.trim()) return;
    onAddComment(draft.trim());
    setDraft("");
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-10 z-50 w-80 bg-[#2d3748] text-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 text-base font-bold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Comment
        </div>
        <button onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors text-lg leading-none">
          ×
        </button>
      </div>

      {/* Scrollable comment list */}
      <div ref={listRef} className="overflow-y-auto max-h-64">
        {comments.length === 0
          ? <p className="text-sm text-gray-400 text-center py-6">No comments yet.</p>
          : comments.map((c) => (
            <div key={c.id} className="px-4 py-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Avatar author={c.author} size="sm" />
                  <span className="text-sm font-semibold">{c.author.name}</span>
                </div>
                <span className="text-xs text-gray-400">{c.timestamp}</span>
              </div>
              {/* Message bubble */}
              <div className="bg-[#1a2332] rounded-lg px-3 py-2">
                <p className="text-sm text-gray-100 leading-relaxed">{c.text}</p>
              </div>
            </div>
          ))
        }
      </div>

      {/* Composer */}
      <div className="px-4 pb-4 pt-2 space-y-3">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Enter comment"
          rows={3}
          className="w-full bg-white border-0 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 resize-none outline-none"
          onKeyDown={(e) => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) handleSubmit(); }}
        />
        <div className="flex justify-between items-center">
          <button onClick={() => setDraft("")}
            className="px-5 py-2 rounded-lg border border-red-400/70 text-red-400 text-sm font-medium hover:bg-red-400/10 transition-colors">
            Discard
          </button>
          <button onClick={handleSubmit} disabled={!draft.trim()}
            className="px-6 py-2 rounded-lg bg-indigo-500 text-white text-sm font-bold hover:bg-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
            Comment
          </button>
        </div>
      </div>

    </div>
  );
}