import React from 'react'
import PropTypes from 'prop-types'


export default function(props){
    return(
        <section>
<h2>Responsive Image Gallery</h2>

<h4>Resize the browser window to see the effect.</h4>

<div className="responsive">
  <div className="gallery">
    <a>
      <img src="https://meragor.com/files/styles//ava_800_800_wm/avatar-227813-078897.png" alt="Cinque Terre" width="600" height="400"/>
    </a>
    <div className="desc">{props.img_desc}</div>
  </div>
</div>


<div className="responsive">
  <div className="gallery">
    <a>
      <img src="https://meragor.com/files/styles//220_220_bottom_left_wm/avatar-219240-069309.png" alt="Forest" width="600" height="400"/>
    </a>
    <div className="desc">{props.img_desc}</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a>
      <img src="https://meragor.com/files/styles//220_220_bottom_left_wm/ava-85.jpg" alt="Northern Lights"/>
    </a>
    <div className="desc">{props.img_desc}</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a>
      <img src="https://meragor.com/files/styles//220_220_bottom_left_wm/ava-27.jpg" alt="Mountains"/>
    </a>
    <div className="desc">{props.img_desc}</div>
  </div>
</div>

<div className="clearfix"></div>

<div paddig="6px">
  <p>{props.info}</p>
</div>
</section>

);
}
