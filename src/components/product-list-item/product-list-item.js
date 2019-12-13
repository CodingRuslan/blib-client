import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EditForm from "../edit-form";
import { connect } from "react-redux";
import { withBlibService } from "../hoc";
import { changeParentPage } from "../../actions";
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
    const { product, changeParentPage } = this.props;
    const { title, description, price, parent, fridge, stars } = product; // productId, libId,title,description, fridge, price,stars,parent, tag1,tag2, tag3

    return (
      <>
        <EditForm
          open={this.state.openEditWindow}
          handleClose={this.handleEditClose}
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
                {title}
              </Typography>
              <Typography>
                {description.length > 0 ? "Description: " + description : ""}
              </Typography>
              <Typography>
                {fridge.length > 0 ? "Fridge: " + fridge : ""}
              </Typography>
              <Typography>{!!price ? "Price: " + price : ""}</Typography>
              <Typography>{!!stars ? "Rate: " + stars : ""}</Typography>
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
  connect(mapStateToProps, { changeParentPage })
)(ProductListItem);
