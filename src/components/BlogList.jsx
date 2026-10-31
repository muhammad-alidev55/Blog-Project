import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  return (
    <section className="container px-10">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => {
          return (
            <BlogCard
              id={blog.id}
              title={blog.title}
              description={blog.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogList;
