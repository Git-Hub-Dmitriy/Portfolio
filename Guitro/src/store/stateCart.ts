import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type Cart = {
  id: number | null;
  amount: string | null;
  price: string | null;
  image: string | null;
  title: string | null;
};

interface CartState {
  cart: Cart[] | null;
  removeFromCart: (id: number) => void;
}

const storeCart = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        removeFromCart: (id: number) => {
          set((state) => ({
            cart: state.cart?.filter((item) => item.id !== id),
          }));
        },
      }),
      { name: "cartStorage" },
    ),
    { name: "Cart" },
  ),
);

export default storeCart;
