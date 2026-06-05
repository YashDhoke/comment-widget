import FileUpload from "./FileUpload";
import DocumentBadge from "./DocumentBadge";

function ActionRow({ left, right }) {
  return (
    <div className="flex items-center justify-between pt-1">
      <button onClick={left.onClick}
        className="px-4 py-1.5 rounded-full border border-red-400 text-red-500 text-sm font-medium hover:bg-red-50 transition-colors">
        {left.label}
      </button>
      <button onClick={right.onClick} disabled={right.disabled}
        className="px-4 py-1.5 rounded-full bg-red-500 text-white text-sm font-medium hover:bg-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
        {right.label}
      </button>
    </div>
  );
}

export default function CommentForm({
  state, currentValue, fieldLabel, submission,
  fieldValue, commentText, document: doc,
  onFieldValueChange, onCommentTextChange, onDocumentChange,
  onSubmit, onDiscard, onEdit, onDelete,
}) {
  if (state === "submitted" && submission) {
    return (
      <div className="space-y-3">
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Current value</p>
          <p className="text-sm text-gray-800">{currentValue}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Comment</p>
          <p className="text-sm text-gray-700">{submission.commentText}</p>
        </div>
        {submission.document && <DocumentBadge document={submission.document} />}
        <ActionRow
          left={{ label: "Delete Comment", onClick: onDelete }}
          right={{ label: "Edit Comment", onClick: onEdit }}
        />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div>
        <p className="text-xs text-gray-500 mb-0.5">Current value</p>
        <p className="text-sm text-gray-800 font-medium">{currentValue}</p>
      </div>
      <div>
  <div>
  <label className="block text-xs text-gray-500 mb-1">{fieldLabel}</label>
  <input
    type="text"
    value={fieldValue}
    onChange={(e) => onFieldValueChange(e.target.value)}
    placeholder={state === "editing" ? "Field value" : "Placeholder"}
    className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:border-gray-500 transition-colors"
  />
</div>
</div>
      <div>
        <label className="block text-xs text-gray-500 mb-1">Comment</label>
        <textarea value={commentText}
          onChange={(e) => onCommentTextChange(e.target.value)}
          placeholder="Please provide a reason for the change"
          rows={3}
          className="w-full border border-gray-300 rounded focus:border-gray-500 outline-none p-2 text-sm text-gray-700 placeholder:text-gray-400 resize-none transition-colors"
        />
      </div>
      <FileUpload file={doc} onChange={onDocumentChange} />
      <ActionRow
        left={{ label: "Discard", onClick: onDiscard }}
        right={{
          label: "Submit Suggestion",
          onClick: () => onSubmit({ fieldValue, commentText, document: doc }),
          disabled: !commentText.trim(),
        }}
      />
    </div>
  );
}