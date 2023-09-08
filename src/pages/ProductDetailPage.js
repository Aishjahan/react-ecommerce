import ProductList from "../features/product-list/components/ProductList"
import Navbar from "../features/navbar/Navbar"
import ProductDetail from "../features/product-list/components/ProductDetail"

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