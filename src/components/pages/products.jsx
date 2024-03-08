import { Fragment } from "react";
import Button from "../Elements/Button";
import CardProduct from "../Fragments/CardProduct";
import Counter from "../Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu baru",
    price: "Rp 1.000.000",
    image: "/images/fashion-shoes-sneakers.jpg",
    description: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti at
    labore expedita mollitia! Ducimus quae et officiis maiores reiciendis
    quis, sit quibusdam expedita amet quam tempore obcaecati recusandae
    quasi ut.`,
  },
  {
    id: 2,
    name: "Sepatu lama",
    price: "Rp 500.000",
    image: "/images/fashion-shoes-sneakers.jpg",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu tetangga",
    price: "Rp 2.000.000",
    image: "/images/fashion-shoes-sneakers.jpg",
    description: `Ini adalah sepatu baru dari brand tetangga`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button variant="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
      <div className="flex w-100 justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductPage;
