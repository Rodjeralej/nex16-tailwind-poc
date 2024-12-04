const GraphicOption = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col p-4 rounded-xl hover:scale-105 transition-all duration-300 hover:from-red-950 hover:to-transparent hover:bg-gradient-to-r from-70% to-transparent sm:flex-row gap-4 justify-between items-center">
      {children}
    </div>
  );
};

export default GraphicOption;
