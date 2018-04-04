/**
 * RichText Component for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';

class RichText extends React.Component {

  static defaultProps = {
    content: '',
  };

  static propTypes = {
    content: React.PropTypes.string,
  };

  static displayName = 'RichText';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { content } = this.props;
    return (
      <div>
        <div
          className={'mce-content-body'}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    );
  }
}

export default RichText;

