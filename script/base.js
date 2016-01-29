window.onload=function(){
	var $=function(id){
		return document.getElementById(id);
	};
	var el=$('screen'),
		equl=$('denghao'),
		mc=$('mc'),
		m_add=$('m_add'),
		m_jian=$('m_jian'),
		mr=$('mr'),
		memory=$('memory'),
		select=$('select');
	var els=document.getElementsByClassName('num');
	var ops=document.getElementsByClassName('oprator');
	
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
					// firstNumber=Number(this.innerHTML);
			}else{
				if(this.innerHTML=='.'&& secondNumber.indexOf('.')!=-1){
					return;}
				secondNumber +=this.innerHTML;
				el.innerHTML=secondNumber;
			}
		}
	}
	for(var i=0;i<ops.length;i++){
		ops[i].onclick=function(){
			yunsuanfu+=this.innerHTML;
			yunsuanfu=this.innerHTML.trim();
			this.style.cursor='pointer';
		};
	}
	equl.onclick=function(){
		this.style.boxShadow='0 0 10px #ccc inset';
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
			alert(1);
			el.innerHTML=Number(firstNumber)/Number(secondNumber);
		}
		firstNumber=el.innerHTML,secondNumber='',yunsuanfu='';
	};
	var ac=document.getElementById('ac')
	ac.onclick=function(){
		el.innerHTML=0;
		firstNumber='';
		secondNumber='';
		yunsuanfu='';
	};
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
		location.assign('./counter.html');
	};
	var da=document.getElementById('da');
	da.onmousedown = function(e){e.preventDefault();};



	
};