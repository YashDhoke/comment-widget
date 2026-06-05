import { useState, useCallback } from "react";
import { formatTime, generateId } from "../utils/formatters";

const CURRENT_USER = { id: "cu1", name: "You", initials: "YO" };

export function useCommentDialog(initial = []) {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState(initial);

  const openDialog  = useCallback(() => setIsOpen(true), []);
  const closeDialog = useCallback(() => setIsOpen(false), []);

  const addComment = useCallback((text) => {
    if (!text.trim()) return;
    setComments((prev) => [
      ...prev,
      { id: generateId(), author: CURRENT_USER, text: text.trim(), timestamp: formatTime() },
    ]);
  }, []);

  return { isOpen, comments, openDialog, closeDialog, addComment };
}