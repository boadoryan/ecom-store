// localStorageMiddleware.js
export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action); // Pass the action to the next middleware or reducer

  // Save the cart state to local storage whenever there is a change
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));

  return result;
};
