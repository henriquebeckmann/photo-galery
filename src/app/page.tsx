import { images } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-12 bg-black">
      <div className="text-slate-100 text-center py-8">
        <h1 className="text-2xl lg:text-4xl uppercase font-bold">exposição fotográfica</h1>
        <h2 className="text-4xl lg:text-8xl uppercase leading-snug lg:leading-[1.3] font-bold pt-2">
          Resistência <span className="text-yellow-500"> NEGRA </span> <br />
        </h2>
        <h2 className="text-2xl lg:text-4xl font-bold uppercase">EJA Médio Campo</h2>
        <div className="flex justify-center pt-1">
          <p className="text-xl border-b-2 border-yellow-500">
            Santa Izabel do Pará
          </p>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-zinc-950 rounded-xl overflow-hidden shadow-lg w-fit h-fit"
          >
            <Image
              src={image}
              alt=""
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
