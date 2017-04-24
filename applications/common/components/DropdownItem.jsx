import React from 'react';
import { Link } from 'preact-router/match';


const DropdownItem = ({ title }) => (
  <li className="COMMON__dropdown-item">
    <Link
      href={`/project/${title}`}
      className="COMMON__dropdown-link"
      activeClassName="active"
    >
      {title}
    </Link>
  </li>
);

DropdownItem.propTypes = {
  title: React.PropTypes.string,
};
DropdownItem.defaultProps = {
  title: '',
};


export default DropdownItem;
