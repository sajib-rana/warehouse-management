import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const [service, setService] = useState({});
  const [toggle, setToggle] = useState(true);
  const [stock, setStock] = useState(0);

  useEffect(() => {
    fetch(`https://warm-sea-19537.herokuapp.com/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [productId, service]);

  const prevStock = service.quantity;
  const handleStockUpdate = () => {
    setToggle(true);
    const newStock = parseInt(prevStock) + parseInt(stock);
    const updateQuantityVal = { quantity: newStock };

    fetch(`https://warm-sea-19537.herokuapp.com/product/${productId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantityVal),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Quantity Updated");
      });
  };

  const deliver = service.quantity;
  const handleStockDeliver = () => {
    setToggle(true);

    if (parseInt(stock) === 0) {
      const newStock = parseInt(deliver) - 1;
      const updateDeliveryVal = { quantity: newStock };

      fetch(`https://warm-sea-19537.herokuapp.com/product/${productId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateDeliveryVal),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Quantity Updated");
        });
    } else {
      const newStock = parseInt(deliver) - parseInt(stock);
      const updateDeliveryVal = { quantity: newStock };

      fetch(`https://warm-sea-19537.herokuapp.com/product/${productId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateDeliveryVal),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Quantity Updated");
        });
    }
  };

  return (
    <div className="py-5 container">
      <h3>details:{service.name}</h3>
      <div className="media d-flex align-items-center">
        <img className="mr-3" src={service.img} alt={service.name} />
        <div className="media-body text-start ms-3">
          <h5 className="mt-0">{service.name}</h5>
          {service.description}

          <div className="d-flex g-2 mt-3">
            <h6>
              Suplier:
              <span className="fw-bolder text-primary ms-2">
                {service.suplierName}
              </span>
            </h6>
            <h6>
              Quantity:
              {toggle ? (
                <span
                  className="fw-bolder text-primary ms-2"
                  onDoubleClick={() => setToggle(false)}
                >
                  {service.quantity}
                </span>
              ) : (
                <input
                  type="number"
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                />
              )}
            </h6>
            <h6>
              Price:
              <span className="fw-bolder text-primary ms-2">
                {service.price}
              </span>
            </h6>
          </div>
          <div className="d-flex g-2">
            <button
              className="btn btn-danger mt-4 px-5"
              onClick={() => handleStockDeliver()}
            >
              Deliver
            </button>
            <button
              className="btn btn-primary mt-4 px-5"
              onClick={() => handleStockUpdate()}
            >
              Add Quantity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
