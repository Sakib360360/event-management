/* eslint-disable @next/next/no-img-element */
const StartedSection = () => {
  return (
    <section className="bg-purple-100 rounded-md max-w-screen-xl mx-auto py-[5em] px-[1em]">
      <div className="px-[1em]">
        <p className=" mb-5">
          <span className="border border-gray-900 text-gray-900 rounded-full p-3">
            EventGuru
          </span>
        </p>
        <h2 className="text-5xl font-bold text-gray-900 mb-10">
          Our Upcoming Events
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="">
            <img
              className="rounded-md"
              src="https://i.ibb.co/q79099G/photo-1492684223066-81342ee5ff30.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-gray-900">
              <span className="font-bold text-md ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                tenetur ipsum, eligendi similique, adipisci maiores nobis
                expedita minima repellat rerum sed ut saepe atque impedit
                blanditiis corporis non nostrum animi!
              </span>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              commodi. Corrupti impedit dolorum nihil corporis deleniti nisi id
              modi atque?
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ex
              ad omnis reprehenderit aperiam suscipit sequi vel cumque in
              exercitationem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartedSection;
