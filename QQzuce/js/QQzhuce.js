function carou(){
    var carousel=document.getElementsByClassName("carousel")[0];
    var imgs=carousel.getElementsByTagName("img");
    var j=0;
    setInterval(function(){
    j++;
    if(j==3){
        j=0;
    }
    for(var i=0;i<imgs.length;i++){
        imgs[i].className="";
    }
    imgs[j].className="imgjs";
    },3000);

}
carou();


function effect(){
    var lh=document.getElementsByClassName("lh")[0];
    var lhbox=document.getElementsByClassName("lhbox")[0];
    lh.onmouseenter=function(){
        lhbox.className="lhjs";
    }
    lh.onmouseleave=function(){
        lhbox.className="";
    }
}
effect();


var form=document.getElementsByTagName("form")[0];
var inps=form.getElementsByTagName("input");
var codebox=document.getElementsByClassName("codebox")[0];
var box=document.getElementsByClassName("box")[0];
var divs=box.getElementsByTagName("div");
for(var i=0;i<inps.length-1;i++){
   //获取焦点
    inps[i].onfocus=function(){
        if(this.name=="pet_name"){//昵称
            this.style.border=" 1px solid #549df8";
            this.nextElementSibling.style.bottom="28px";
            this.nextElementSibling.style.display="none";
        }else if(this.name=="password"){//密码
            var user=this.value;
                var reg1=/^(?!\s+$)(?![a-zA-Z]+$)(?![a-z]+$)(?![A-Z]+$)(?![0-9]+$)(?![\.]+$)\w{8,16}$/;
                var reg2=/^\s{1,}$/;
                var reg3=/^(?!\s+$)(?![a-zA-Z]+$)(?![a-z]+$)(?![A-Z]+$)(?![\.]+$)[0-9a-zA-Z]{1,7}$/;
                var reg4=/^(?!\s+$)(?![a-zA-Z]+$)(?![a-z]+$)(?![A-Z]+$)[\s0-9a-zA-Z]{1,}$/;
                var reg5=/^[a-zA-Z]{1,}$/;
                //全部验证
                var bool1=reg1.test(user);
                //空格
                var bool2=reg2.test(user);
                //字数
                var bool3=reg3.test(user);
                //空格+字母+数字
                var bool4=reg4.test(user);
                //全字母
                var bool5=reg5.test(user);
            if(bool1){
                this.nextElementSibling.nextElementSibling.style.display="block";
                this.nextElementSibling.nextElementSibling.style.bottom="-50px";
                this.parentNode.nextElementSibling.style.marginTop="80px";
                this.style.border=" 1px solid #549df8";
                this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/green.png";
                  this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/green.png";
                this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/green.png";
                console.log(1)
            }else if(bool2){
                this.nextElementSibling.nextElementSibling.style.display="block";
                this.nextElementSibling.nextElementSibling.style.bottom="-50px";
                this.parentNode.nextElementSibling.style.marginTop="80px";
                this.style.border=" 1px solid #549df8";
                this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/info.png";
                this.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.src="imgs/info.png";
                this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/info.png";
                console.log(2)
            }else if(bool3){
                this.nextElementSibling.nextElementSibling.style.display="block";
                this.nextElementSibling.nextElementSibling.style.bottom="-50px";
                this.parentNode.nextElementSibling.style.marginTop="80px";
                this.style.border=" 1px solid #549df8";this.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.src="imgs/green.png";
                this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/green.png";
                this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/info.png";
                this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/green.png";
                console.log(3)
            }else if(bool4){
                this.nextElementSibling.nextElementSibling.style.display="block";
                this.nextElementSibling.nextElementSibling.style.bottom="-50px";
                this.parentNode.nextElementSibling.style.marginTop="80px";
                this.style.border=" 1px solid #549df8";
                this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/info.png";
                this.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.src="imgs/info.png";
                this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/info.png";
                console.log(4)
            }else if(bool5){
                this.nextElementSibling.nextElementSibling.style.display="block";
                this.nextElementSibling.nextElementSibling.style.bottom="-50px";
                this.parentNode.nextElementSibling.style.marginTop="80px";
                this.style.border=" 1px solid #549df8";
                this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/info.png";
                this.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.src="imgs/green.png";
                this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/info.png";
                console.log(5)
            }else{
                this.nextElementSibling.nextElementSibling.style.display="block";
                this.nextElementSibling.nextElementSibling.style.bottom="-50px";
                this.parentNode.nextElementSibling.style.marginTop="80px";
                this.style.border=" 1px solid #549df8";
                this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/info.png";
                this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/info.png";
                this.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.style.background="";
                this.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.style.background="";
            }
        }else if(this.name=="phone"){
            this.style.border=" 1px solid #549df8";
            this.nextElementSibling.style.display="none";
            this.nextElementSibling.style.bottom="28px";
       }else if(this.name=="code"){
            this.style.border=" 1px solid #549df8";
            this.parentNode.nextElementSibling.style.display="none";
            this.parentNode.nextElementSibling.style.bottom="28px";
       }
    }
}
   //失去焦点
for(var i=0;i<inps.length-1;i++){
    inps[i].onblur=function(){
        if(this.name=="pet_name"){//昵称
            if(this.value==""){
                this.nextElementSibling.style.bottom="0px";
                this.nextElementSibling.style.display="block";
                this.style.border="1px solid #ff5b5b"
                this.nextElementSibling.nextElementSibling.style.background="";
            }else{
                this.nextElementSibling.nextElementSibling.style.background="url(imgs/tick.png) no-repeat center";
                this.style.border="1px solid #aaa ";
            }
        }else if(this.name=="password"){//密码
            if(this.value==""){
                this.nextElementSibling.style.bottom="0px";
                this.nextElementSibling.style.display="block";
                this.style.border="1px solid #ff5b5b"
                this.nextElementSibling.nextElementSibling.style.background="";
                this.nextElementSibling.nextElementSibling.style.bottom="28px";
                this.nextElementSibling.nextElementSibling.style.display="none";
                this.parentNode.nextElementSibling.style.marginTop="24px";
                this.nextElementSibling.lastElementChild.innerHTML="密码不能为空";
                this.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.className="";
                this.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.className="";
            }else{
                var user=this.value;
                var reg1=/^(?!\s+$)(?![a-zA-Z]+$)(?![a-z]+$)(?![A-Z]+$)(?![0-9]+$)(?![\.]+$)\w{8,16}$/;
                var reg2=/^\s{1,}$/;
                var reg3=/^(?!\s+$)(?![a-zA-Z]+$)(?![a-z]+$)(?![A-Z]+$)(?![\.]+$)\w{1,7}$/;
                var reg4=/^(?!\s+$)(?![a-zA-Z]+$)(?![a-z]+$)(?![A-Z]+$)[\s0-9a-zA-Z]{1,}$/;
                var reg5=/^[a-zA-Z]{1,}$/;
                var bool1=reg1.test(user);
                var bool2=reg2.test(user);
                var bool3=reg3.test(user);
                var bool4=reg4.test(user);
                var bool5=reg5.test(user);
                if(bool1){//全部验证
                    this.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.className="bdgtp";
                    this.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.className="bgtp";
                    this.style.border="1px solid #aaa ";
                    this.nextElementSibling.nextElementSibling.style.bottom="28px";
                    this.nextElementSibling.nextElementSibling.style.display="none";
                    this.nextElementSibling.style.display="none";
                    this.parentNode.nextElementSibling.style.marginTop="24px";
                    this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/green.png";
                    this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/green.png";
                  this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/green.png";
                }else if(bool2){//空格
                    this.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.className="bgtp";
                    this.style.border="1px solid #ff5b5b"
                    this.nextElementSibling.nextElementSibling.style.bottom="28px";
                    this.nextElementSibling.nextElementSibling.style.display="none";
                    this.parentNode.nextElementSibling.style.marginTop="24px";
                    this.nextElementSibling.style.bottom="0px";
                    this.nextElementSibling.style.display="block";
                    this.nextElementSibling.lastElementChild.innerHTML="不能包括空格";
                    
                }else if(bool3){//字数
                    this.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.className="bgtp";
                    this.style.border="1px solid #ff5b5b"
                    this.nextElementSibling.nextElementSibling.style.bottom="28px";
                    this.nextElementSibling.nextElementSibling.style.display="none";
                    this.parentNode.nextElementSibling.style.marginTop="24px";
                    this.nextElementSibling.style.bottom="0px";
                    this.nextElementSibling.style.display="block";
                    this.nextElementSibling.lastElementChild.innerHTML="长度为8-16个字符";
                    
                }else if(bool4){//空格+字母+数字
                    this.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.className="bgtp";
                    this.style.border="1px solid #ff5b5b"
                    this.nextElementSibling.nextElementSibling.style.bottom="28px";
                    this.nextElementSibling.nextElementSibling.style.display="none";
                    this.parentNode.nextElementSibling.style.marginTop="24px";
                    this.nextElementSibling.style.bottom="0px";
                    this.nextElementSibling.style.display="block";
                    this.nextElementSibling.lastElementChild.innerHTML="不能包括空格";
                    
                }else if(bool5){//全字母
                    this.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.className="bgtp";
                    this.style.border="1px solid #ff5b5b"
                    this.nextElementSibling.nextElementSibling.style.bottom="28px";
                    this.nextElementSibling.nextElementSibling.style.display="none";
                    this.parentNode.nextElementSibling.style.marginTop="24px";
                    this.nextElementSibling.style.bottom="0px";
                    this.nextElementSibling.style.display="block";
                    this.nextElementSibling.lastElementChild.innerHTML="必须包含字母、数字、符号中至少2种";
                }else{
                    this.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.className="bgtp";
                    this.style.border="1px solid #ff5b5b"
                    this.nextElementSibling.nextElementSibling.style.bottom="28px";
                    this.nextElementSibling.nextElementSibling.style.display="none";
                    this.parentNode.nextElementSibling.style.marginTop="24px";
                    this.nextElementSibling.style.bottom="0px";
                    this.nextElementSibling.style.display="block";
                    this.nextElementSibling.lastElementChild.innerHTML="输入错误";
                }
            }
        }else if(this.name=="phone"){//手机
            if(this.value==""){
                this.style.border="1px solid #ff5b5b";
                this.nextElementSibling.style.display="block";
                this.nextElementSibling.style.bottom="0px";
                this.nextElementSibling.lastElementChild.innerHTML="请填写手机号";
               
            }else{
                var user=this.value;
                var reg=/^(\+86|0086)?\s*\d{11}$/;
                var bool=reg.test(user);
                if(bool){
                    this.nextElementSibling.style.display="none";
                    this.nextElementSibling.style.bottom="28px";
                    this.nextElementSibling.nextElementSibling.style.background="url(imgs/tick.png) no-repeat center";
                    this.style.border="1px solid #aaa ";
                }else{
                    this.style.border="1px solid #ff5b5b";
                    this.nextElementSibling.style.display="block";
                    this.nextElementSibling.style.bottom="0px";
                    this.nextElementSibling.lastElementChild.innerHTML="手机号码格式不正确";
                    this.nextElementSibling.nextElementSibling.style.background="";
                }
            }
        }else if(this.name=="code"){
            if(this.value==""){
                this.style.border="1px solid #ff5b5b";
                this.parentNode.nextElementSibling.style.display="block";
                this.parentNode.nextElementSibling.style.bottom="0px";
                this.parentNode.nextElementSibling.lastElementChild.innerHTML="验证码不能为空";
                this.parentNode.nextElementSibling.nextElementSibling.style.background="";
            }else{
                if(codebox.innerHTML.toUpperCase()==this.value.toUpperCase()){
                    this.parentNode.nextElementSibling.style.display="none";
                    this.parentNode.nextElementSibling.style.bottom="28px";
                    this.style.border="1px solid #aaa ";
                    this.parentNode.nextElementSibling.nextElementSibling.style.background="url(imgs/tick.png) no-repeat center";
                }else{
                    this.style.border="1px solid #ff5b5b";
                    this.parentNode.nextElementSibling.style.display="block";
                    this.parentNode.nextElementSibling.style.bottom="0px";
                    this.parentNode.nextElementSibling.lastElementChild.innerHTML="验证码错误";
                    this.parentNode.nextElementSibling.nextElementSibling.style.background="";
                }
            }
        }
    }
}
//输入就判断
for(var i=0;i<inps.length;i++){
    inps[i].oninput=function(){
        if(this.name=="pet_name"){//昵称
            if(this.value==""){
                this.nextElementSibling.style.bottom="0px";
                this.nextElementSibling.style.display="block";
                this.style.border="1px solid #ff5b5b"
                this.nextElementSibling.nextElementSibling.style.background="";
            }else{
                this.nextElementSibling.nextElementSibling.style.background="url(imgs/tick.png) no-repeat center";
                this.style.border="1px solid #aaa ";
            }
        }else if(this.name=="password"){//密码
            if(this.value==""){
                this.nextElementSibling.style.bottom="0px";
                this.nextElementSibling.style.display="block";
                this.style.border="1px solid #ff5b5b"
                this.nextElementSibling.nextElementSibling.style.background="";
                this.nextElementSibling.nextElementSibling.style.bottom="28px";
                this.nextElementSibling.nextElementSibling.style.display="none";
                this.parentNode.nextElementSibling.style.marginTop="24px";
                this.nextElementSibling.lastElementChild.innerHTML="密码不能为空";
                this.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.className="";
                this.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.className="";
            }else{
                var user=this.value;
                var reg1=/^(?!\s+$)(?![a-zA-Z]+$)(?![a-z]+$)(?![A-Z]+$)(?![0-9]+$)(?![\.]+$)[0-9a-zA-Z]{8,16}$/;
                var reg2=/^\s{1,}$/;
                var reg3=/^(?!\s+$)(?![a-zA-Z]+$)(?![a-z]+$)(?![A-Z]+$)(?![\.]+$)[0-9A-Za-z]{1,7}$/;
                var reg4=/^(?!\s+$)(?![a-zA-Z]+$)(?![a-z]+$)(?![A-Z]+$)[\s0-9a-zA-Z]{1,}$/;
                var reg5=/^[a-zA-Z]{1,}$/;
                var bool1=reg1.test(user);
                var bool2=reg2.test(user);
                var bool3=reg3.test(user);
                var bool4=reg4.test(user);
                var bool5=reg5.test(user);
                if(bool1){
                    this.nextElementSibling.nextElementSibling.style.display="block";
                    this.nextElementSibling.nextElementSibling.style.bottom="-50px";
                    this.parentNode.nextElementSibling.style.marginTop="80px";
                    this.style.border=" 1px solid #549df8";
                    this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/green.png";
                    this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/green.png";
                    this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/green.png";
                    console.log(1)
                }else if(bool2){
                    this.nextElementSibling.nextElementSibling.style.display="block";
                    this.nextElementSibling.nextElementSibling.style.bottom="-50px";
                    this.parentNode.nextElementSibling.style.marginTop="80px";
                    this.style.border=" 1px solid #549df8";
                    this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/info.png";
                    this.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.src="imgs/info.png";
                    this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/info.png";
                    console.log(2)
                }else if(bool3){
                    this.nextElementSibling.nextElementSibling.style.display="block";
                    this.nextElementSibling.nextElementSibling.style.bottom="-50px";
                    this.parentNode.nextElementSibling.style.marginTop="80px";
                    this.style.border=" 1px solid #549df8";this.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.src="imgs/green.png";
                    this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/green.png";
                    this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/info.png";
                    this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/green.png";
                    console.log(3)
                }else if(bool4){
                    this.nextElementSibling.nextElementSibling.style.display="block";
                    this.nextElementSibling.nextElementSibling.style.bottom="-50px";
                    this.parentNode.nextElementSibling.style.marginTop="80px";
                    this.style.border=" 1px solid #549df8";
                    this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/info.png";
                    this.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.src="imgs/info.png";
                    this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/info.png";
                    console.log(4)
                }else if(bool5){
                    this.nextElementSibling.nextElementSibling.style.display="block";
                    this.nextElementSibling.nextElementSibling.style.bottom="-50px";
                    this.parentNode.nextElementSibling.style.marginTop="80px";
                    this.style.border=" 1px solid #549df8";
                    this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/info.png";
                    this.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.src="imgs/green.png";
                    this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/info.png";
                    console.log(5)
                }else{
                    this.nextElementSibling.nextElementSibling.style.display="block";
                    this.nextElementSibling.nextElementSibling.style.bottom="-50px";
                    this.parentNode.nextElementSibling.style.marginTop="80px";
                    this.style.border=" 1px solid #549df8";
                    this.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.src="imgs/info.png";
                    this.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.firstElementChild.src="imgs/info.png";
                    this.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.style.background="";
                    this.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.style.background="";
                }
            }
        }else if(this.name=="phone"){//手机
            if(this.value==""){
                this.style.border="1px solid #ff5b5b";
                this.nextElementSibling.style.display="block";
                this.nextElementSibling.style.bottom="0px";
                this.nextElementSibling.lastElementChild.innerHTML="请填写手机号";
               
            }else{
                var user=this.value;
                var reg=/^(\+86|0086)?\s*\d{11}$/;
                var bool=reg.test(user);
                if(bool){
                    this.nextElementSibling.style.display="none";
                    this.nextElementSibling.style.bottom="28px";
                    this.nextElementSibling.nextElementSibling.style.background="url(imgs/tick.png) no-repeat center";
                    this.style.border="1px solid #aaa ";
                }else{
                    this.style.border="1px solid #ff5b5b";
                    this.nextElementSibling.style.display="block";
                    this.nextElementSibling.style.bottom="0px";
                    this.nextElementSibling.lastElementChild.innerHTML="手机号码格式不正确";
                    this.nextElementSibling.nextElementSibling.style.background="";
                }
            }
        }else if(this.name=="code"){
            if(this.value==""){
                this.style.border="1px solid #ff5b5b";
                this.parentNode.nextElementSibling.style.display="block";
                this.parentNode.nextElementSibling.style.bottom="0px";
                this.parentNode.nextElementSibling.lastElementChild.innerHTML="验证码不能为空";
                this.parentNode.nextElementSibling.nextElementSibling.style.background="";
            }else{
                if(codebox.innerHTML.toUpperCase()==this.value.toUpperCase()){
                    this.parentNode.nextElementSibling.style.display="none";
                    this.parentNode.nextElementSibling.style.bottom="28px";
                    this.style.border="1px solid #aaa ";
                    this.parentNode.nextElementSibling.nextElementSibling.style.background="url(imgs/tick.png) no-repeat center";
                }else{
                    this.style.border="1px solid #ff5b5b";
                    this.parentNode.nextElementSibling.style.display="block";
                    this.parentNode.nextElementSibling.style.bottom="0px";
                    this.parentNode.nextElementSibling.lastElementChild.innerHTML="验证码错误";
                    this.parentNode.nextElementSibling.nextElementSibling.style.background="";
                }
            }
        }
    }
}
form.onsubmit=function(){
    if(inps[0].style.border=="1px solid #ff5b5b"||inps[1].style.border=="1px solid #ff5b5b"||inps[2].style.border=="1px solid #ff5b5b"||inps[3].style.border=="1px solid #ff5b5b"){
        return false;
    }
    if(inps[0].value==""||inps[1].value==""||inps[2].value==""||inps[3].value==""){
        return false;
    }
    if(codebox.innerHTML.toUpperCase()!=inps[3].value.toUpperCase()){
        return false;
    }
}




codebox.onclick=function(){
    codes();
}
function codes(){
    var arr=[];
    for(var i=48;i<=57;i++){
        var a=String.fromCharCode(i);
        arr.push(a);
    }   
    for(var i=65;i<=90;i++){
        var a=String.fromCharCode(i);
        arr.push(a);
    }
    for(var i=97;i<=122;i++){
        var a=String.fromCharCode(i);
        arr.push(a);
    } 
    str=""
    while(str.length<4){
        var r=parseInt(Math.random()*(61-0+1)+0);
        if(str.indexOf(arr[r])==-1){
            str+=arr[r];
        }
    }

    codebox.innerHTML=str;
}
codes();

//密码显示和隐藏
for(var i=0;i<divs.length;i++){
    divs[i].onmousedown=function(){
        if(this.className=="bgtp"){
            inps[1].setAttribute("type","");
            
        }
    }
    divs[i].onmouseup=function(){
        if(this.className=="bgtp"){
            inps[1].setAttribute("type","password");
        }
    }
}