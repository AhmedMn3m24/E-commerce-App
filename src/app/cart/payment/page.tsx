// "use client";
// import { useState, useEffect, FormEvent, useContext } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { toast } from "react-hot-toast";
// import { CreateCashOrder } from "@/app/cart/payment/payment.action";
// import { CartContext } from "@/app/_Component/SessionProvider/cartContext";

// export default function Payment() {
//   const [paymentMethod, setPaymentMethod] = useState<"cash" | "online">("cash");
//   const { cartId } = useContext(CartContext);
//   const [form, setForm] = useState({
//     details: "",
//     phone: "",
//     city: "",
//   });

//   useEffect(() => {
//     console.log("Payment page mounted on client");
//   }, []);

//   async function handleSubmit(e: FormEvent) {
//     e.preventDefault();

//     if (!cartId) {
//       toast.error("Cart is empty or still loading!");
//       return;
//     }

//     if (paymentMethod === "cash") {
//       await CreateCashOrder(cartId, JSON.stringify(form));
//     }

//     toast.success(`Order submitted! Payment method: ${paymentMethod}`);
//   }

//   return (
//     <main className="min-h-screen flex flex-col items-center justify-start py-10 bg-gray-50">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">Payment</h1>

//       {/* Payment Method */}
//       <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 mb-8 mx-auto">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-800">
//           Select Payment Method
//         </h2>

//         {/* Cash */}
//         <label className="flex items-center gap-4 mb-4 cursor-pointer">
//           <Input
//             type="radio"
//             name="payment"
//             checked={paymentMethod === "cash"}
//             onChange={() => setPaymentMethod("cash")}
//             className="w-5 h-5 accent-green-600" // تكبير الدائرة وتغيير اللون عند التحديد
//           />
//           <span className="text-gray-700 text-lg">Cash</span>
//         </label>

//         {/* Online */}
//         <label className="flex items-center gap-4 cursor-pointer">
//           <Input
//             type="radio"
//             name="payment"
//             checked={paymentMethod === "online"}
//             onChange={() => setPaymentMethod("online")}
//             className="w-5 h-5 accent-green-600"
//           />
//           <span className="text-gray-700 text-lg">Online</span>
//         </label>
//       </div>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white rounded-xl shadow-md p-6 flex flex-col gap-4"
//       >
//         <Input
//           type="text"
//           placeholder="Enter details"
//           value={form.details}
//           onChange={(e) => setForm({ ...form, details: e.target.value })}
//           className="py-2 px-3 border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 rounded-md"
//         />

//         <Input
//           type="tel"
//           placeholder="Enter phone"
//           value={form.phone}
//           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           className="py-2 px-3 border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 rounded-md"
//         />

//         <Input
//           type="text"
//           placeholder="Enter city"
//           value={form.city}
//           onChange={(e) => setForm({ ...form, city: e.target.value })}
//           className="py-2 px-3 border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 rounded-md"
//         />

//         <Button
//           type="submit"
//           className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
//         >
//           Submit Order
//         </Button>
//       </form>
//     </main>
//   );
// // }

// "use client";
// import { useState, FormEvent, useContext } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { CartContext } from "@/app/_Component/SessionProvider/cartContext";

// export default function PaymentPage() {
//   const [paymentMethod, setPaymentMethod] = useState<"cash" | "online">("cash");
//   const { cartId, totalPrice } = useContext(CartContext);

//   function handleSubmit(e: FormEvent) {
//     e.preventDefault();
//     if (!cartId) {
//       alert("Cart is empty or still loading!");
//       return;
//     }
//     alert(`Payment method: ${paymentMethod}\nTotal: ${totalPrice} LE`);
//     // هنا ممكن تضيف استدعاء API لإنشاء الطلب
//   }

//   return (
//     <div className="w-full max-w-md mx-auto p-5 bg-white rounded-xl shadow-md mt-10">
//       <h2 className="text-xl font-bold mb-4">Payment</h2>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <div className="flex items-center gap-3">
//           <Input
//             type="radio"
//             name="payment"
//             checked={paymentMethod === "cash"}
//             onChange={() => setPaymentMethod("cash")}
//           />
//           <Label>Cash</Label>
//         </div>

//         <div className="flex items-center gap-3">
//           <Input
//             type="radio"
//             name="payment"
//             checked={paymentMethod === "online"}
//             onChange={() => setPaymentMethod("online")}
//           />
//           <Label>Online</Label>
//         </div>

//         <Button type="submit" className="mt-3">
//           Submit Payment
//         </Button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, FormEvent, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";
import { CreateCashOrder } from "@/app/cart/payment/payment.action";
import { CartContext } from "@/app/_Component/SessionProvider/cartContext";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online">("cash");
  const { cartId } = useContext(CartContext);
  const [form, setForm] = useState({
    details: "",
    phone: "",
    city: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!cartId) {
      toast.error("Cart is empty or still loading!");
      return;
    }

    if (paymentMethod === "cash") {
      await CreateCashOrder(cartId, JSON.stringify(form));
    }

    toast.success(
      `Order submitted successfully! Payment method: ${paymentMethod}`
    );
  }

  return (
    <main className="p-5 flex flex-col items-center">
      {/* Payment Method */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>

        <div className="flex items-center gap-3 mb-2">
          <Input
            type="radio"
            name="payment"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
          />
          <span className="text-gray-700">Cash</span>
        </div>

        <div className="flex items-center gap-3">
          <Input
            type="radio"
            name="payment"
            checked={paymentMethod === "online"}
            onChange={() => setPaymentMethod("online")}
          />
          <span className="text-gray-700">Online</span>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-md p-6 flex flex-col gap-4"
      >
        <Input
          type="text"
          placeholder="Enter details"
          value={form.details}
          onChange={(e) => setForm({ ...form, details: e.target.value })}
          className="py-2 px-3 border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 rounded-md"
        />

        <Input
          type="tel"
          placeholder="Enter phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="py-2 px-3 border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 rounded-md"
        />

        <Input
          type="text"
          placeholder="Enter city"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          className="py-2 px-3 border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 rounded-md"
        />

        <Button type="submit" className="mt-3 bg-green-600 hover:bg-green-700">
          Submit
        </Button>
      </form>
    </main>
  );
}
