export function formatFileSize(bytes) {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${units[i]}`;
}

export function formatTime(date = new Date()) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric", minute: "2-digit", hour12: true,
  });
}

export function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export function fileToDocument(file) {
  const parts = file.name.split(".");
  const extension = parts.length > 1 ? parts.pop() : "";
  return { name: parts.join("."), extension, sizeLabel: formatFileSize(file.size), file };
}