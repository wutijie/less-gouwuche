window.onload=function(){
	var allchose=document.querySelector(".sec_one .dv1 input");
	var allchose_last=document.querySelector(".sec_fiv .dv1 input");
	var allchose_two_dv1=document.querySelector(".sec_two .dv1 input");
	var allchose_two_dv2=document.querySelector(".sec_two .dv2 input");
	var allchose_two_dv3=document.querySelector(".sec_thr .dv1 input");
	var allchose_two_dv4=document.querySelectorAll(".sec_thr .dv2 input[type=checkbox]");
	var inputs=document.querySelectorAll("input[type=checkbox]");
	console.log(allchose_two_dv3)
	console.log(allchose_two_dv4)
	var bacs=document.querySelectorAll(".ddvv2");
	//整体全选
	allchose.onclick=function(){
		for(var i=1;i<inputs.length;i++){
			inputs[i].checked=allchose.checked;
		}
		all_bac(this);
	}
	allchose_last.onclick=function(){
		for(var i=0;i<inputs.length-1;i++){
			inputs[i].checked=allchose_last.checked;
		}
		all_bac(this);
	}
	
	
	function all_bac(This){
		if(This.checked){
			for(var j=0;j<bacs.length;j++){
				bacs[j].style.background="#fff4e8";
			}
		}else{
			for(var j=0;j<bacs.length;j++){
				bacs[j].style.background="#fff";
			}
		}
	}
	
	
	//单个全选
	dan_allcho();
	function dan_allcho(){
		allchose_two_dv1.onclick=function(){
			allchose_two_dv2.checked=this.checked;
			nobac(this)
			allcho();
		}
		allchose_two_dv2.onclick=function(){
			allchose_two_dv1.checked=this.checked;
			bac(this);
			allcho();
		}
	}
	
	function nobac(This){
		if(This.checked){
			var backd=inputs[2].parentNode.parentNode;
			backd.style.background="#fff4e8";
		}else{
			var backd=inputs[2].parentNode.parentNode;
			backd.style.background="#fff";
		}
	}
	
	function bac(This){
		if(This.checked){
			var backd=This.parentNode.parentNode;
			backd.style.background="#fff4e8";
		}else{
			var backd=This.parentNode.parentNode;
			backd.style.background="#fff";
		}
	}
	
	function jia_bac(This){
		console.log(This.parentNode.parentNode.previousElementSibling.children[0])
		if(This.parentNode.parentNode.previousElementSibling.children[0].checked){
			var backd=This.parentNode.parentNode.parentNode;
			backd.style.background="#fff4e8";
		}else{
			var backd=This.parentNode.parentNode.parentNode;
			backd.style.background="#fff";
		}
	}
	
	//多个全选
	duo_allcho();
	function duo_allcho(){
		allchose_two_dv3.onclick=function(){
			for(var i=0;i<allchose_two_dv4.length;i++){
				allchose_two_dv4[i].checked=allchose_two_dv3.checked;
			}
			allcho();
			if(this.checked){
				inputs[4].parentNode.parentNode.style.background="#fff4e8";
				inputs[5].parentNode.parentNode.style.background="#fff4e8";
			}else{
				inputs[4].parentNode.parentNode.style.background="#fff";
				inputs[5].parentNode.parentNode.style.background="#fff";
			}
		}
		for(var i=0;i<allchose_two_dv4.length;i++){
			allchose_two_dv4[i].onclick=function(){
				if(allchose_two_dv4[0].checked&&allchose_two_dv4[1].checked){
					allchose_two_dv3.checked=true;
				}else{
					allchose_two_dv3.checked=false;
				}
				allcho();
				bac(this);
			}
		}
	}
	
	
	
	function allcho(){
		if(allchose_two_dv1.checked&&allchose_two_dv3.checked){
			allchose.checked=true;
			allchose_last.checked=true;
		}else{
			allchose.checked=false;
			allchose_last.checked=false;
		}
	}
	
	
	
	
	//单价
	
	var jia=document.querySelectorAll(".jia");
	var jian=document.querySelectorAll(".jian");
	var txt=document.querySelectorAll("input[type=text]");
	var danjia=document.querySelectorAll(".dvdv3 strong");
	var xiaoji=document.querySelectorAll(".dvdv5 strong i");
	
	var totals=document.querySelector(".sec_fiv .rig .dv4 i");
	var jianshu=document.querySelector(".sec_fiv .rig .dv3 i");
	
	
	for(var i=0;i<jia.length;i++){
		jia[i].index=i;
		jia[i].onclick=function(){
			var num=txt[this.index].value;
			num++;
			txt[this.index].value=num;
			var danj=parseFloat(danjia[this.index].innerHTML);
			xiaoji[this.index].innerHTML=parseFloat(danj*num).toFixed(2);
			var numtot=parseFloat(xiaoji[0].innerHTML)+parseFloat(xiaoji[1].innerHTML)+parseFloat(xiaoji[2].innerHTML);
			totals.innerHTML=numtot.toFixed(2);
			var jshu=parseInt(txt[0].value)+parseInt(txt[1].value)+parseInt(txt[2].value);
			jianshu.innerHTML=jshu;
			
			var check=this.parentNode.parentNode.previousElementSibling.children;
			check[0].checked=true;
			
			if(inputs[4].checked&&inputs[5].checked){
				inputs[3].checked=true;
			}else if(inputs[2].checked){
				inputs[1].checked=true;
			}
			
			jia_bac(this);
			
			if(inputs[1].checked&&inputs[3].checked){
				allchose.checked=allchose_last.checked=true;
			}
		}
		jian[i].index=i;
		jian[i].onclick=function(){
			var num=txt[this.index].value;
			if(num==1){
				num=1;
				return;
			}
			num--;
			txt[this.index].value=num;
			var danj=parseFloat(danjia[this.index].innerHTML);
			xiaoji[this.index].innerHTML=parseFloat(danj*num).toFixed(2);
			var numtot=parseFloat(xiaoji[0].innerHTML)+parseFloat(xiaoji[1].innerHTML)+parseFloat(xiaoji[2].innerHTML);
			console.log(numtot);
			totals.innerHTML=numtot.toFixed(2);
			var jshu=parseInt(txt[0].value)+parseInt(txt[1].value)+parseInt(txt[2].value);
			jianshu.innerHTML=jshu;
		}
		
		
	}
	
	
	
	//删除
	var dels=document.querySelectorAll(".ddvv2 .dvdv6 a:first-child");
	console.log(dels);
	var sec_two=document.querySelectorAll(".sec_two");
	var fuji_dv2=document.querySelectorAll(".sec_two .dv2");
	console.log(sec_two);
	dels[0].onclick=function(){
		document.body.removeChild(sec_two[0]);
	}
	for(var i=1;i<dels.length;i++){
		dels[i].index=i;
		dels[i].onclick=function(){
			fuji_dv2[this.index].removeChild(bacs[this.index]);
		}
	}
}
