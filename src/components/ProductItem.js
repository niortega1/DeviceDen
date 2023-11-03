
const ProductItem = ({ product }) => {
    return (
        <div>
                <div className='product-item-div'>
                    <img src={product.image} alt={product.name} width="100"/>
                    <div>{product.name}</div>
                    <div>${product.price}</div>
                </div>
        </div>
    );
};

export default ProductItem;