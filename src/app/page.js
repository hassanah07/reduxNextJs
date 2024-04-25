import React from "react";
import Link from "next/link";
import MyButton from "@/components/MyButton";

const product = {
  id: "5CD4A8S6C48D5ZC",
  name: "product name",
  price: "₹5000",
  qty: 1
};

const page = () => {
  return (
    <div>
      <MyButton data={product} />
      <br />
      <Link href="/cart" className="text-indigo-400 underline">
        Cart
      </Link>
    </div>
  );
};

export default page;
