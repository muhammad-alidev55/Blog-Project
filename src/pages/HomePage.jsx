import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <>
      <Hero />

      <main className="container mx-auto px-4 py-10">
        <div className="grid gap-3 md:grid-cols-3">
          <BlogCard
            title="Learning React"
            description="React makes building user interfaces simple."
          />

          <BlogCard
            title="Understanding Props"
            description="Props allow us to pass data."
          />

          <BlogCard
            title="Tailwind CSS"
            description="Tailwind helps build modern interfaces."
          />

        </div>
      </main>

    </>
  );
}

export default HomePage;
