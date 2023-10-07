import cake1 from "../../asset/cake1.png";
import cake2 from "../../asset/cake2.png";
import cake3 from "../../asset/cake3.png";
import cake4 from "../../asset/cake4.png";
import "./home.css"

const Home = () => {
    const productData = [
        {
            name: "product1",
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
            price: 6,
            photoName: cake1,
            soldOut: false,
        },
        {
            name: "product2",
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
            price: 6,
            photoName: cake2,
            soldOut: false,
        },
        {
            name: "product3",
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
            price: 6,
            photoName: cake3,
            soldOut: false,
        },
        {
            name: "product4",
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
            price: 6,
            photoName: cake4,
            soldOut: false,
        },
    ]

    const numProduct = productData.length;
    function Product({ productObj }) {
        console.log(productObj)
        return (
          <div className="product">
            <img src={productObj.photoName} alt={productObj.name}/>
            <div>
              <h3>{productObj.name}</h3>
              <p>{productObj.descriptions}</p>
              <span>{productObj.soldOut ? "SOLD OUT" : productObj.price}</span>
            </div>
          </div>
        );
      }
    return (
        
        <main className="menu">
            <h2>Our menu</h2>
            {numProduct > 0 ? (
                <>
                <p>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                </p>
                <ul className="products">
                    {productData.map((product) => (
                    <Product productObj={product} key={product.name} />
                    ))}
                </ul>
                </>
            ) : (
                <p>We're still working on our menu. Please come back later :)</p>
            )}
        </main>
       
    )

}

export default Home;