import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-blue-500 text-white ">
        <div className="container mx-auto flex justify-between px-10 py-5">
          <h1 className="text-2xl font-bold ">My Blog</h1>
          <nav className="flex gap-10 px-4  ">
            <Link to="/" className="hover:text-blue-200">
              Home
            </Link>
            <Link to="/blogs" className="hover:text-blue-200">
              Blogs
            </Link>
            <Link to="/add-blog" className="hover:text-blue-200">
              Add Blog
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
