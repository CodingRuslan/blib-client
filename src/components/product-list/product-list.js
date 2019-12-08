import React, { Component } from "react";
import ProductListItem from "../product-list-item";
import { connect } from "react-redux";

import { withBlibService } from "../hoc";
import { fetchProducts } from "../../actions";
import { compose } from "redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./product-list.css";

class ProductList extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { products, loading, error } = this.props;
    console.log(products);

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <ul style={{ minHeight: "550px" }}>
        {products.map(product => {
          return (
            <li key={product.productId}>
              <ProductListItem product={product} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ products, loading, error }) => ({
  products,
  loading,
  error
});

export default compose(
  withBlibService(),
  connect(mapStateToProps, { fetchProducts })
)(ProductList);
