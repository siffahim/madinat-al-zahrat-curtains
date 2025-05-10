const Blogs = () => {
  const contents = [
    {
      image: "/about1.jpg",
      title: "Design your corporate environment with Madinat Al Zaharat!",
      description:
        "GRID gives your office an elegant look and makes your corporate environment enjoyable. While working at an office, your surroundings matter the most. We ensure you a comfortable and premium quality via our products that would make your work environment energetic!",
    },
    {
      image: "/about2.jpg",
      title: "Meaningful & Minimal Design For Your Home.",
      description:
        "We create designs which bring a spark to your office or home. If you take a look at our designs, each design has a story to share! Our breathable mesh material provides an optimal air flow to avoid sweating and sticking, keep air circulation for extra comfy, and the mesh office chair resists abrasion and transformation. ",
    },
  ];
  return (
    <div className="container px-5 md:px-28 mb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {contents.map((item, index) => (
          <div key={index} className="w-full">
            <img src={item.image} alt="" />
            <div>
              <h2 className="text-3xl py-4">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
