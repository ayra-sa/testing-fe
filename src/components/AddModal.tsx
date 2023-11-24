import React from "react";
import CloseIcon from "../assets/icons/icon-close.svg";

type Props = {
  handleCloseModal: () => void;
  setProducts: (product: Product) => void;
};

export type Product = {
  name: string;
  code: string;
  category: string;
  description: string;
  price: number | undefined;
  image: File | null;
};

const AddModal = ({ handleCloseModal, setProducts }: Props) => {
  const [formData, setFormData] = React.useState<Product>({
    name: "",
    code: "",
    category: "",
    description: "",
    price: undefined,
    image: null,
  });

  // console.log(formData.name)

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormData({
      name: "",
      code: "",
      category: "",
      description: "",
      price: 0,
      image: null,
    });

    setProducts(formData);

    handleCloseModal();

    console.log(formData);
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden bg-[#171717CC] fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-screen">
      <div className="container">
        <div className="relative max-h-full h-full flex place-content-center flex-col my-12">
          <div className="relative w-[90%] md:w-[70%] lg:w-1/2 mx-auto bg-[#222222] py-[38px] px-8 rounded-lg shadow">
            <h2 className="text-lg font-bold text-center">Add menu</h2>

            <form action="" onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="flex flex-col md:flex-row w-full gap-5">
                <div className="flex flex-1 flex-col space-y-1">
                  <label htmlFor="name" className="label">
                    Your product name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Product name"
                    className="input"
                    value={formData.name}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-1">
                  <label htmlFor="code" className="label">
                    Menu code
                  </label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    placeholder="Menu code"
                    className="input"
                    value={formData.code}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="category" className="label">
                  Select an option
                </label>
                <div className="select">
                  <select
                    id="category"
                    name="category"
                    className="input"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Category</option>
                    <option value="category_1">Category 1</option>
                    <option value="category_2">Category 2</option>
                    <option value="category_3">Category 3</option>
                    <option value="category_4">Category 4</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="description" className="label">
                  Tell me more about your product{" "}
                  <span className="text-[#F47566]">*</span>
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="input"
                  placeholder="Product description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row w-full gap-5">
                <div className="flex flex-1 flex-col space-y-1">
                  <label htmlFor="price" className="label">
                    Price
                    <span className="text-[#F47566]">*</span>
                  </label>
                  <div className="flex items-center input gap-x-1">
                    <span>NT$</span>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      placeholder="Price"
                      className="bg-transparent focus:outline-none w-full"
                      min={0}
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col space-y-1">
                  <label htmlFor="price" className="label">
                    Discount price (optional)
                  </label>
                  <div className="flex items-center input gap-x-1">
                    <span>NT$</span>
                    <input
                      type="number"
                      id="discounted_price"
                      name="discounted_price"
                      placeholder="Discounted price"
                      className="bg-transparent focus:outline-none w-full"
                      min={0}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="image" className="label">
                  Image <span className="text-[#F47566]">*</span>
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="input w-full relative"
                  placeholder="Select File"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <p className="label">Enable Variant</p>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-[30px] h-4 bg-gray-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[3px] after:bg-gray-50 after:border-gray-50 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600" />
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-bg-button py-2 rounded-md"
              >
                Add product
              </button>
            </form>

            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4"
            >
              <img src={CloseIcon} alt="icon close" />
            </button>
          </div>

          <div className="hidden md:block bg-bg-button p-5 rounded-lg text-[#f6f6f6] absolute top-0 right-0 left-auto w-[22%]">
            <h2 className="text-base font-bold tracking-[0.04px]">
              Looking for variant ?
            </h2>

            <p className="text-sm font-medium mt-4">
              Don’t worry!! <br />
              <br />
              size, sugar level, ice level will be unlocked if you already
              approved by admin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
