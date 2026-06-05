import { useCommentForm } from "./hooks/useCommentForm";
import { useCommentDialog } from "./hooks/useCommentDialog";
import CommentForm from "./CommentForm";
import CommentDialog from "./CommentDialog";

export default function CommentWidget({ currentValue, fieldLabel = "Field label", initialComments = [], onSubmit, onDiscard }) {
  const form   = useCommentForm(onSubmit, onDiscard);
  const dialog = useCommentDialog(initialComments);

  return (
    <div className="relative w-full max-w-sm font-sans">
      <div className="flex justify-end mb-3">
        <button onClick={dialog.openDialog}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 text-sm text-gray-600 font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors">
          Comments
          {dialog.comments.length > 0 && (
            <span className="w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
              {dialog.comments.length}
            </span>
          )}
        </button>
        <CommentDialog isOpen={dialog.isOpen} comments={dialog.comments}
          onClose={dialog.closeDialog} onAddComment={dialog.addComment} />
      </div>

      <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
        <CommentForm
          state={form.state} currentValue={currentValue} fieldLabel={fieldLabel}
          submission={form.submission} fieldValue={form.fieldValue}
          commentText={form.commentText} document={form.document}
          onFieldValueChange={form.setFieldValue} onCommentTextChange={form.setCommentText}
          onDocumentChange={form.setDocument} onSubmit={form.handleSubmit}
          onDiscard={form.handleDiscard} onEdit={form.handleEdit} onDelete={form.handleDelete}
        />
      </div>
    </div>
  );
}