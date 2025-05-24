// app/components/LoadingSpinner.js
export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
      <p className="ml-3 text-sky-300">Conjuring career paths...</p>
    </div>
  );
}
