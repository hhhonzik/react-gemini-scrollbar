
import React, { Component } from 'react';
import Gemini from 'gemini-scrollbar';

export default class GeminiScrollbar extends Component {
  static propTypes = {
    autoshow: React.PropTypes.bool,
    forceGemini: React.PropTypes.bool
  };

  static childContextTypes = {
    geminiScrollbar: React.PropTypes.object
  };

  getDefaultProps() {
    return {
      autoshow: false,
      forceGemini: false
    };
  }

  getChildContext() {
    return {
      geminiScrollbar: {
        get: () => this.scrollbar
      }
    };
  }

  /**
   * Holds the reference to the GeminiScrollbar instance.
   * @property scrollbar <public> [Object]
   */
  scrollbar = null;

  componentDidMount() {
    this.scrollbar = new Gemini({
      element: this.refs.container,
      autoshow: this.props.autoshow,
      forceGemini: this.props.forceGemini,
      createElements: false
    }).create();
  }

  componentDidUpdate() {
    this.scrollbar.update();
  }

  componentWillUnmount() {
    if (this.scrollbar) {
      this.scrollbar.destroy();
    }
    this.scrollbar = null;
  }

  render() {
    const {
      className,
      children,
      autoshow,
      forceGemini,
      ...other
    } = this.props;

    let classes = '';

    if (className) {
      classes += ` ${className}`;
    }

    return (
      <div className={classes} ref="container" {...other} >
        <div className="gm-scrollbar -vertical">
          <div className="thumb"></div>
        </div>
        <div className="gm-scrollbar -horizontal">
          <div className="thumb"></div>
        </div>
        <div className="gm-scroll-view" ref="scroll-view">
          {children}
        </div>
      </div>
    );
  }
}

