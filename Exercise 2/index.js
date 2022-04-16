var slider_img = document.querySelector('.slideshow');
var images = ['nyc.jpg', 'lhr.jpg', 'maldives.jpg', 'paris.jpg', 'dxb.jpg'];
var i = 0;

function prev(){
	if(i < 1) i = 4;
	else
	{
		i--;
	}	
	
	return setImg();			 
}

function next(){
	if(i >= 4) i = 0;
	else
	{
		i++;
	}
	
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
}