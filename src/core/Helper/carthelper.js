export const addItemToCart = (item, next) => {
  let cart = [];
  if (typeof window !== undefined) {
    // Check if the `window` object is defined (if the code is running in a browser)

    if (localStorage.getItem("cart")) {
      // If the `cart` key exists in the local storage, parse its value and assign it to `cart`

      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...item,
    });
    // Update the `cart` key in the local storage with the updated `cart` array
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};
export const loadCart = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
};

export const removeItemFromCart = (productId) => {
  let cart = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    // Loop through the `cart` array and remove the item with a matching `productId`
    cart.map((product, i) => {
      if (product._id === productId) {
        cart.splice(i, 1);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const cartEmpty = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("cart");
    let cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};
