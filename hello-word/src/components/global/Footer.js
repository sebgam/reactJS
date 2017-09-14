import React, { Component } from 'react';
import PropTypes from 'prop-types';

//assets
import './css/Footer.css';

class Footer extends Component {
	static propTypes = {
      copyright: PropTypes.string
     
  };
  render() {
  	 const {copyright = "CopyRight 2017 Desarrollo G" } = this.props;
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{ __html: copyright }} />
      </div>
    );
  }
}

export default Footer;