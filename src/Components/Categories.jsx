const Categories = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-[10em] px-[1em]">
      <div className="text-4xl md:text-6xl font-bold mb-12">
        <h1>
          What we serve at EventGuru
          <br /> for priceless memories
        </h1>
      </div>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="min-h-[15em] w-full bg-[#f8e2ff] relative rounded-lg border-2 border-black">
          <p className="absolute left-[10%] top-[60%] text-3xl font-bold">
            Music Festival
          </p>
        </div>

        <div className="min-h-[15em] w-full bg-[#ddf0f5] relative rounded-lg border-2 border-black">
          <p className="absolute left-[10%] top-[60%] text-3xl font-bold">
            Small Events
          </p>
        </div>

        <div className="min-h-[15em] w-full bg-[#F5FFCA] relative rounded-lg border-2 border-black">
          <p className="absolute left-[10%] top-[60%] text-3xl font-bold">
            Big Events
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
