import Graphics from "./components/Graphics";

export default function Settings() {
  return (
    <>
      <div className="absolute inset-0 backdrop-blur-md" />
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="bg-black-200 h-24" />
        <Graphics />
        <div className="bg-black-200 h-24" />
      </div>
    </>
  );
}
