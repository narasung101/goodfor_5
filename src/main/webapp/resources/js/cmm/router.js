"use strict";
function Session(x){
	sessionStorage.setItem('ctx',x);
	sessionStorage.setItem('js',x+'/resources/js');
	sessionStorage.setItem('css',x+'/resources/css');
	sessionStorage.setItem('img',x+'/resources/img');
	return {
		ctx : ()=>{return sessionStorage.getItem('ctx');},
		js : ()=>{return sessionStorage.getItem('js');},
		img : ()=>{return sessionStorage.getItem('img');},
		css : ()=>{return sessionStorage.getItem('css');}
	}
}
function Customer(t){
	sessionStorage.setItem('cid',t.cid);
	sessionStorage.setItem('cname',t.cname);
	sessionStorage.setItem('email',t.email);
	sessionStorage.setItem('pnumber',t.pnumber);
	sessionStorage.setItem('invest',t.invest);
	sessionStorage.setItem('rating',t.rating);
	return {
		cid : ()=>{return sessionStorage.getItem('cid');},
		cname : ()=>{return sessionStorage.getItem('cname');},
		email : ()=>{return sessionStorage.getItem('email');},
		pnumber : ()=>{return sessionStorage.getItem('pnumber');},
		invest : ()=>{return sessionStorage.getItem('invest');},
		rating : ()=>{return sessionStorage.getItem('rating');}
	}
}