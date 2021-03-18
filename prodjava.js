function show() {
   document.getElementById('displayImage').src='./images/sport1.jfif';
   var h = document.createElement("H1");
  var t = document.createTextNode("Hello World");
  h.appendChild(t);
  document.body.appendChild(h);
}
   
 document.getElementsByClassName("displayImage").width = "500";
 
//  HTMLElement.prototype.centre = function() {
//   var w = document.documentElement.clientWidth,
//       h = document.documentElement.clientHeight;
//   this.style.position = 'absolute';
//   this.style.left = (w - this.offsetWidth)/2 + 'px';
//   this.style.top = (h - this.offsetHeight)/2 +
//                    window.pageYOffset + 'px';
// }

//  var img = new Image(),  
//  body = document.getElementsByClassName("botex")[0];
// img.src = './images/sport1.jfif';

// img.onload = function(){
//   this.centre();
// }
// body.appendChild(img);

