import React, { Component } from 'react';
import { connect } from 'react-redux';
import simpleAction, { VisibilityFilters } from '../../Actions/commonActions';
import Layout from '../layout'
import "./app.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  simpleAction = (event) => {
    this.props.simpleAction()
  }
  render() {
    return (

     <Layout/>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
