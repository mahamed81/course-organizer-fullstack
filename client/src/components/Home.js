import React, { Component } from 'react';
import './styles/Home.css';
import { Grid, Image, Card, Button, Icon,} from 'semantic-ui-react'
import slide1 from '../assets/MINN.jpg';
export default class Home extends Component { 
 render() {


 return (

   
<div>
  
<div class= "background-image">
<Image src={slide1} className="Background-image"/> 
</div>

<div class="Content">
<br>
</br>
<h2> We Are Called Auggies  </h2>
<p> 
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum rhoncus. 
Nulla pellentesque dignissim enim sit. Ultricies tristique nulla aliquet enim tortor at auctor urna. </p>
<p> Arcu risus quis varius quam quisque. Pulvinar elementum integer enim neque volutpat ac tincidunt. 
Sodales ut eu sem integer vitae justo eget. Eget egestas purus viverra accumsan. Donec pretium vulputate sapien nec. 
Ac tortor dignissim convallis aenean et tortor.</p>
<p> Amet venenatis urna cursus eget nunc scelerisque. Quis vel eros donec ac. 
  Nunc vel risus commodo viverra maecenas accumsan lacus. Auctor elit sed vulputate mi sit. 
  Nunc id cursus metus aliquam eleifend mi. Sociis natoque penatibus et magnis dis parturient. Ac felis donec et odio pellentesque diam. 
  Eget nunc lobortis mattis aliquam faucibus purus in. At consectetur lorem donec massa sapien. Quis vel eros donec ac odio tempor orci. 
  Pellentesque id nibh tortor id. Tempor orci dapibus ultrices in iaculis nunc sed augue. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. 
  Libero id faucibus nisl tincidunt eget. 
  Mattis rhoncus urna neque viverra justo.</p>
<p> Ac placerat vestibulum lectus mauris ultrices eros in. Massa ultricies mi quis hendrerit dolor magna eget est lorem. 
Congue eu consequat ac felis donec et odio pellentesque. Vivamus at augue eget arcu. 
Vestibulum lectus mauris ultrices eros. 
Pellentesque habitant morbi tristique senectus et. 
Id interdum velit laoreet id. Tortor at risus viverra adipiscing at in tellus. 
Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Consequat interdum varius sit amet. 
Nisl rhoncus mattis rhoncus urna neque viverra justo. Lectus quam id leo in vitae turpis massa sed elementum. 
Congue eu consequat ac felis donec. Eu volutpat odio facilisis mauris sit.</p>
</p>
</div>


<div class="wrapper">
    <ul class="img-grid">
    <li>
      <a href="#" class="overlay-container" data-overlay-text="Undergrad Programs">
        <img src="https://trungk18.github.io/img/image-grid/img-beatles.jpg" alt="Courses" class="overlay-img" />
      </a>
    </li>
    <li>
      <a href="#" class="overlay-container" data-overlay-text="Graduate Programs">
        <img src="https://trungk18.github.io/img/image-grid/img-bonsai.jpg" alt="Transcript" class="overlay-img" />
   
      </a>
    </li>
    <li>
      <a href="#" class="overlay-container" data-overlay-text="Transfer Students">
        <img src="https://trungk18.github.io/img/image-grid/img-bottles.jpg" alt="Image capture goes here 03" class="overlay-img" />
      </a>
    </li>
    <li>
      <a href="#" class="overlay-container" data-overlay-text="Admissions">
        <img src="https://trungk18.github.io/img/image-grid/img-brunch.jpg" alt="Image capture goes here 04" class="overlay-img" />
      </a>
    </li>
    <li>
      <a href="#" class="overlay-container" data-overlay-text="Student s">
        <img src="https://trungk18.github.io/img/image-grid/img-ceramics.jpg" alt="Image capture goes here 05" class="overlay-img" />
      </a>
    </li>
    </ul>
</div>

<section>
  <h1>Classy Footer</h1>
  <h3>Hover over the circle below</h3>
</section>
<div class="footer">
  <div id="button"></div>
<div id="container">
<div id="cont">
<div class="footer_center">
	   <h3>Augsburg University</h3>
</div>
</div>
</div>
</div>








</div>





        );
    }
}
