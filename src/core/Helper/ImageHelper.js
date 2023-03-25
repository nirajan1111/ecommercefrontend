import React from "react";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? product.image
    : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrc5zCB11kjMxF3ZbxRD3zGKbQKqYvzmeX_g&usqp=CAU`;
  return (
    <div className="rounded border border-success">
      <img
        src={imageurl}
        style={{
          maxHeight: "60%",
          maxWidth: "100%",
        }}
        className="mb-3 rounded"
      />
    </div>
  );
};
export default ImageHelper;
