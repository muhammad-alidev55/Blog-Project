const BlogCard = ({ title, description }) => {
  return (
    <div className="bg-white p-5 shadow rounded-lg ">
      <h3 className="text-2xl font-bold mb-1 ">{title}</h3>
      <p>{description}</p>
      <button className="rounded bg-blue-600 text-white p-2 mt-3 cursor-pointer">
        Read more
      </button>
    </div>
  );
};

export default BlogCard;
