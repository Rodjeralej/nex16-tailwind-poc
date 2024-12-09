export default function Spinner() {
  return (
    <>
      <div className="absolute inset-0 backdrop-blur-md" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-b-2 border-white rounded-full animate-spin" />
      </div>
    </>
  );
}
