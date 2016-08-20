import React, { Component } from 'react';
import classNames from 'classnames';

class Alert extends Component {
  render() {
    let alertMarkup = null;
    let alertClasses = classNames(
      'c-fixed-alert',
      {'c-fixed-alert--error': this.props.alert && this.props.alert.type === 'error'}
    );

    if(this.props.alert) {
      alertMarkup = <div className={alertClasses}>{this.props.alert.message}</div>
    }

    return (this.props.alert) ? alertMarkup : null;
  }
}

export default Alert