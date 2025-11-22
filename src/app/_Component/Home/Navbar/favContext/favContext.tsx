// import { ReactNode, useContext, useState } from "react";
// // import { createContext } from "vm";

// type FavContextType = {
//   favs: any[];
//   toggleFav: (product: any) => void;
// };

// // إنشاء الـ Context
// const FavContext = createContext<FavContextType>({
// // const FavContext = createContext<FavContextType>({
//   favs: [],
//   toggleFav: () => {},
// });

// // Hook لاستخدام الـ Context بسهولة
// export const useFav = () => useContext(FavContext);

// // Provider اللي هيلف المشروع كله
// export default function FavProvider({ children }: { children: ReactNode }) {
//   const [favs, setFavs] = useState<any[]>([]);

//   const toggleFav = (product: any) => {
//     const exists = favs.some((p) => p.id === product.id);
//     if (exists) {
//       setFavs(favs.filter((p) => p.id !== product.id));
//     } else {
//       setFavs([...favs, product]);
//     }
//   };

//   return (
//     <FavContext.Provider value={{ favs, toggleFav }}>
//       {children}
//     </FavContext.Provider>
//   );
// }

"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type FavContextType = {
  favs: any[];
  toggleFav: (product: any) => void;
};

// إنشاء الـ Context
const FavContext = createContext<FavContextType>({
  favs: [],
  toggleFav: () => {},
});

// Hook لاستخدام الـ Context بسهولة
export const useFav = () => useContext(FavContext);

// Provider اللي هيلف المشروع كله
export default function FavProvider({ children }: { children: ReactNode }) {
  const [favs, setFavs] = useState<any[]>([]);

  const toggleFav = (product: any) => {
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
