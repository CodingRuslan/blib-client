import React, { Component } from "react";

import { withBlibService } from "../hoc";
import { fetchFrige, removeProductFromFrigeDispatch } from "../../actions";
import { connect } from "react-redux";
import { compose } from "redux";

import RecipeListItem from "../recipe-list-item";

import "./recipes-list.css";

class RecipesList extends Component {
  // state = {
  //     componentShouldUpdate: false
  // };
  //
  // componentDidMount() {
  //     const { fetchFrige, libId } = this.props;
  //     fetchFrige(libId);
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //     const { fetchFrige, libId } = this.props;
  //
  //     if (this.state.componentShouldUpdate) {
  //         this.setState({ componentShouldUpdate: false });
  //         let timerId = setInterval(() => fetchFrige(libId), 1000);
  //
  //         setTimeout(() => {
  //             clearInterval(timerId);
  //         }, 1100);
  //     }
  // }

  render() {
    const { frige, removeProductFromFrigeDispatch } = this.props;
    return (
      <div className="root" style={{ marginBottom: "400px" }}>
        <RecipeListItem />
      </div>
    );
  }
}

const mapStateToProps = ({ frige, loading, libId, error }) => ({
  frige,
  loading,
  libId,
  error
});

// export default compose(
//   withBlibService(),
//   connect(mapStateToProps, { fetchFrige, removeProductFromFrigeDispatch })
// )(RecipesList);

export default RecipesList;
