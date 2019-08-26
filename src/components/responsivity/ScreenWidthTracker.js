import React from 'react';
import { fromEvent } from 'rxjs';

const ScreenWidthTracker = (Component) => 
    class extends React.Component {

        state = {
            width: window.innerWidth,
        }

        onWindowResize = ({target}) => {
            this.setState({width: target.innerWidth});
        }

        componentDidMount() {
            const o = fromEvent(window, 'resize');
            this._subscription = o.subscribe(this.onWindowResize);
        }

        componentWillUnmount() {
            this._subscription.unsubscribe();
        }

        render() {
            return <Component width={this.state.width} {...this.props}/>
        }

    }

export default ScreenWidthTracker;