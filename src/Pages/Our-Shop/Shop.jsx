// import { useContext, useEffect, useState } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import axios from "axios";
// import banner1 from "../../assets/shop/banner.png";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { CheckCircle } from "lucide-react";
// import { CartContext } from "../../Components/Carts/CartContext";

// const Shop = () => {
//   const { user } = useContext(AuthContext);
//   const { category } = useParams();
//   const location = useLocation();
//   const [items, setItems] = useState([]);
//   const [active, setActive] = useState(category?.toUpperCase() || "SALAD");
//   const [highlightId, setHighlightId] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [addedItem, setAddedItem] = useState(null);
//   const { fetchCartCount } = useContext(CartContext);

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(6);

//   // Filters
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(500);
//   const [sortOrder, setSortOrder] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Highlight
//   useEffect(() => {
//     const query = new URLSearchParams(location.search);
//     const highlight = query.get("highlight");
//     setHighlightId(highlight);
//   }, [location.search]);

//   // Fetch items
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(`${import.meta.env.VITE_api}/menuItems`);
//         setItems(res.data.data);
//       } catch (err) {
//         console.error("Error fetching shop items:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [category]);

//   // Categories
//   const categories = [...new Set(items.map((item) => item.category.toUpperCase()))];

//   // Sync select with tab
//   useEffect(() => {
//     if (active) {
//       setSelectedCategory(active);
//       setCurrentPage(1);
//     }
//   }, [active]);

//   useEffect(() => {
    if (selectedCategory) {
      setActive(selectedCategory.toUpperCase());
      setCurrentPage(1);
    }
  }, [selectedCategory]);

   Detect if search partially matches any category -> auto switch tab
  useEffect(() => {
    if (!searchQuery) return;
    const matchedCategory = categories.find((cat) =>
      cat.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (matchedCategory) {
      setActive(matchedCategory);
      setSelectedCategory(matchedCategory);
      setCurrentPage(1);
    }
  }, [searchQuery]);

  // Filter
  const filteredByCategory = items.filter((item) =>
    active ? item.category.toUpperCase() === active.toUpperCase() : true
  );

  const filtered = filteredByCategory
    .filter((item) => {
      const query = searchQuery.toLowerCase();
      const matchSearch = !query || item.name.toLowerCase().includes(query);
      const price = Number(item.price);
      const matchPrice = price >= minPrice && price <= maxPrice;
      return matchSearch && matchPrice;
    })
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return Number(a.price) - Number(b.price);
      if (sortOrder === "highToLow") return Number(b.price) - Number(a.price);
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      if (sortOrder === "desc") return b.name.localeCompare(a.name);
      return 0;
    });

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage || 1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // Add to cart
  const handleAddToCart = async (item) => {
    try {
      const newItem = {
        name: item.name,
        image: item.image,
        recipe: item.recipe,
        price: item.price,
        userName: user?.displayName || "Guest",
        userEmail: user?.email || "Not Logged In",
      };

      const res = await axios.post(`${import.meta.env.VITE_api}/carts`, newItem);
      if (res.data.insertedId) {
        setAddedItem(item);
        setShowModal(true);
        fetchCartCount();
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleReset = () => {
    setSelectedCategory(active || "");
    setMinPrice(0);
    setMaxPrice(500);
    setSortOrder("");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const title = "OUR SHOP";
  const subtitle = "Would you like to try a dish";

  const SkeletonCard = () => (
    <div className="border rounded-lg shadow-sm p-4 animate-pulse">
      <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
      <div className="space-y-3 text-center">
        <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mt-3"></div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-[70vh] overflow-hidden mb-10">
        <img src={banner1} alt="banner" className="w-full h-full object-cover" />
        <div className="absolute top-60 md:top-64 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-2xl px-8 py-10 text-center text-white max-w-3xl h-44 md:h-64 w-[90%] backdrop-blur-sm flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">{title}</h2>
          <p className="text-sm sm:text-lg opacity-90">{subtitle}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto mb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          {/* Category */}
          <div>
            <label className="block text-sm font-semibold mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border px-2 py-1 rounded border-gray-300 focus:border-amber-700 focus:ring-1 focus:ring-amber-700 outline-none transition"
            >
              <option value="">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
         <div>
            <label className="block text-sm font-semibold mb-1">Sort By</label>
            <select
              value={sortOrder}
              onChange={(e) => {
                setSortOrder(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border px-2 py-1 rounded border-gray-300 focus:border-amber-700 focus:ring-1 focus:ring-amber-700 outline-none transition"
            >
              <option className="block text-sm  text-gray-600 font-semibold mb-1" value="">Default</option>
              <option className="block text-sm  text-gray-600 font-semibold mb-1" value="lowToHigh">Price: Low → High</option>
              <option className="block text-sm  text-gray-600 font-semibold mb-1" value="highToLow">Price: High → Low</option>
              <option className="block text-sm  text-gray-600 font-semibold mb-1"  value="asc">Name: A → Z</option>
              <option className="block text-sm  text-gray-600 font-semibold mb-1" value="desc">Name: Z → A</option>
            </select>
          </div> 

          {/* Search */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1">Search</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by name or category"
              className="w-full border px-2 py-1 rounded border-gray-300 focus:border-amber-700 focus:ring-1 focus:ring-amber-700 outline-none transition"
            />
          </div>

          {/* Reset Button */}
          <div className="md:col-span-1 flex justify-end items-center mt-4 md:mt-0">
            <button
              onClick={handleReset}
              className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800 transition"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 md:space-x-6 border-b border-gray-200 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setHighlightId(null);
              setCurrentPage(1);
              setSelectedCategory(cat);
            }}
            className={`pb-3 text-sm font-semibold tracking-wide ${active === cat
              ? "text-yellow-500 border-b-2 border-yellow-500"
              : "text-gray-600 hover:text-yellow-500"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items */}
      {loading ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pb-20">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <SkeletonCard key={i} />
            ))}
        </div>
      ) : (
        <>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pb-10">
            {paginatedItems.map((item) => (
              <div
                key={item._id}
                className={`border rounded-lg shadow-sm transition p-4 relative ${item._id === highlightId
                  ? "ring-2 ring-amber-700 bg-green-300/10 scale-[1.05]"
                  : "hover:shadow-md"
                  }`}
              >
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md" />
                  <span className="absolute top-2 right-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded border-b-4 border-b-amber-800">
                    ${item.price}
                  </span>
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">{item.recipe}</p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-4 px-4 py-2 bg-gray-200 text-orange-600 font-medium rounded hover:bg-gray-300 transition border-b-4 border-b-orange-900"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col items-center space-y-4 mb-20">
              <div className="flex justify-center items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 text-sm rounded-md border bg-gray-100 hover:bg-amber-700 disabled:opacity-50 hover:text-white"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-1 text-sm rounded-md border ${currentPage === i + 1
                      ? "bg-amber-700 text-white border-amber-800"
                      : "bg-gray-100 hover:bg-amber-700"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <div className="flex justify-end max-w-6xl mx-auto px-4">
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(parseInt(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-amber-700"
                  >
                    <option value={3}>3</option>
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                  </select>
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 text-sm rounded-md border bg-gray-100 hover:bg-amber-700 disabled:opacity-50 hover:text-white"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center w-[90%] max-w-sm animate-fadeIn">
            <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Item Added Successfully!</h3>
            <p className="text-gray-500 mb-4">
              {addedItem?.name ? `${addedItem.name} has been added to your cart.` : ""}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
