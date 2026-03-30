export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Hangouti</h3>
            <p>Social meetup app with chat and reels.</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Aevirt EV Platform</h3>
            <p>EV charging app with booking & payments.</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">MyCality</h3>
            <p>Multi-vendor e-commerce platform.</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">WoodenStreet</h3>
            <p>Furniture website frontend revamp.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
