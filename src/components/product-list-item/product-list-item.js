import React, { Fragment } from "react";
import "./product-list-item.css";

const ProductListItem = props => {
  const { product } = props;
  const { title, shortDiscription, stars } = product;

  return (
    <Fragment>
      <span>{title}</span>
      <span>{shortDiscription}</span>
      <span>{stars}</span>
    </Fragment>
  );
};

export default ProductListItem;
