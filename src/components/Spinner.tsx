export default function Spinner() {
  return (
    <div
      className="spinner-border animate-spin inline-block w-16 h-16 border-b-4 rounded-full border-primary"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
