function toggleMenu() {
  var bar = document.getElementById('bar');
  var img1 = document.getElementById('myImage1');
  var img2 = document.getElementById('myImage2');
  var img3 = document.getElementById('myImage3');
  var menuItems = document.getElementById('menuItems');
  if (menuItems.style.display === 'flex') {
      menuItems.style.display = 'none';
       bar.style.display = 'block'
       img1.style.display = 'block'
       img2.style.display = 'block'
       img3.style.display = 'block'
       
  } else {
      menuItems.style.display = 'flex';
      menuItems.style.margin = 0;
      bar.style.display = 'none'
     
      img1.style.display = 'none'
      img2.style.display = 'none'
      img3.style.display = 'none'
  }
}

