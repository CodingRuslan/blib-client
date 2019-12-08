import React, { Component } from "react";
import ProductListItem from "../product-list-item";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
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
      <Container className="cardGrid" maxWidth="md">
        <Grid container spacing={4}>
          {products.map(product => (
            <ProductListItem key={product.productId} product={product} />
          ))}
        </Grid>
      </Container>
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
