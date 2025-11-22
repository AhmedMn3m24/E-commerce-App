"use client";
import { createContext, ReactNode, useContext, useState } from "react";

// نوع المنتج المضاف للمفضلة
export type FavItemType = {
  id: string;
  title: string;
  // لو في أي خصائص تانية للمنتج ممكن تضيفها هنا
};

// نوع الـ Context
type FavContextType = {
  favs: FavItemType[];
  toggleFav: (product: FavItemType) => void;
};

// إنشاء الـ Context مع قيمة افتراضية
const FavContext = createContext<FavContextType>({
  favs: [],
  toggleFav: () => {},
});

// Hook لاستخدام الـ Context بسهولة
export const useFav = () => useContext(FavContext);

// Provider اللي هيلف المشروع كله
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
