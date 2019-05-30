import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollIntoView extends PureComponent {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
    }
    render() {
        return this.props.children;
    }
}

export default ScrollIntoView;
