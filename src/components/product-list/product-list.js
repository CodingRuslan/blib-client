import React, { Component } from "react";
import ProductListItem from "../product-list-item";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { withBlibService } from "../hoc";
import {
  fetchProducts,
  changeParentPage,
  addProductToLib
} from "../../actions";
import { compose } from "redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./product-list.css";

class ProductList extends Component {
  state = {
    currentPage: "",
    prevPage: ""
  };

  componentDidMount() {
    const {
      fetchProducts,
      currentParentPage,
      changeParentPage,
      libId
    } = this.props;
    fetchProducts(libId);
    changeParentPage("main");
    this.setState({
      currentPage: currentParentPage
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentParentPage } = this.props;
    if (prevProps !== this.props) {
      this.setState({
        currentPage: currentParentPage,
        prevPage: prevProps.currentParentPage
      });
    }
  }

  render() {
    const {
      products,
      libId,
      loading,
      error,
      changeParentPage,
      currentParentPage
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <>
        <Button
          className="btn-back"
          style={{ position: "absolute" }}
          onClick={() => changeParentPage(this.state.prevPage)}
        >
          Back
        </Button>

        <Container className="cardGrid" maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Tooltip
                title="Add"
                aria-label="add"
                style={{ margin: "116px" }}
                onClick={() => {
                  addProductToLib(libId, currentParentPage);
                }}
              >
                <Fab color="primary">
                  <AddIcon />
                </Fab>
              </Tooltip>
            </Grid>
            {products
              .filter(product => {
                if (product.parent === this.state.currentPage) {
                  return product;
                }
              })
              .map(product => (
                <ProductListItem key={product.productId} product={product} />
              ))}
          </Grid>
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({
  products,
  loading,
  currentParentPage,
  libId,
  error
}) => ({
  products,
  libId,
  loading,
  currentParentPage,
  error
});

export default compose(
  withBlibService(),
  connect(mapStateToProps, { fetchProducts, changeParentPage, addProductToLib })
)(ProductList);
