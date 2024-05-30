export default function SelemeniSection() {
  return (
    <section className="text-white  min-h-screen h-[200vh] relative">
      <img
        src="/images/bg1.jpg"
        alt="bg-image"
        className="absolute object-cover top-0 bottom-0 -z-10"
      />
      <header className="py-40 flex flex-col w-full text-center">
        <h2 className="text-6xl font-medium mb-10">
          Guarantee of <div>reliability</div>
        </h2>
        <p className="text-neutral-300 leading-tight">
          And full information about <div>all stages of repair</div>
        </p>
      </header>
    </section>
  )
}
