import { useState } from "react";

const AddBlog = ({ addblog }) => {
  const emptyForm = {
    title: "",
    Catagory: "",
    AuthorName: "",
    image: "",
    description: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [successMessage, setSuccessMessage] = useState("");

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
    setSuccessMessage("");
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const newBlogData = {
      ...formData,
      id: Date.now(),
    };

    addblog(newBlogData);
    setFormData(emptyForm);
    setSuccessMessage("Blog added successfully! Go to Blogs page to see it.");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <main className="bg-gray-100">
        <div className="container mx-auto py-10 px-4 w-130">
          <h2 className="text-2xl font-bold mb-1">Add New Blog</h2>
          <p>Fill this form to add the new blog post to the blog list</p>

          {successMessage && (
            <p className="mt-4 rounded-lg bg-green-100 px-4 py-3 text-green-700">
              {successMessage}
            </p>
          )}

          <form
            onSubmit={handleOnSubmit}
            className="mt-1 bg-white rounded-2xl p-4"
            action=""
          >
            <label className="font-bold mt-7" htmlFor="title">
              Blog Title:
            </label>
            <br />
            <input
              required
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleOnChange}
              placeholder="Enter blog title"
              className="mt-2 border-1 border-gray-400 rounded-lg p-1 w-[97%] focus:outline-none focus:border-blue-500"
            />

            <br />
            <br />

            <label className="font-bold mt-7" htmlFor="Catagory">
              Blog Catagory:
            </label>
            <br />
            <input
              type="text"
              id="Catagory"
              name="Catagory"
              value={formData.Catagory}
              onChange={handleOnChange}
              placeholder="Example: React"
              className="mt-2 border-1 border-gray-400 rounded-lg p-1 w-[97%] focus:outline-none focus:border-blue-500"
            />

            <br />
            <br />

            <label className="font-bold mt-7" htmlFor="AuthorName">
              Author Name:
            </label>
            <br />
            <input
              type="text"
              id="AuthorName"
              name="AuthorName"
              value={formData.AuthorName}
              onChange={handleOnChange}
              placeholder="Enter the author name"
              className="mt-2 border-1 border-gray-400 rounded-lg p-1 w-[97%] focus:outline-none focus:border-blue-500"
            />

            <br />
            <br />

            <label className="font-bold mt-7" htmlFor="image">
              Blog image URl:
            </label>
            <br />
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleOnChange}
              placeholder="Paste image URL"
              className="mt-2 border-1 border-gray-400 rounded-lg p-1 w-[97%] focus:outline-none focus:border-blue-500"
            />

            <br />
            <br />

            <label className="font-bold mt-7" htmlFor="description">
              Blog Description:
            </label>
            <br />
            <textarea
              rows="4"
              required
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleOnChange}
              placeholder="Enter the description here..."
              className="mt-2 border-1 border-gray-400 rounded-lg p-1 w-[97%] focus:outline-none focus:border-blue-500"
            />

            <br />
            <br />

            <input
              type="submit"
              value="Submit"
              className="rounded bg-blue-600 text-white p-2 mt-3 cursor-pointer"
            />
          </form>
        </div>
      </main>
    </>
  );
};

export default AddBlog;
