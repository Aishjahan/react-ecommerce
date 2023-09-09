import ProductList from "../features/product/components/ProductList"
import Navbar from "../features/navbar/Navbar"
import ProductDetail from "../features/product/components/ProductDetail"

const ProductDetailPage = () => {
  return (
    <div>
        <Navbar>
            <ProductDetail></ProductDetail>
        </Navbar>
    </div>
  )
}

export default ProductDetailPage;