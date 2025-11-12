const buttons = [
  { label: "Play", isPrimary: true },
  { label: "Details", isPrimary: false },
  { label: "+ Add to list", isPrimary: false },
];

export function Buttons() {
  return (
    <div className="flex gap-4 my-6">
      {buttons.map((b) =>
        !b.isPrimary ? (
          <button className="bg-[rgba(255,255,255,0.2)] text-white border border-[rgba(255,255,255,0.3)] py-3 px-6 rounded-sm cursor-pointer transition-colors duration-300 ease-in-out">
            {b.label}
          </button>
        ) : (
          <button className="bg-[#e50914] text-white py-3 px-6 rounded-sm font-bold cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#b8070f]">
            {b.label}
          </button>
        )
      )}
    </div>
  );
}
