import Button from "../Elements/Button";
import CardProduct from "../Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/fashion-shoes-sneakers.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti at
          labore expedita mollitia! Ducimus quae et officiis maiores reiciendis
          quis, sit quibusdam expedita amet quam tempore obcaecati recusandae
          quasi ut.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000"></CardProduct.Footer>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/fashion-shoes-sneakers.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti at
          labore expedita mollitia! Ducimus quae et officiis maiores reiciendis
          quis, sit quibusdam expedita amet quam tempore obcaecati recusandae
          quasi ut.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000"></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};

export default ProductPage;
