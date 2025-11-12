import { Buttons } from "../ui/buttons";
import { GenreBadges } from "../ui/genre-badges";
import { Poster } from "../ui/poster";
import { Synopsis } from "../ui/synopsis";

export function Highlight() {
  return (
    <section className="relative flex bg-[url('../img/etT14XfDEqhQZdD47ywpyihXPyW.jpg')] bg-left bg-top bg-cover bg-no-repeat">
      <div className="absolute top-0 left-0 w-full h-full z-1 bg-[linear-gradient(to_right,rgba(17,17,17,1)_calc((50vw-70px)-340px),rgba(17,17,17,0.7)_50%,rgba(17,17,17,0.7)_100%)]"></div>
      <div className="flex gap-8 py-8 z-2 mx-auto max-w-[1140px]">
        <Poster />
        <div className="flex flex-col">
          <h2 className="text-4xl font-medium">How to train your dragon</h2>
          <GenreBadges />
          <Synopsis />
          <Buttons />
        </div>
      </div>
    </section>
  );
}
