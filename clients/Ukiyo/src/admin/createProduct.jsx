import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "./navbar";

function CreateProduct() {
  const [createProduct, setCreateProduct] = useState({
    title: "",
    description: "",
    imgUrl: "",
    price: 0,
    categoryId: 0,
  });
  const [category, setCategory] = useState([]);
  const nav = useNavigate();

  const fetchCategoryList = async () => {
    try {
      const response = await axios.get("http://localhost:3000/category");
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateProduct((prevState) => ({
      ...prevState,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let method = "POST";
    let url = "http://localhost:3000/product";

    try {
      //   console.log(createProduct, "?????");

      await axios({
        method,
        url,
        data: createProduct,
        // headers: { Authorization: "Bearer " + localStorage.token },
      });
      nav("/admin");
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  useEffect(() => {
    fetchCategoryList();
  }, []);

  return (
    <>
      <div>
        <AdminNavBar />
      </div>
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Create Product
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter title"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Description"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Price"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="imgUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Img Url
              </label>
              <input
                type="text"
                id="imgUrl"
                name="imgUrl"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter Img Url"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="categoryId"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                {category.map((el) => (
                  <option key={el.id} value={el.id}>
                    {el.title}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
