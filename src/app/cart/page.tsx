import { getMyUserToken } from "@/utlis/utlis";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductType } from "@/lib/interfaces/Category";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { getCartItems } from "@/lib/services/cartservices";
import CartRemoveBtn from "./cartRemoveBtn";
import ChangeCountBtn from "./ChangeCountBtn";

type ItemType = {
  count: number;
  price: number;
  _id: string;
  product: ProductType;
};

export default async function Cart() {
  async function getUserCart() {
    const token = await getMyUserToken();

    const res = await getCartItems();
    return res;
  }

  const { numOfCartItems, products, totalCartPrice } = await getUserCart();
  console.log(products, "products ");

  return (
    // <div className="p-4">
    //     <div className="flex justify-between items-center mb-6">
    //         <div>
    //             <h2 className="text-lg font-semibold">
    //                 You will pay: <span className="text-green-600">{totalCartPrice} LE</span>
    //             </h2>
    //             <h2 className="text-lg font-semibold">
    //                 Number Of Items: <span className="text-blue-600">{numOfCartItems}</span>
    //             </h2>
    //         </div>

    //         <div className="flex gap-3">
    //             <Button className="cursor-pointer ">Pay</Button>
    //             <Button className="cursor-pointer" variant="destructive">
    //                 Remove All
    //             </Button>
    //         </div>
    //     </div>

    //     <div className="w-full md:w-3/4 mx-auto">
    //         <Table>
    //             <TableCaption>Your current cart items</TableCaption>

    //             <TableHeader>
    //                 <TableRow>
    //                     <TableHead className="w-[150px]">Product</TableHead>
    //                     <TableHead>Price</TableHead>
    //                     <TableHead>Count</TableHead>
    //                     <TableHead className="text-right">Actions</TableHead>
    //                 </TableRow>
    //             </TableHeader>

    //             <TableBody>
    //                 {products.length > 0 ? (
    //                     products.map((item: ItemType) => (
    //                         <TableRow key={item._id || item.product._id}>
    //                             <TableCell className="font-medium">
    //                                 <div className="flex flex-col items-center">
    //                                     <img
    //                                         src={item.product.imageCover}
    //                                         alt={item.product.title}
    //                                         className="w-50 h-55 object-cover rounded-md  mb-2"
    //                                     />
    //                                     <h4 className="text-center font-semibold">
    //                                         {item.product.title}
    //                                     </h4>
    //                                 </div>
    //                             </TableCell>

    //                             <TableCell>{item.price} LE</TableCell>
    //                             <TableCell>{item.count}</TableCell>

    //                             <TableCell className="text-right">
    //                                 <div className="flex flex-col items-end gap-2">
    //                                     <div className="flex gap-2 items-center">
    //                                         <Button className="cursor-pointer">+</Button>
    //                                         <Input
    //                                             className="p-1 w-12 h-10 text-center"
    //                                             value={item.count}
    //                                             readOnly
    //                                         />
    //                                         <Button className="cursor-pointer">-</Button>
    //                                     </div>
    //                                     <Button
    //                                         variant="destructive"
    //                                         className="cursor-pointer w-full"
    //                                     >
    //                                         Remove
    //                                     </Button>
    //                                 </div>
    //                             </TableCell>
    //                         </TableRow>
    //                     ))
    //                 ) : (
    //                     <TableRow>
    //                         <TableCell colSpan={4} className="text-center py-6 text-gray-500">
    //                             مفيش منتجات في العربية دلوقتي 🛒
    //                         </TableCell>
    //                     </TableRow>
    //                 )}
    //             </TableBody>
    //         </Table>
    //     </div>

    //     <p className="mt-6 font-bold text-lg text-center">
    //         Total Price: <span className="text-green-700">{totalCartPrice} LE</span>
    //     </p>
    // </div >

    // <div className="w-full  mx-auto rounded-lg shadow-md bg-white p-4">
    //     <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
    //         <div>
    //             <h2 className="text-lg font-semibold">
    //                 You will pay:{" "}
    //                 <span className="text-green-600">{totalCartPrice} LE</span>
    //             </h2>
    //             <h2 className="text-lg font-semibold">
    //                 Number Of Items:{" "}
    //                 <span className="text-blue-600">{numOfCartItems}</span>
    //             </h2>
    //         </div>

    //         <div className="flex gap-3">
    //             <Button className="cursor-pointer">Pay</Button>
    //             <Button className="cursor-pointer" variant="destructive">
    //                 Remove All
    //             </Button>
    //         </div>
    //     </div>

    //     {/* ✅ جعل الجدول متجاوب بدون scroll */}
    //     <div className="w-full md:w-3/4 mx-auto overflow-hidden rounded-lg shadow-sm">
    //         <Table className="min-w-[600px] md:min-w-full">
    //             <TableCaption>Your current cart items</TableCaption>

    //             <TableHeader>
    //                 <TableRow>
    //                     <TableHead className="w-[150px]">Product</TableHead>
    //                     <TableHead>Price</TableHead>
    //                     <TableHead>Count</TableHead>
    //                     <TableHead className="text-right">Actions</TableHead>
    //                 </TableRow>
    //             </TableHeader>

    //             <TableBody>
    //                 {products.length > 0 ? (
    //                     products.map((item: ItemType) => (
    //                         <TableRow key={item._id || item.product._id}>
    //                             <TableCell className="font-medium">
    //                                 <div className="flex flex-col items-center">
    //                                     <img
    //                                         src={item.product.imageCover}
    //                                         alt={item.product.title}
    //                                         className="w-40 h-40 object-cover rounded-md mb-2"
    //                                     />
    //                                     <h4 className="text-center font-semibold">
    //                                         {item.product.title}
    //                                     </h4>
    //                                 </div>
    //                             </TableCell>

    //                             <TableCell>{item.price} LE</TableCell>
    //                             <TableCell>{item.count}</TableCell>

    //                             <TableCell className="text-right">
    //                                 <div className="flex flex-col items-end gap-2">
    //                                     <div className="flex gap-2 items-center">
    //                                         <Button className="cursor-pointer">+</Button>
    //                                         <Input
    //                                             className="p-1 w-12 h-10 text-center"
    //                                             value={item.count}
    //                                             readOnly
    //                                         />
    //                                         <Button className="cursor-pointer">-</Button>
    //                                     </div>
    //                                     <Button
    //                                         variant="destructive"
    //                                         className="cursor-pointer w-full"
    //                                     >
    //                                         Remove
    //                                     </Button>
    //                                 </div>
    //                             </TableCell>
    //                         </TableRow>
    //                     ))
    //                 ) : (
    //                     <TableRow>
    //                         <TableCell
    //                             colSpan={4}
    //                             className="text-center py-6 text-gray-500"
    //                         >
    //                             مفيش منتجات في العربية دلوقتي 🛒
    //                         </TableCell>
    //                     </TableRow>
    //                 )}
    //             </TableBody>
    //         </Table>
    //     </div>

    //     <p className="mt-6 font-bold text-lg text-center">
    //         Total Price: <span className="text-green-700">{totalCartPrice} LE</span>
    //     </p>
    // </div>

    // <div className="w-full mx-auto rounded-lg shadow-md bg-white p-4">
    //     {/* القسم العلوي */}
    //     <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
    //         <div>
    //             <h2 className="text-lg font-semibold">
    //                 You will pay: <span className="text-green-600">{totalCartPrice} LE</span>
    //             </h2>
    //             <h2 className="text-lg font-semibold">
    //                 Number Of Items: <span className="text-blue-600">{numOfCartItems}</span>
    //             </h2>
    //         </div>

    //         <div className="flex gap-3">
    //             <Button className="cursor-pointer">Pay</Button>
    //             <Button className="cursor-pointer" variant="destructive">
    //                 Remove All
    //             </Button>
    //         </div>
    //     </div>

    //     {/* ✅ Grid بدل الجدول */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //         {products.length > 0 ? (
    //             products.map((item: ItemType) => (
    //                 <div
    //                     key={item._id || item.product._id}
    //                     className="flex justify-between items-center border rounded-lg p-4 shadow-sm bg-gray-50 hover:shadow-md transition"
    //                 >
    //                     {/* الصورة شمال */}
    //                     <div className="flex flex-col items-center">
    //                         <img
    //                             src={item.product.imageCover}
    //                             alt={item.product.title}
    //                             className="w-32 h-32 object-cover rounded-md mb-2"
    //                         />
    //                         <h4 className="text-center font-semibold text-sm">
    //                             {item.product.title}
    //                         </h4>
    //                     </div>

    //                     {/* الزرار والعداد يمين */}
    //                     <div className="flex flex-col items-end gap-3">
    //                         <p className="font-semibold">{item.price} LE</p>

    //                         <div className="flex items-center gap-2">
    //                             <Button className="cursor-pointer px-2">+</Button>
    //                             <Input
    //                                 className="p-1 w-12 h-9 text-center"
    //                                 value={item.count}
    //                                 readOnly
    //                             />
    //                             <Button className="cursor-pointer px-2">-</Button>
    //                         </div>

    //                         <Button variant="destructive" className="cursor-pointer w-full">
    //                             Remove
    //                         </Button>
    //                     </div>
    //                 </div>
    //             ))
    //         ) : (
    //             <p className="text-center py-6 text-gray-500 col-span-full">
    //                 مفيش منتجات في العربية دلوقتي 🛒
    //             </p>
    //         )}
    //     </div>

    //     {/* السعر الكلي */}
    //     <p className="mt-6 font-bold text-lg text-center">
    //         Total Price: <span className="text-green-700">{totalCartPrice} LE</span>
    //     </p>
    // </div>

    // <div className="w-full mx-auto rounded-lg shadow-md bg-white p-4">
    //     {/* 🔹 الجزء العلوي */}
    //     <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
    //         <div>
    //             <h2 className="text-lg font-semibold">
    //                 You will pay: <span className="text-green-600">{totalCartPrice} LE</span>
    //             </h2>
    //             <h2 className="text-lg font-semibold">
    //                 Number Of Items: <span className="text-blue-600">{numOfCartItems}</span>
    //             </h2>
    //         </div>

    //         <div className="flex gap-3">
    //             <Button className="cursor-pointer">Pay</Button>
    //             <Button className="cursor-pointer" variant="destructive">
    //                 Remove All
    //             </Button>
    //         </div>
    //     </div>

    //     {/* ✅ جدول متجاوب من غير Scroll */}
    //     <div className="w-full mx-auto overflow-hidden rounded-lg shadow-sm">
    //         <Table className="w-full border-collapse">
    //             <TableCaption>Your current cart items</TableCaption>

    //             <TableHeader>
    //                 <TableRow className="bg-gray-100">
    //                     <TableHead className="py-3 text-left w-[250px]">Product</TableHead>
    //                     <TableHead className="py-3 text-left">Price</TableHead>
    //                     <TableHead className="py-3 text-left">Count</TableHead>
    //                     <TableHead className="py-3 text-right">Actions</TableHead>
    //                 </TableRow>
    //             </TableHeader>

    //             <TableBody>
    //                 {products.length > 0 ? (
    //                     products.map((item: ItemType) => (
    //                         <TableRow
    //                             key={item._id || item.product._id}
    //                             className="hover:bg-gray-50 transition"
    //                         >
    //                             {/* 🖼️ الصورة شمال */}
    //                             <TableCell className="py-4">
    //                                 <div className="flex items-center gap-4">
    //                                     <img
    //                                         src={item.product.imageCover}
    //                                         alt={item.product.title}
    //                                         className="w-24 h-24 object-cover rounded-md"
    //                                     />
    //                                     <div>
    //                                         <h4 className="font-semibold text-gray-800">
    //                                             {item.product.title}
    //                                         </h4>
    //                                     </div>
    //                                 </div>
    //                             </TableCell>

    //                             {/* 💰 السعر */}
    //                             <TableCell className="py-4 text-gray-700 font-medium">
    //                                 {item.price} LE
    //                             </TableCell>

    //                             {/* 🔢 العدد */}
    //                             <TableCell className="py-4 text-gray-700">{item.count}</TableCell>

    //                             {/* ⚙️ الأزرار يمين */}
    //                             <TableCell className="py-4 text-right">
    //                                 <div className="flex justify-end items-center gap-2">
    //                                     <Button className="cursor-pointer px-2">+</Button>
    //                                     <Input
    //                                         className="p-1 w-12 h-10 text-center"
    //                                         value={item.count}
    //                                         readOnly
    //                                     />
    //                                     <Button className="cursor-pointer px-2">-</Button>
    //                                     <Button
    //                                         variant="destructive"
    //                                         className="cursor-pointer ml-2"
    //                                     >
    //                                         Remove
    //                                     </Button>
    //                                 </div>
    //                             </TableCell>
    //                         </TableRow>
    //                     ))
    //                 ) : (
    //                     <TableRow>
    //                         <TableCell
    //                             colSpan={4}
    //                             className="text-center py-6 text-gray-500"
    //                         >
    //                             مفيش منتجات في العربية دلوقتي 🛒
    //                         </TableCell>
    //                     </TableRow>
    //                 )}
    //             </TableBody>
    //         </Table>
    //     </div>

    //     {/* 💵 السعر الكلي */}
    //     <p className="mt-6 font-bold text-lg text-center">
    //         Total Price: <span className="text-green-700">{totalCartPrice} LE</span>
    //     </p>
    // </div>

    // <div className="w-full mx-auto rounded-lg shadow-md bg-white p-4">
    //     {/* ====== العنوان والأزرار ====== */}
    //     <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
    //         <div>
    //             <h2 className="text-lg font-semibold">
    //                 You will pay:{" "}
    //                 <span className="text-green-600">{totalCartPrice} LE</span>
    //             </h2>
    //             <h2 className="text-lg font-semibold">
    //                 Number Of Items:{" "}
    //                 <span className="text-blue-600">{numOfCartItems}</span>
    //             </h2>
    //         </div>

    //         <div className="flex gap-3">
    //             <Button className="cursor-pointer">Pay</Button>
    //             <Button className="cursor-pointer" variant="destructive">
    //                 Remove All
    //             </Button>
    //         </div>
    //     </div>

    //     {/* ====== الجدول ====== */}
    //     <div className="w-full mx-auto rounded-lg shadow-sm">
    //         <Table className="w-full border-collapse table-auto">
    //             <TableCaption>Your current cart items</TableCaption>

    //             <TableHeader>
    //                 <TableRow className="bg-gray-100">
    //                     <TableHead className="w-[300px] py-3 text-left">
    //                         Product
    //                     </TableHead>
    //                     <TableHead className="py-3 text-left">Price</TableHead>
    //                     <TableHead className="py-3 text-left">Count</TableHead>
    //                     <TableHead className="py-3 text-right">Actions</TableHead>
    //                 </TableRow>
    //             </TableHeader>

    //             <TableBody>
    //                 {products.length > 0 ? (
    //                     products.map((item: ItemType) => (
    //                         <TableRow
    //                             key={item._id || item.product._id}
    //                             className="hover:bg-gray-50 transition"
    //                         >
    //                             {/* الصورة + الاسم */}
    //                             <TableCell className="py-4">
    //                                 <div className="flex items-center gap-4">
    //                                     <img
    //                                         src={item.product.imageCover}
    //                                         alt={item.product.title}
    //                                         className="w-50 h-50 object-cover rounded-md"
    //                                     />
    //                                     <h4 className="font-semibold text-gray-800">
    //                                         {item.product.title}
    //                                     </h4>
    //                                 </div>
    //                             </TableCell>

    //                             {/* السعر */}
    //                             <TableCell className="py-4 text-gray-700 font-medium">
    //                                 {item.price} LE
    //                             </TableCell>

    //                             {/* العدد */}
    //                             <TableCell className="py-4 text-gray-700">
    //                                 {item.count}
    //                             </TableCell>

    //                             {/* الأزرار */}
    //                             <TableCell className="py-4 text-right">
    //                                 <div className="flex justify-end items-center gap-2">
    //                                     <Button className="cursor-pointer px-2">+</Button>
    //                                     <Input
    //                                         className="p-1 w-12 h-10 text-center"
    //                                         value={item.count}
    //                                         readOnly
    //                                     />
    //                                     <Button className="cursor-pointer px-2">-</Button>
    //                                     <Button
    //                                         variant="destructive"
    //                                         className="cursor-pointer ml-2"
    //                                     >
    //                                         Remove
    //                                     </Button>
    //                                 </div>
    //                             </TableCell>
    //                         </TableRow>
    //                     ))
    //                 ) : (
    //                     <TableRow>
    //                         <TableCell
    //                             colSpan={4}
    //                             className="text-center py-6 text-gray-500"
    //                         >
    //                             مفيش منتجات في العربية دلوقتي 🛒
    //                         </TableCell>
    //                     </TableRow>
    //                 )}
    //             </TableBody>
    //         </Table>
    //     </div>

    //     {/* ====== الإجمالي ====== */}
    //     <p className="mt-6 font-bold text-lg text-center">
    //         Total Price: <span className="text-green-700">{totalCartPrice} LE</span>
    //     </p>
    // </div>

    <div className="w-full mx-auto rounded-lg shadow-md bg-white p-4 overflow-hidden">
      {/* ====== العنوان والأزرار ====== */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h2 className="text-lg font-semibold">
            You will pay:{" "}
            <span className="text-green-600">{totalCartPrice} LE</span>
          </h2>
          <h2 className="text-lg font-semibold">
            Number Of Items:{" "}
            <span className="text-blue-600">{numOfCartItems}</span>
          </h2>
        </div>

        <div className="flex gap-3">
          <Button className="cursor-pointer">Pay</Button>
          <Button className="cursor-pointer" variant="destructive">
            Remove All
          </Button>
        </div>
      </div>

      {/* ====== الجدول ====== */}
      <div className="w-full overflow-hidden">
        <Table className="w-full border-collapse table-auto">
          <TableCaption>Your current cart items</TableCaption>

          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="w-[300px] py-3 text-left">
                Product
              </TableHead>
              <TableHead className="py-3 text-left">Price</TableHead>
              <TableHead className="py-3 text-left">Count</TableHead>
              <TableHead className="py-3 ml-10">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.length > 0 ? (
              products.map((item: ItemType) => (
                <TableRow
                  key={item._id || item.product._id}
                  className="hover:bg-gray-50 transition"
                >
                  {/* الصورة + الاسم */}
                  <TableCell className="py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.product.imageCover}
                        alt={item.product.title}
                        className="w-50 h-50 object-cover rounded-md"
                      />
                      <h4 className="font-semibold text-gray-800">
                        {item.product.title}
                      </h4>
                    </div>
                  </TableCell>

                  {/* السعر */}
                  <TableCell className="py-4 text-gray-700 font-medium">
                    {item.price} LE
                  </TableCell>

                  {/* العدد */}
                  <TableCell className="py-4 text-gray-700">
                    {item.count}
                  </TableCell>
                  {/* الأزرار */}
                  <TableCell className="flex justify-center">
                    <div className="flex flex-col items-center gap-3">
                      {/* الكاونتر */}
                      <div className="flex items-center gap-2">
                        <ChangeCountBtn
                          isIncrement
                          id={item.product.id}
                          newCount={item.count + 1}
                        />
                        <Input
                          className="p-1 w-12 h-10 text-center"
                          value={item.count}
                          readOnly
                        />
                        <ChangeCountBtn
                          id={item.product.id}
                          newCount={item.count - 1}
                        />
                      </div>
                      <CartRemoveBtn id={item.product.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center py-6 text-gray-500"
                >
                  مفيش منتجات في العربية دلوقتي 🛒
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* ====== الإجمالي ====== */}
      <p className="mt-6 font-bold text-lg text-center">
        Total Price: <span className="text-green-700">{totalCartPrice} LE</span>
      </p>
    </div>
  );
}
