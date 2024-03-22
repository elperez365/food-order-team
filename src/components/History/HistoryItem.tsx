import { order } from "../../data/types";

import HistoryItemDetails from "./HistoryItemDetails";

export default function HistoryItem({ id, customer, date, products }: order) {
  function getTotalPrice() {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  }

  return (
    <>
      <article className="relative">
        <details className="group mb-2 rounded-md [&_summary]:open:rounded-b-none">
          <summary className="flex cursor-pointer flex-wrap  justify-between gap-8 rounded-md border border-black/35 bg-slate-500/90 p-4 text-sm text-white">
            <section className="flex justify-between gap-2 text-left">
              <div className="flex flex-col">
                <label>Order done on:</label>
                <p>{date}</p>
              </div>
              <div className="flex flex-col">
                <label>Total:</label>
                <p className="font-bold">${getTotalPrice()}</p>
              </div>
              <div className="flex flex-col">
                <label>Send to:</label>
                <p className="cursor-pointer text-sky-300">{customer.name}</p>
              </div>
            </section>
            <section>
              <div className="flex flex-col">
                <label>Order id: {id}</label>
                <p className="cursor-pointer text-sky-300">See order details</p>
              </div>
            </section>
          </summary>
          <section className="rounded-b-md border border-t-0 border-black/35 bg-slate-500/50 p-4">
            {products.map((product) => (
              <HistoryItemDetails
                key={product.id}
                id={+product.id}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </section>
        </details>
      </article>
    </>
  );
}
