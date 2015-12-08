/*
 *	Metin YILDIRIM
 */

//Boxs
var clicker, infoweb, acttask, error;

//Intervals
var autoConfirm, wallCleaner, activityCleaner;

// Document Elements for be control
function controlKey(key){
	if (document.querySelector(key))
	{return true;} else{return false;}
}
// To Need Click Buttons * del == 0 only click, del == 1 click and delete, del == 2 only delete, def == true only click for defined variables
function autoClick(key, del, def){
	clicker = document.createEvent("MouseEvents");
	clicker.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
	if (def == true) {
		key.dispatchEvent(clicker);
	}
	else{
		if (del != 2) {
			document.querySelectorAll(key)[0].dispatchEvent(clicker);
			if (del == 1) {
				document.querySelectorAll(key)[0].remove();
			}
		}
		else{
			document.querySelectorAll(key)[0].remove();
		}
	}
}

function scroll(x, y, more){
	window.scrollBy(x, y);
	if(more == true){
		if (controlKey(".uiMorePager a[role|=button]"))
		{
			autoClick(".uiMorePager a[role|=button]");
		}
	}
}

function aI(state){
	if (state == 1) {
		start();
		autoClick("#nullbox",2);
	}
	else{
		autoClick("#nullbox",2);
	}
}


//If else way
var dialogBox = '<div id="nullbox" style="width:100%; height: 100vh; position:fixed; background-color:rgba(0,0,0,0.4); z-index: 99999999999; font-size: 12px; color: #141823;"> <div style="width:700px; height:149px; margin:-75px auto 0px -350px; position: fixed; top:50%; left: 50%; background-color: #fff; box-shadow: 0 2px 26px rgba(0, 0, 0, .3), 0 0 0 1px rgba(0, 0, 0, .1);"> <div style="color: #141823; background-color: #f6f7f8; border-bottom: 1px solid #e5e5e5; border-radius: 3px 3px 0 0; font-weight: bold; line-height: 19px; padding: 10px 12px; height: 36px;"> <div style="float: left;"> <h3>Facebook Duvar Silme İşlemi için izin isteniyor... WARNING !</h3> </div> <div style="float: right;"> Bilgisayar Koçanı </div> </div> <div style="padding: 12px; background-color: #fff; font-size: 14px; line-height: 18px;"> I can clean your wall for you but you want to me. Never forget if you start me I cant stop. Do you want Clean wall ? </div> <div style="padding: 3px 0; border-top: 1px solid #dcdee3; margin: 0 12px; line-height: 18px;"> <div class="_ohf rfloat"> <div> <a tabindex="0" onclick="aI(1);" href="#" class="autofocus  layerCancel _4jy0 _4jy3 _4jy1 _51sy selected _42ft"><span>YES I WANT</span></a> </div> </div> <div class="_ohf rfloat"> <div style="background-color: #900;  margin-right: 3px;"> <a tabindex="0" style="background-image: none; border-color: rgb(179, 17, 40); background-color: #900;" onclick="aI(0);" href="#" class="autofocus  layerCancel _4jy0 _4jy3 _4jy1 _51sy selected _42ft"><span>NO CLOSE THIS WINDOW</span></a> </div> </div> </div> </div> </div>';


if (window.location.origin == "https://www.facebook.com") {
	document.body.insertAdjacentHTML("afterend",dialogBox);
	function start(){
		// If See any confirm button --> Work Auto Click
		autoConfirm = setInterval(
		function(){
			if (controlKey("div[role|=dialog]"))
			{
				autoClick("div[role|=dialog] .layerCancel");
			}
			if (controlKey("button._42ft._4jy0.layerConfirm.uiOverlayButton._4jy3._4jy1.selected._51sy"))
			{
				autoClick("button._42ft._4jy0.layerConfirm.uiOverlayButton._4jy3._4jy1.selected._51sy");
			}
		},100);

		//Return
		infoweb = window.location.pathname.split("/");
		if(infoweb[2] == "allactivity"){
			activityCleaner = setInterval(
				function(){
				if (controlKey("div._6a._6b.uiPopover.rfloat._5v-0 a._42ft._42fu._4-s1._2agf._p._42gx")){
					autoClick("div._6a._6b.uiPopover.rfloat._5v-0 a._42ft._42fu._4-s1._2agf._p._42gx",1);

						acttask = document.querySelector("ul._54nf[role|=menu]").querySelectorAll("a");
						switch(acttask.length)
						{
							case 1:
							if (acttask[0].getAttribute("href") == "#"){
								autoClick(acttask[0],0,true);
							}
							break;

							case 2:
							autoClick(acttask[1],0,true);
							break;

							case 3:
							autoClick(acttask[1],0,true);
							break;
						}
						autoClick("ul._54nf[role|=menu]",2);
						scroll(0,72);
				}
				else{
					if (error == 1){
						scroll(0,5000,true);
						error=0;
					}
					else
					{
						error=1;
					}
				}
			},100);
		}//All Activity !end
		else{
			//Wall Cleaner Interval Function
			wallCleaner = setInterval(
			function(){
				if (controlKey("._5pbj._p")){
					autoClick("._5pbj._p",1);
					if (controlKey("a[data-feed-option-name|=FeedDeleteOption]")){
						autoClick("a[data-feed-option-name|=FeedDeleteOption]",1);
					}
					else if(controlKey("a[data-feed-option-name|=NFXHideFromTimelineAction]")){
						autoClick("a[data-feed-option-name|=NFXHideFromTimelineAction]",1);
					}
					else if(controlKey("a[data-feed-option-name|=FeedFollowOption]")){
						autoClick("a[data-feed-option-name|=FeedFollowOption]",1);
					}
					else{
						console.log("wallCleaner function have some problems");
					}
					scroll(0,100);
				}
				else{
					scroll(0,400);
				}
			},1100);
		}//Wall !end
	}//If you want start function
}//Facebook !end 
