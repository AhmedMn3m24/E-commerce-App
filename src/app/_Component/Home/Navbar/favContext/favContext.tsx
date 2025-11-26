"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export type FavItemType = {
  id: string;
  title: string;
};

type FavContextType = {
  favs: FavItemType[];
  toggleFav: (product: FavItemType) => void;
};

const FavContext = createContext<FavContextType>({
  favs: [],
  toggleFav: () => {},
});

export const useFav = () => useContext(FavContext);

export default function FavProvider({ children }: { children: ReactNode }) {
  const [favs, setFavs] = useState<FavItemType[]>([]);

  const toggleFav = (product: FavItemType) => {
    const exists = favs.some((p) => p.id === product.id);
    if (exists) {
      setFavs(favs.filter((p) => p.id !== product.id));
    } else {
      setFavs([...favs, product]);
    }
  };

  return (
    <FavContext.Provider value={{ favs, toggleFav }}>
      {children}
    </FavContext.Provider>
  );
}
