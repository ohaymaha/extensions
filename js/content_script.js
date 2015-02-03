/**
 * Extension OHM v 1.0
 *
 * @author    Quang Chau Tran <quangchauvn at gmail dot com>
 * @license   QCVVN JSC
 */  
 var domain = window.location.host;
 console.log(domain);
 var pubid = 5126463837700096;
 var flag = safety_zone(domain);
 var protocol = window.location.protocol;
 if(protocol =='https:'){
 	var ssl = true;
 }
 else
 {
 	var ssl = false;
 } 

if( flag && !ssl ){
 	console.log('OHM Extension'); 
 	chrome.storage.sync.get({
	  	OHMdisable: 'no'
	}, function(items) { 
	    if( items.OHMdisable !='yes'  ){ 
			extension_main();  
		}
		else
		{
			//
		} 
	});  
 }  
/**
 * functions
 */ 
 function safety_zone(domain){
 	if( domain == 'www.facebook.com' 
 		|| domain == 'facebook.com' 
 		|| domain == 'oad.ohm.vn' 
 		|| domain == 'account.ohm.vn' 
 		|| domain =='adv.ohm.vn' 
 		|| domain =='ads.ohm.vn'
 		// || domain =='www.tintute.com'
 		// || domain =='tintute.com'
 		// || domain =='green-tech.vn'
 		// || domain =='www.green-tech.vn'

 		){
 		return false;
 	}
 
 	return true;
}
function extension_main(){  
	var script_var = document.createElement("script");
    var script_var_t = document.createTextNode("var pubId = "+pubid+";");  
	script_var.appendChild(script_var_t); 
    //document.head.appendChild(script_var);   
    document.head.insertBefore(script_var, document.head.firstChild);   
    var url = chrome.extension.getURL('js/publisher.js');
    // var url = 'http://ads.ohm.vn/publisher.js';
    var script = document.createElement("script");
    script.src = url;
    //document.head.appendChild(script);    
    document.head.insertBefore(script, document.head.firstChild);   
    console.log('OHM OK');
}  
 
