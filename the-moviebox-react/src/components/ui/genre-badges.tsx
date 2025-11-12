const genres = ["Fantasy", "Family", "Action & Adventure"];

export function GenreBadges() {
  return (
    <div className="flex flex-wrap items-center text-sm m-2.5 gap-1">
      {genres.map((g) => (
        <span
          key={g}
          className="bg-[rgba(255,255,255,0.2)] py-1 px-3 rounded-3xl"
        >
          {g}
        </span>
      ))}
      <span className="pl-4 text-[#ccc]">2h 5m</span>
    </div>
  );
}
