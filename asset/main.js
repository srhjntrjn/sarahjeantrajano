var slider_content=document.getElementById('boxinsta');
var imagearray = ['malamawi','cotabato','tagaytay','zambocity'];
var i = imagearray.length;

function nextimage(){
  alert("hahshd");
  if (i<imagearray.length){
    i=i+1;
  }
  else{
    i=1;
  }
  // imageloc="../images/blog/".imagearray[i-1];
  // slider_content.innerHTML = "<img src="+ imageloc+".png>";
  slider_content.innerHTML = "<img src='../images/blog/"+ imagearray[i-1] +".png'>";

}