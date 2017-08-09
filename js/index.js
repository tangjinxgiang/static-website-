//头部搜索框
var p = document.querySelector('.Search_t_l p')
var txt = document.querySelector('.Search_t_l p i');
var a = document.querySelector('.Search_t_l p a');
var thtml = txt.innerHTML;
var ahtml = a.innerHTML;
var off = true;
txt.onmouseover = function(){
	a.style.display = 'block';
}

a.onmouseout = function(){
	this.style.display = 'none';
	
}
a.onclick = function(){
	if(off){
		txt.innerHTML = ahtml;
		a.innerHTML = thtml;
		off = false;
	} else{
		a.innerHTML = ahtml;
		txt.innerHTML = thtml;
		off = true;
	}
	
	
}
//轮播图
var btn = document.querySelectorAll('.radius a');
var Img = document.querySelectorAll('.Option_mid_bottom ul li img');
var num = 0;
var timer = null;

for(var i = 0; i < btn.length; i++) {

	btn[i].index = i;
	
	clearInterval(timer);
	btn[i].onmouseover = function() {
		num = this.index;//把索引赋值给定时器用的变量 统一循序
		clearInterval(timer);
		//先清空颜色
		for(var j = 0; j < btn.length; j++) {
			btn[j].style.background = 'rgba(0,0,0,0.5)';
			Img[j].style.display = 'none';
		}
		//在给当前的添加
		this.style.background = '#ff3300';
		Img[this.index].style.display = 'block';
		//this.style.transition = 'all 1s';

	}
	//鼠标移出小圆点
	btn[i].onmouseout = function() {
		clearInterval(timer);
		move();	
	}
}
move();
function move() {
	timer = setInterval(function() {
		num++;
		if(num == 4) {
			num = 0;
		}
		for(var j = 0; j < btn.length; j++) {
			btn[j].style.background = 'rgba(0,0,0,0.5)';
			Img[j].style.display = 'none';
		}
		Img[num].style.display = 'block';
		btn[num].style.background = '#ff3300';
	}, 3000)
}

//小图队列
var Small = document.querySelector('.Small');
var ul = Small.querySelector('ul');
var btn1 = document.querySelector('.Small>span:nth-of-type(1)');
var btn2 = document.querySelector('.Small>span:nth-of-type(2)');
var left = ul.offsetLeft;
var timer = null;
var distance = ul.offsetWidth - Small.offsetWidth;
a//lert(distance)
	btn1.onmousedown = function(){
	timer = setInterval(function(){
			left--;
			if(left == -distance){
				clearInterval(timer)
			}
			ul.style.left = left + 'px';
		},20)
	}
	btn1.onmouseup = function(){
		clearInterval(timer)
	}
	
	btn2.onmousedown = function(){
	timer = setInterval(function(){
			if(left >= 0){
				left = 0;
				clearInterval(timer)
			}
			console.log(left)
			left++;
			ul.style.left = left + 'px';
		},20)
	}
	btn2.onmouseup = function(){
		clearInterval(timer)
	}















