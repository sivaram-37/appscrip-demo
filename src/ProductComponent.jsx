import React, { useState } from "react";
import image1 from "./images/ProductImages/img1.png";
import image2 from "./images/ProductImages/img2.png";
import image3 from "./images/ProductImages/img3.png";
import image4 from "./images/ProductImages/img4.png";
import image5 from "./images/ProductImages/img5.png";
import image6 from "./images/ProductImages/img6.png";
import image7 from "./images/ProductImages/img7.png";
import image8 from "./images/ProductImages/img8.png";
import image9 from "./images/ProductImages/img9.png";
import image10 from "./images/ProductImages/img10.png";
import image11 from "./images/ProductImages/img11.png";
import image12 from "./images/ProductImages/img12.png";
import image13 from "./images/ProductImages/img13.png";
import image14 from "./images/ProductImages/img14.png";
import image15 from "./images/ProductImages/img15.png";
import image16 from "./images/ProductImages/img16.png";
import image17 from "./images/ProductImages/img17.png";
import image18 from "./images/ProductImages/img18.png";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function ProductComponent() {
  const [likedProducts, setLikedProducts] = useState([]);

  const products = [
    {
      id: 1,
      src: image1,
      alt: "Image 1",
      name: "PPXOC Milkyway dress in pressed flowers",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },

    {
      id: 3,
      src: image3,
      alt: "Image 3",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 4,
      src: image4,
      alt: "Image 4",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 5,
      src: image5,
      alt: "Image 5",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 6,
      src: image6,
      alt: "Image 2",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 7,
      src: image7,
      alt: "Image 1",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 8,
      src: image8,
      alt: "Image 2",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 9,
      src: image9,
      alt: "Image 1",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 10,
      src: image10,
      alt: "Image 2",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 11,
      src: image11,
      alt: "Image 1",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 12,
      src: image12,
      alt: "Image 2",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 13,
      src: image13,
      alt: "Image 1",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 14,
      src: image14,
      alt: "Image 2",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 15,
      src: image15,
      alt: "Image15",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 16,
      src: image16,
      alt: "Image 1",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 17,
      src: image17,
      alt: "Image 2",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
    {
      id: 18,
      src: image18,
      alt: "Image15",
      name: "Product Name",
      description: "Sign in or Create an account to see pricing",
    },
  ];

  const handleLikeToggle = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  const isLiked = (productId) => likedProducts.includes(productId);

  return (
    <div className="image-grid">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.src} alt={product.alt} />
          <p className="product-name">{product.name}</p>
          <div className="desc-like">
            <p className="product-desc">{product.description}</p>
            {isLiked(product.id) ? (
              <FaHeart
                className="like"
                onClick={() => handleLikeToggle(product.id)}
                style={{ color: "red" }}
              />
            ) : (
              <FaRegHeart
                className="like"
                onClick={() => handleLikeToggle(product.id)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductComponent;
