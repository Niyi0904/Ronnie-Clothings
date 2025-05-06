import React from 'react';
import { Link} from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({name, image, size, slug}) => {

  return (
    <Link to={`/shop/${slug}`} className={`${size} menu-item rounded-xl`}>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${image})`
          }}
        />
        <div className='content rounded-xl'>
          <h1 className='title'>{name.toUpperCase()}</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
    </Link>
)};

export default MenuItem;
