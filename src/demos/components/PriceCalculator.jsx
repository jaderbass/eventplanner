import { useState } from "react";

function PriceCalculator() {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);

  const subtotal = price * quantity;

  const discountAmount = subtotal * (discount / 100);

  const total = subtotal - discountAmount;

  return (
    <>
      <label htmlFor="price">
        Einzelpreis
      </label>{" "}

      <input
        type="number"
        value={price}
        id="price"
        onChange={(event) =>
          setPrice(Number(event.target.value))
        }
      />
      €
      <br />

      <label htmlFor="quantity">
        Menge
      </label>{" "}

      <input
        type="number"
        value={quantity}
        id="quantity"
        onChange={(event) =>
          setQuantity(Number(event.target.value))
        }
      />
      Stück
      <br />

      <label htmlFor="discount">
        Rabatt
      </label>{" "}

      <select
        value={discount}
        id="discount"
        onChange={(event) =>
          setDiscount(Number(event.target.value))
        }
      >
        <option value="0">
          kein Rabatt
        </option>

        <option value="10">
          10 %
        </option>

        <option value="20">
          20%
        </option>

      </select>

      <p>
        Zwischensumme:
        {" "}
        {subtotal.toFixed(2)} €
      </p>

      <p>
        Rabatt:
        {" "}
        {discountAmount.toFixed(2)} €
      </p>

      <p>
        Gesamt:
        {" "}
        {total.toFixed(2)} €
      </p>

    </>

  );
}

export default PriceCalculator;