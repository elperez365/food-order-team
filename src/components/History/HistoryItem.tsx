export default function HistoryItem() {
  return (
    <>
      <article className="relative">
        <details className="group mb-2 rounded-md [&>section]:open:animate-[fade-in_0.3s_ease-out_none] [&_summary]:open:rounded-b-none">
          <summary className="flex cursor-pointer flex-wrap  justify-between gap-8 rounded-md border border-black/35 bg-slate-500/90 p-4 text-sm text-white">
            <section className="flex justify-between gap-2 text-left">
              <div className="flex flex-col">
                <label>Order done on:</label>
                <p>{formatEUDate(timeStamp)}</p>
              </div>
              <div className="flex flex-col">
                <label>Total:</label>
                <p className="font-bold">${cartTotal}</p>
              </div>
              <div className="flex flex-col">
                <label>Send to:</label>
                <p className="cursor-pointer text-sky-300 hover:font-semibold">
                  {customer.fullName}
                </p>
              </div>
            </section>
            <section>
              <div className="flex flex-col">
                <label>Order id: {id}</label>
                <p className="cursor-pointer text-sky-300 hover:font-semibold">
                  See order details
                </p>
              </div>
            </section>
          </summary>
          <section className="rounded-b-md border border-t-0 border-black/35 bg-slate-500/50 p-4">
            {items.map((item) => (
              <ItemDetails key={item.id} {...item} />
            ))}
          </section>
        </details>
      </article>
    </>
  );
}
