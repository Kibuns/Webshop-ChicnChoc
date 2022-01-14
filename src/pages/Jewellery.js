import React from "react";
import ProductComponent from "../components/ProductComponent";
import UserComponent from "../components/ProductComponent";
import FetchJewellery from "../components/FetchJewellery";

const expectedProps = {
  description: "",
  id: 1,
  image: "https://www.kroger.com/product/images/xlarge/front/0000000004011",
  name: "Banana",
  price: 10,
  stock: 100,
  type: "Food",
};

const Jewellery = () => {
  return (
    <div>
      <FetchJewellery />
    </div>
  );
};

export default Jewellery;
