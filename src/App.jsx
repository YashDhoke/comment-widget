import CommentWidget from "./components/CommentWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <CommentWidget
        currentValue="The quick brown fox jumps over the lazy dog"
        fieldLabel="Field label"
        initialComments={[]}
      />
    </div>
  );
}