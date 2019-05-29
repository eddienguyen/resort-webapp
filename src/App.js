import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import indexRoutes from 'routes';
import SingleRoom from 'pages/SingleRoom';
class App extends React.Component {

  componentWillReceiveProps(nextProps) {
    this.previousView = this.props.location;
  }

  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps: ', prevProps);
  }

  render() {

    const { location } = this.props;

    const isModal = location.state && location.state.to === "modal";
    const position = isModal ? location.state.meta.from : {};
    /// the trick is to have both routes display at the same time
    return (
      <>
        <Navbar />
        <div className="viewContainer">
          <Switch location={isModal ? this.previousView : location}>
            {indexRoutes.map((prop, key) => {
              return <Route exact={prop.exact && prop.exact} path={prop.path && prop.path} component={prop.component} key={key} />
            })}
          </Switch>
        </div>
        <div className="modalContainer" style={position}>
          {
            isModal && <Switch location={location}>
              <Route path="/rooms/:slug" component={SingleRoom} />
            </Switch>
          }

        </div>

      </>
    );
  }
}

/// 'withRouter' HOC injects 'history' to the props of its wrapped component. 
/// https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(App);
