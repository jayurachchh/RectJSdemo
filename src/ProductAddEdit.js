import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductAddEdit.css";

export default function ProductAddEdit() {

  const [data, setData] = useState({
    title: "",
    category: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    description: ""
  });

  const navigate = useNavigate();
  const params = useParams();

  // Check Add or Edit mode
  const isEdit = params.id !== undefined;


  // =========================
  // GET PRODUCT FOR EDIT
  // =========================

  useEffect(() => {

    if (isEdit) {

      fetch("https://dummyjson.com/products/" + params.id)
        .then((res) => {
          console.log("GET Status:", res.status);
          return res.json();
        })
        .then((res) => {

          console.log("GET Product:", res);

          setData({
            title: res.title || "",
            category: res.category || "",
            price: res.price || "",
            discountPercentage: res.discountPercentage || "",
            rating: res.rating || "",
            stock: res.stock || "",
            brand: res.brand || "",
            description: res.description || ""
          });

        })
        .catch((err) => {
          console.log("Get Product Error:", err);
        });

    }

  }, [params.id, isEdit]);


  // =========================
  // HANDLE INPUT CHANGE
  // =========================

  const handleChange = (field, value) => {

    setData({
      ...data,
      [field]: value
    });

  };


  // =========================
  // ADD / UPDATE
  // =========================

  const handleSubmit = () => {

    // Basic validation
    if (!data.title.trim()) {
      alert("Please enter product title");
      return;
    }

    if (!data.category) {
      alert("Please select category");
      return;
    }

    if (data.price === "") {
      alert("Please enter price");
      return;
    }

    if (data.stock === "") {
      alert("Please enter stock");
      return;
    }


    const productData = {
      title: data.title,
      category: data.category,
      price: Number(data.price),
      discountPercentage: Number(data.discountPercentage || 0),
      rating: Number(data.rating || 0),
      stock: Number(data.stock),
      brand: data.brand,
      description: data.description
    };


    // =========================
    // UPDATE
    // =========================

    if (isEdit) {

      fetch(
        "https://dummyjson.com/products/" + params.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(productData)
        }
      )
        .then((res) => {

          console.log("Update Status:", res.status);
          console.log("Update OK:", res.ok);

          if (!res.ok) {
            throw new Error("Update failed");
          }

          return res.json();

        })
        .then((res) => {

          console.log("Update Response:", res);

          alert("Product updated successfully");

          navigate("/ProductList");

        })
        .catch((err) => {

          console.log("Update Error:", err);

        });

    }


    // =========================
    // ADD
    // =========================

    else {

      fetch(
        "https://dummyjson.com/products/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(productData)
        }
      )
        .then((res) => {

          console.log("Add Status:", res.status);
          console.log("Add OK:", res.ok);

          if (!res.ok) {
            throw new Error("Add failed");
          }

          return res.json();

        })
        .then((res) => {

          console.log("Add Response:", res);

          alert("Product added successfully");

          navigate("/ProductList");

        })
        .catch((err) => {

          console.log("Add Error:", err);

        });

    }

  };


  return (
    <div className="employee-form-page">

      {/* ================= HEADER ================= */}

      <div className="employee-form-header">

        <div>

          <span className="form-subtitle">
            PRODUCT MANAGEMENT
          </span>

          <h1>
            {isEdit
              ? "Edit Product"
              : "Add New Product"}
          </h1>

          <p>
            {isEdit
              ? "Update product information"
              : "Create a new product"}
          </p>

        </div>


        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/ProductList")}
        >
          ← Back to Products
        </button>

      </div>


      {/* ================= FORM ================= */}

      <div className="employee-form-card">


        {/* ================= BASIC INFORMATION ================= */}

        <div className="form-section">

          <div className="section-title">

            <h2>Basic Information</h2>

            <p>
              Enter basic product details
            </p>

          </div>


          <div className="form-grid">


            {/* TITLE */}

            <div className="form-group">

              <label>
                Product Title
              </label>

              <input
                type="text"
                placeholder="Enter product title"
                value={data.title}
                onChange={(e) =>
                  handleChange(
                    "title",
                    e.target.value
                  )
                }
              />

            </div>


            {/* CATEGORY */}

            <div className="form-group">

              <label>
                Category
              </label>

              <select
                value={data.category}
                onChange={(e) =>
                  handleChange(
                    "category",
                    e.target.value
                  )
                }
              >

                <option value="">
                  Select Category
                </option>

                <option value="beauty">
                  Beauty
                </option>

                <option value="fragrances">
                  Fragrances
                </option>

                <option value="furniture">
                  Furniture
                </option>

                <option value="groceries">
                  Groceries
                </option>

              </select>

            </div>


            {/* BRAND */}

            <div className="form-group">

              <label>
                Brand
              </label>

              <input
                type="text"
                placeholder="Enter brand"
                value={data.brand}
                onChange={(e) =>
                  handleChange(
                    "brand",
                    e.target.value
                  )
                }
              />

            </div>


            {/* PRICE */}

            <div className="form-group">

              <label>
                Price
              </label>

              <input
                type="number"
                placeholder="Enter price"
                value={data.price}
                onChange={(e) =>
                  handleChange(
                    "price",
                    e.target.value
                  )
                }
              />

            </div>


          </div>

        </div>


        {/* ================= INVENTORY ================= */}

        <div className="form-section">

          <div className="section-title">

            <h2>Inventory & Pricing</h2>

            <p>
              Enter product stock and pricing information
            </p>

          </div>


          <div className="form-grid">


            {/* DISCOUNT */}

            <div className="form-group">

              <label>
                Discount (%)
              </label>

              <input
                type="number"
                placeholder="Enter discount"
                value={data.discountPercentage}
                onChange={(e) =>
                  handleChange(
                    "discountPercentage",
                    e.target.value
                  )
                }
              />

            </div>


            {/* RATING */}

            <div className="form-group">

              <label>
                Rating
              </label>

              <input
                type="number"
                step="0.01"
                min="0"
                max="5"
                placeholder="Enter rating"
                value={data.rating}
                onChange={(e) =>
                  handleChange(
                    "rating",
                    e.target.value
                  )
                }
              />

            </div>


            {/* STOCK */}

            <div className="form-group">

              <label>
                Stock
              </label>

              <input
                type="number"
                min="0"
                placeholder="Enter stock quantity"
                value={data.stock}
                onChange={(e) =>
                  handleChange(
                    "stock",
                    e.target.value
                  )
                }
              />

            </div>


          </div>

        </div>


        {/* ================= DESCRIPTION ================= */}

        <div className="form-section">

          <div className="section-title">

            <h2>Description</h2>

            <p>
              Enter product description
            </p>

          </div>


          <div className="form-grid">

            <div className="form-group full-width">

              <label>
                Product Description
              </label>

              <textarea
                rows="5"
                placeholder="Enter product description"
                value={data.description}
                onChange={(e) =>
                  handleChange(
                    "description",
                    e.target.value
                  )
                }
              />

            </div>

          </div>

        </div>


        {/* ================= BUTTONS ================= */}

        <div className="form-actions">

          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/ProductList")}
          >
            Cancel
          </button>


          <button
            type="button"
            className="save-btn"
            onClick={handleSubmit}
          >

            {isEdit
              ? "Update Product"
              : "+ Add Product"}

          </button>

        </div>

      </div>

    </div>
  );
}