import Image from "next/image";
import GlassCard from "./components/GlassCard";
import GlassFilters from "./components/GlassFilter";

export default function Home() {
  return (
    <main className="flex justify-center items-center relative h-svh w-full">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-move-bg relative w-full h-[150%]">
          <Image
            src="/abs2.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
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