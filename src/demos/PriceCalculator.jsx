import { useState } from "react";

export default function PriceCalculator() {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(4.99);

  /* brechnete Werte benötigen keinen eigenen State */
  const subtotal = price * quantity;

  const discoutAmount = subtotal * discount / 100;

  const totalPrice = subtotal - discoutAmount;

  const shippingCosts = subtotal >= 250 ? 0 : shipping;

  const finalPrice = totalPrice + shippingCosts;

  function handleReset() {
    setPrice("");
    setQuantity(1);
    setDiscount(0);
    setShipping(4.99);
  }

  return (
    <section>
      <h2>Preisberechnung</h2>

      <div>
        <label htmlFor="price">Einzelpreis</label>

        <input
          type="number"
          id="price"
          value={price}
          onChange={event => {
            setPrice(
              event.target.value === ""
                ? ""
                : Number(event.target.value)
            )
          }}
        />
      </div>

      <div>
        <label htmlFor="quantity">Anzahl</label>

        <input
          type="number"
          id="quantity"
          min="1"
          value={quantity}
          onChange={event =>
            setQuantity(Number(event.target.value))
          }
        />
      </div>

      <div>
        <label htmlFor="discount">Rabatt in %</label>

        <input
          type="number"
          id="discount"
          min="1"
          value={discount}
          onChange={event =>
            setDiscount(Number(event.target.value))
          }
        />
      </div>

      <p>
        Zwischensumme: {subtotal} € <br />
        Rabatt: {discoutAmount} € <br />
        Geamtpreis: {totalPrice} €
      </p>
      <p>
        Versand: {shippingCosts === 0 ? "kostenlos" : `${shippingCosts} €`} <br />
        Endpreis: {finalPrice} €
      </p>

      <p>
        <button onClick={handleReset} type="button">Zurücksetzen</button>
      </p>
    </section>
  );
}