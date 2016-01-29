window.onload=function(){
	var $=function(id){
		return document.getElementById(id);
	};
	var el=$('screen'),
		equl=$('item-b'),
		ac=$('ac'),
		zh=$('zf'),
		mc=$('mc'),
		m_add=$('m_add'),
		m_jian=$('m_jian'),
		mr=$('mr'),
		memory=$('memory'),
		select=$('select');
	var els=document.getElementsByClassName('num');
	var ops=document.getElementsByClassName('text');
	var sqrt=document.getElementsByClassName('sqrt');

	var firstNumber='',secondNumber='';
	var yunsuanfu='';
	for(var i=0;i<els.length;i++){
		els[i].onclick=function(){
			if(yunsuanfu==''){
				if(this.innerHTML=='.'&& firstNumber.indexOf('.')!=-1){
					return;
				}
					firstNumber +=this.innerHTML;
					el.innerHTML=firstNumber;
			}else{
				if(this.innerHTML=='.'&& secondNumber.indexOf('.')!=-1){
					return;
				}
				secondNumber +=this.innerHTML;
				el.innerHTML=secondNumber;
			}
		}
	}
	for(var i=0;i<ops.length;i++){
		ops[i].onclick=function(){
			yunsuanfu=this.innerHTML.trim();
			this.style.cursor='pointer';
		};
	}
	equl.onclick=function(){
		// this.style.boxShadow='0 0 10px #ccc inset';
		if(yunsuanfu=='+'){
			el.innerHTML=Number(firstNumber)+Number(secondNumber);
		}
		if(yunsuanfu=='-'){
			el.innerHTML=Number(firstNumber)-Number(secondNumber);
		}
		if(yunsuanfu=='*'){
			el.innerHTML=Number(firstNumber)*Number(secondNumber);
		}
		if(yunsuanfu=='/'){
			el.innerHTML=Number(firstNumber)/Number(secondNumber);
		}
		if(yunsuanfu=='%'){
			el.innerHTML=Number(firstNumber)%Number(secondNumber);
		}
		if(yunsuanfu=='xⁿ'){
			el.innerHTML=Math.pow(Number(firstNumber),Number(secondNumber));
		}
		if(yunsuanfu=='x√'){
			el.innerHTML=Math.sprt(Number(firstNumber),Number(secondNumber));
		}
		firstNumber=el.innerHTML,secondNumber='',yunsuanfu='';
	};
	// AC清零
	ac.onclick=function(){
		el.innerHTML=0;
		firstNumber='';
		secondNumber='';
		yunsuanfu='';
	};
	// 正负交互
	kaiguan=true;
	zf.onclick=function(){
		if(kaiguan){
			el.innerHTML=-el.innerHTML;kaiguan=false;
		}else{
			el.innerHTML=Math.abs(el.innerHTML);kaiguan=true;
		}
	}
	// x﹣¹  x²  x³	
	for(var i=0;i<sqrt.length;i++){
		sqrt[i].onclick=function(){
			if(this.innerHTML=='x﹣¹'){el.innerHTML=1/Number(firstNumber);}
			if(this.innerHTML=='x²'){el.innerHTML=Math.pow(Number(firstNumber),2);}
			if(this.innerHTML=='x³'){el.innerHTML=Math.pow(Number(firstNumber),3);}
			if(this.innerHTML=='x!'){
				var jieguo=1;
				for(var i=1;i<=Number(firstNumber);i++){jieguo*=i;	}el.innerHTML=jieguo;}
			if(this.innerHTML=='sin'){el.innerHTML=Math.sin(Number(firstNumber));}
			if(this.innerHTML=='cos'){el.innerHTML=Math.cos(Number(firstNumber));}
			if(this.innerHTML=='tan'){el.innerHTML=Math.tan(Number(firstNumber));}
			if(this.innerHTML=='sinh'){el.innerHTML=Math.sinh(Number(firstNumber));}
			if(this.innerHTML=='cosh'){el.innerHTML=Math.sinh(Number(firstNumber));}
			if(this.innerHTML=='tanh'){el.innerHTML=Math.sinh(Number(firstNumber));}
			if(this.innerHTML=='eⁿ'){el.innerHTML=Math.pow(Math.E,Number(firstNumber));}
			if(this.innerHTML=='π'){el.innerHTML=Math.PI;}
			if(this.innerHTML=='EE'){el.innerHTML=Math.E;}
			firstNumber='';
		}
	}
//mc m+ m- mr
var cun='',cun_j='';  
	m_add.onclick=function(){
		if(!cun){
			memory.innerHTML='M';
			cun=el.innerHTML;
		}else{
			cun_j=Number(cun)+Number(el.innerHTML);
			if(String(cun_j).length>23){
				cun_j=Number(cun_j);
				el.innerHTML=cun_j.toExponential(20);
			}
			el.innerHTML=cun_j;
		}
	};
	m_jian.onclick=function(){
		if(!cun){
			memory.innerHTML='M';
			cun=el.innerHTML;
		}else{
			cun_j=Number(cun)-Number(el.innerHTML);
			el.innerHTML=cun_j;
		}
	};
	mc.onclick=function(){
		memory.innerHTML='';
		cun='';
	};
	mr.onclick=function(){
		el.innerHTML=cun;
	};
	select.onclick=function(){
		location.assign('./index.html');
	};
	var da=document.getElementById('da');
	da.onmousedown = function(e){e.preventDefault();};












};