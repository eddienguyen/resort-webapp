import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition as OriginalCSSTransition } from 'react-transition-group';
import ScrollIntoView from 'components/ScrollIntoView';
import Navbar from 'components/Navbar/Navbar';
import indexRoutes from 'routes';
import SingleRoom from 'pages/SingleRoom';
import { RoomContext } from 'context';

class CSSTransition extends OriginalCSSTransition {
  // onEntered = () => {
  //   // ignore default behaviour
  // }
}

class App extends React.Component {

  static contextType = RoomContext;

  componentWillReceiveProps(nextProps) {
    this.previousView = this.props.location;
  }

  componentDidMount() {
    const firstHistory = this.props.history;
    const { handleHistoryChange } = this.context;

    if (firstHistory) handleHistoryChange(firstHistory);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('prevProps: ', prevProps);
  // }

  render() {

    const { location } = this.props;

    const isModal = location.state && location.state.to === "modal";
    const position = isModal ? location.state.meta.from : {};
    /// the trick is to have both routes display at the same time
    return (
      <>
        <Navbar />
        <div className="viewContainer">
          <ScrollIntoView location={location}>
            <Switch location={isModal ? this.previousView : location}>
              {indexRoutes.map((prop, key) => {
                return <Route
                  exact={prop.exact && prop.exact}
                  path={prop.path && prop.path}
                  component={prop.component}
                  key={key}
                />
              })}
            </Switch>
          </ScrollIntoView>
        </div>
        <TransitionGroup>
          <CSSTransition
            classNames="modalContainer"
            timeout={400}
            key={location.pathname}
            appear={true}
            mountOnEnter={true}
          >
            <div className="modalContainer" style={position}>
              {
                isModal && <Switch location={location}>
                  <Route path="/rooms/:slug" component={(props) => <SingleRoom shouldShowVisual={false} {...props} />} />
                </Switch>
              }
            </div>
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  }
}

/// 'withRouter' HOC injects 'history' to the props of its wrapped component. 
/// https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(App);
