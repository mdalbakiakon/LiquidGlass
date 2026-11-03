import Image from "next/image";
import GlassCard from "./components/GlassCard";
import GlassFilters from "./components/GlassFilter";

const bgSrc =
  "https://images.unsplash.com/photo-1770723965168-fab6e7e0f5bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

export default function Home() {
  return (
    <main className="flex justify-center items-center relative h-svh w-full">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-move-bg w-full h-[200%]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative w-full h-1/2">
              <Image
                src={bgSrc}
                alt=""
                fill
                priority={i === 0}
                loading="eager"
                className="object-center object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <GlassFilters />
      <GlassCard className="h-30 w-50 rounded-4xl mr-2.5">
        <p className="text-white text-2xl font-semibold">Hello Glass</p>
      </GlassCard>
      <GlassCard className="ml-2.5 h-30 aspect-square rounded-full">
        <p className="text-white text-2xl font-semibold">+</p>
      </GlassCard>
    </main>
  );
}
