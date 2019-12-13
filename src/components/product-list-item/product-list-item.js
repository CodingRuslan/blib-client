import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";
import EditForm from "../edit-form";
import { connect } from "react-redux";
import { withBlibService } from "../hoc";
import {
  changeParentPage,
  fetchProducts,
  removeProductFromLib
} from "../../actions";
import { compose } from "redux";
import "./product-list-item.css";

class ProductListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openEditWindow: false
    };
  }

  handleEditOpen = () => {
    this.setState({
      ...this.state,
      openEditWindow: true
    });
  };

  handleEditClose = () => {
    this.setState({
      openEditWindow: false
    });
  };

  render() {
    const { product, changeParentPage, removeProductFromLib } = this.props;
    const {
      title,
      description,
      price,
      fridge,
      stars,
      productid,
      libid
    } = product; // productId, libId,title,description, fridge, price,stars,parent, tag1,tag2, tag3

    return (
      <>
        <EditForm
          open={this.state.openEditWindow}
          handleClose={this.handleEditClose}
          product={product}
        />
        <Grid item xs={12} sm={6} md={4}>
          <Card className="card">
            <CardMedia
              className="cardMedia"
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent className="cardContent">
              <Typography gutterBottom variant="h5" component="h2">
                {!!title ? title : ""}
              </Typography>
              {!!stars ? (
                <Box borderColor="transparent">
                  <Rating name="read-only" value={stars} readOnly />
                </Box>
              ) : (
                ""
              )}
              <Typography>
                {!!description ? "Description: " + description : ""}
              </Typography>
              <Typography>{!!fridge ? "Fridge: " + fridge : ""}</Typography>
              <Typography>{!!price ? "Price: " + price : ""}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => changeParentPage(title)}
              >
                View
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={this.handleEditOpen}
              >
                Edit
              </Button>
              <IconButton
                aria-label="delete"
                className="btn-delete"
                size="small"
                style={{ marginLeft: "35%" }}
                onClick={() => removeProductFromLib(productid, libid)}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = ({ currentParentPage }) => ({
  currentParentPage
});

export default compose(
  withBlibService(),
  connect(mapStateToProps, {
    changeParentPage,
    removeProductFromLib
  })
)(ProductListItem);
