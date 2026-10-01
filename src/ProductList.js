import './ProductList.css';
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("API Response:", res);
        setData(res.products);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  const formetedData = data.map((d) => {
    return (
      <tr key={d.id}>

        {/* PRODUCT */}
        <td>
          <div className="employee-info">

            <div className="employee-avatar">
              {d.title
                ? d.title.charAt(0).toUpperCase()
                : "P"}
            </div>

            <div className="employee-name-info">
              <strong>{d.title}</strong>
              <span>{d.category}</span>
            </div>

          </div>
        </td>

        {/* PRICE */}
        <td>
          <span className="employee-code">
            ${d.price}
          </span>
        </td>

        {/* DISCOUNT */}
        <td>
          <span className="position-text">
            {d.discountPercentage}%
          </span>
        </td>

        {/* RATING */}
        <td>
          <span className="department-badge">
            ⭐ {d.rating}
          </span>
        </td>

        {/* STOCK */}
        <td>
          <span className="contact-text">
            {d.stock}
          </span>
        </td>

        {/* ACTIONS */}
        <td>
          <div className="employee-actions">

            {/* VIEW */}
            {/* <button
              type="button"
              className="action-btn action-view"
              title="View Product"
              aria-label="View Product"
            >
              <span>👁</span>
            </button> */}

            {/* EDIT */}
            <button
              type="button"
              className="action-btn action-edit"
              title="Edit Product"
              aria-label="Edit Product"
              onClick={() => {
                navigate("/ProductAddEdit/" + d.id);
              }}
            >
              <span>✏️</span>
            </button>

            {/* DELETE */}
            <button
              type="button"
              className="action-btn action-delete"
              title="Delete Product"
              aria-label="Delete Product"
              onClick={() => {

                fetch(
                  "https://dummyjson.com/products/" + d.id,
                  {
                    method: "DELETE"
                  }
                )
                  .then((res) => {

                    if (!res.ok) {
                      throw new Error("Delete failed");
                    }

                    return res.json();

                  })
                  .then((res) => {

                    console.log("Delete Response:", res);

                    setData((oldData) =>
                      oldData.filter(
                        (product) => product.id !== d.id
                      )
                    );

                  })
                  .catch((err) => {

                    console.log("Delete Error:", err);

                  });

              }}
            >
              <span>🗑</span>
            </button>

          </div>
        </td>

      </tr>
    );
  });


  // IMPORTANT: RETURN THE JSX
  return (
    <div className="employee-page">

      <div className="employee-page-header">

        <div>
          <span className="page-subtitle">
            PRODUCT MANAGEMENT
          </span>

          <h1>Product List</h1>

          <p>
            Manage and view product information
          </p>
        </div>

        <button
          className="add-employee-btn"
          onClick={() => {
            navigate("/ProductAddEdit");
          }}
        >
          + Add Product
        </button>

      </div>


      <div className="employee-table-card">

        <div className="table-top">

          <div>
            <h2>Products</h2>

            <p>
              All available products
            </p>
          </div>

          <div className="employee-count">
            {data.length} Products
          </div>

        </div>


        <div className="table-wrapper">

          <table className="employee-table">

            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>DISCOUNT</th>
                <th>RATING</th>
                <th>STOCK</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {formetedData}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}