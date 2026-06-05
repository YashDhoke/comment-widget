import { useState, useCallback } from "react";

export function useCommentForm(onSubmitCb, onDiscardCb) {
  const [state, setState] = useState("initial");
  const [fieldValue, setFieldValueRaw] = useState("");
  const [commentText, setCommentTextRaw] = useState("");
  const [document, setDocument] = useState(undefined);
  const [submission, setSubmission] = useState(undefined);

  const setFieldValue = useCallback((v) => {
    setFieldValueRaw(v);
    setState((s) => (s === "initial" ? "editing" : s));
  }, []);

  const setCommentText = useCallback((v) => {
    setCommentTextRaw(v);
    setState((s) => (s === "initial" ? "editing" : s));
  }, []);

  const handleSubmit = useCallback((payload) => {
    if (!payload.commentText.trim()) return;
    setSubmission(payload);
    setState("submitted");
    onSubmitCb?.(payload);
  }, [onSubmitCb]);

  const handleDiscard = useCallback(() => {
    setFieldValueRaw(""); setCommentTextRaw(""); setDocument(undefined);
    setState("initial");
    onDiscardCb?.();
  }, [onDiscardCb]);

  const handleEdit = useCallback(() => {
    if (!submission) return;
    setFieldValueRaw(submission.fieldValue);
    setCommentTextRaw(submission.commentText);
    setDocument(submission.document);
    setSubmission(undefined);
    setState("editing");
  }, [submission]);

  const handleDelete = useCallback(() => {
    setSubmission(undefined);
    setFieldValueRaw(""); setCommentTextRaw(""); setDocument(undefined);
    setState("initial");
  }, []);

  return {
    state, fieldValue, commentText, document, submission,
    setFieldValue, setCommentText, setDocument,
    handleSubmit, handleDiscard, handleEdit, handleDelete,
  };
}