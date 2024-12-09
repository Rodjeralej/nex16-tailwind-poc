import Graphics from "./components/Graphics";

export default function Settings() {
  return (
    <>
      <div className="absolute inset-0 backdrop-blur-md" />
      <div className="relative z-10 flex flex-col justify-center h-full">
        <Graphics />
      </div>
    </>
  );
}
