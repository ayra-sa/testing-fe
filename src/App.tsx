import React from "react";
import Header from "./components/Header";
import SearchIcon from "./assets/icons/icon-search.svg";
import ImportIcon from "./assets/icons/icon-import.svg";
import EditIcon from "./assets/icons/icon-pencil.svg";
import CategoryCard from "./components/CategoryCard";
import EmptyCard from "./components/EmptyCard";
import AddModal, { Product } from "./components/AddModal";
import ProductCard from "./components/ProductCard";
import Menu from "./components/Menu";

function App() {
  const categories = [
    "Cocktail",
    "Shooters",
    "Premium Spirits",
    "Non-Alcoholic Beverages",
  ];

  const menu = [
    {
      menu: "Nightclub Profile",
      active: true,
    },
    {
      menu: "Featured",
      active: true,
    },
    {
      menu: "Beverages",
      active: true,
    },
    {
      menu: "Table Information",
      active: false,
    },
    {
      menu: "Operational Hour",
      active: false,
    },
  ];

  const [openModal, setOpenModal] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);
  const handleOpen = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
  };

  const handleAdd = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <main className="bg-bg-main min-h-screen">
      <Header />

      <div className="container p-5">
        <div className="flex flex-col md:flex-row items-start lg:items-center justify-between gap-y-5">
          <div className="flex items-center py-[10px] w-full md:w-auto px-3 rounded border border-[#333333]">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search product"
              autoComplete="off"
              className="w-full lg:w-auto text-sm font-normal bg-transparent focus:outline-none"
            />
            <img src={SearchIcon} alt="icon search" />
          </div>

          <button className="py-[10px] px-9 rounded border border-[#fcfcfc] flex items-center gap-x-2">
            <img src={ImportIcon} alt="icon import" />
            <span>Import</span>
          </button>
        </div>

        <div className="flex lg:items-center gap-x-6 mt-8 bg-[#1E1E1E] rounded-xl py-4 px-8">
          <div className="flex lg:items-center gap-x-3">
            <p className="font-medium text-sm tracking-[0.056px]">Category</p>
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((category, id) => (
                <CategoryCard key={id} label={category} />
              ))}
            </div>
          </div>
          <button>
            <img src={EditIcon} alt="icon edit" />
          </button>
        </div>

        <div className="mt-6 pb-10">
          {openModal ? (
            <AddModal handleCloseModal={handleClose} setProducts={handleAdd} />
          ) : null}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-11">
            {products.map((product, id) => (
              <ProductCard
                key={id}
                productName={product.name}
                productDescription={product.description}
              />
            ))}
            <EmptyCard handleOpenClick={handleOpen} />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex fixed bottom-0 w-full">
        {menu.map((m, id) => (
          <Menu key={id} menu={m.menu} isActive={m.active} />
        ))}
        <button className="flex-1 bg-[#AB5CFA] text-[#FCFCFC] py-3 uppercase text-sm font-medium">
          Next
        </button>
      </div>
    </main>
  );
}

export default App;
