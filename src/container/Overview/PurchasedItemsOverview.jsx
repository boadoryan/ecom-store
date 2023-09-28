import { useSelector } from "react-redux";

const PurchasedItemsOverview = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <>
      <div>
        <h3 className="font-bold text-xl mb-4">Your Items:</h3>
        <div className="border rounded">
          {Object.keys(cart).map((itemId) => {
            const item = cart[itemId].item;
            const quantity = cart[itemId].quantity;
            return (
              <div key={itemId} className="flex p-8 gap-8">
                <div className="flex justify-center items-center">
                  <img
                    className="h-[5rem] object-contain"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-xl font-bold ">{item.title}</p>
                  <div>Quantity: {quantity}</div>
                  <p className="">Item Price: {item.price.toFixed(2)}</p>
                  <p className="">
                    Item Subtotal: {(item.price * quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PurchasedItemsOverview;
