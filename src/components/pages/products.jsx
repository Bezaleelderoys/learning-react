import Button from "../Elements/Button";
import CardProduct from "../Fragments/CardProduct";

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

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image}></CardProduct.Header>
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price}></CardProduct.Footer>
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
