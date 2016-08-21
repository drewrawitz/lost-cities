import React, { Component } from 'react';
import classNames from 'classnames';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Alert extends Component {
  render() {
    let alertMarkup = null;
    let alertClasses = classNames(
      'c-fixed-alert',
      {'c-fixed-alert--error': this.props.alert && this.props.alert.type === 'error'}
    );

    if(this.props.alert) {
      alertMarkup = (
        <ReactCSSTransitionGroup transitionName="transition--fade" transitionAppear={true} transitionEnterTimeout={300} transitionLeaveTimeout={300} transitionAppearTimeout={300}>
          <div className={alertClasses}>{this.props.alert.message}</div>
        </ReactCSSTransitionGroup>
      )
    }

    return (this.props.alert) ? alertMarkup : null
  }
}

export default Alert