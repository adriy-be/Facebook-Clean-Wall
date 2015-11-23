/* bilgisayarkocani.tk
* NOT WORKING clean wall 1.0
*/


var btnread, ajaxify, btndelete, htmlbody ,deletebox, interval, btnhide, btn, interval2, interval3, evt, kontrolelement, dialog, url, urlbase, urlsearch, urlc, altbtn, menu, confirm;
var error = 0, og = 0, sys = 0;

urlbase = window.location.origin;
/* URL KONTROLU */
if (urlbase == "https://www.facebook.com") {
	/* DIALOG KUTULARI */
	interval = setInterval(function(){
		confirm = document.querySelectorAll('button._42ft._4jy0.layerConfirm.uiOverlayButton._4jy3._4jy1.selected._51sy')[0];
		if (confirm !== undefined) {
			evt = document.createEvent("MouseEvents");
			evt.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
			confirm.dispatchEvent(evt);
			console.log("Veri bulundu");
		}
	},2000);
	/* !DIALOG KUTULARI */
	url = window.location.pathname;
	urlc = url.split("/");
	console.log(urlc[1]+" Hoşgeldiniz yapılan değişiklikleri konsol üzerinden takip edebilirsiniz.");

				if (urlc[2] && urlc[2]=="allactivity") 
					{
						console.log("KONUM:FACEBOOK HAREKET DÖKÜMÜ");

							btndelete = document.querySelectorAll('div._6a._6b.uiPopover.rfloat._5v-0')[0];
							if (btndelete)
								{
									sys = 2;
									allclear();

									interval3 = setInterval(function()
									{
										kontrol();
									},800);
								}
					}

				else
					{
							console.log("KONUM:FACEBOOK DUVARI");
							sys = 1;
							interval2 = setInterval(function()
							{
								kontrol();
							},1400);
					}
}/* if end */
/* !URL KONTROLU */



/* Tıklama Olayı */
evt = document.createEvent("MouseEvents");
evt.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
/* Tıklama Olayı Son */

function bul()
{
	evt = document.createEvent("MouseEvents");
	evt.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
	btndelete = document.querySelectorAll('a[data-feed-option-name|=FeedDeleteOption]')[0];
	if (btndelete !== undefined)
	{
		btndelete.dispatchEvent(evt);
		btndelete.remove();
		/*ajaxify = btndelete.getAttribute("ajaxify");*/
	}
	else
	{
		console.log("Silinecek veri bulunamadı. Tekrar Deneniliyor Lütfen Bekleyiniz");
		btnread = document.querySelectorAll('._5pbj._p')[0];
		btnread.dispatchEvent(evt);
		if (error > 0) {
			error=0;
			btnread.remove();
			hide();
		}
		else{
			error++;
			console.log("İşlemler Kontrol Ediliyor Error:Code="+error);
		}
	}
}

function hide(){
	evt = document.createEvent("MouseEvents");
	evt.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
	btnhide = document.querySelectorAll('a[data-feed-option-name|=NFXHideFromTimelineAction]')[0];
	if (btnhide !== undefined){
		btnhide.dispatchEvent(evt);
	}
}

function kontrol(){
	evt = document.createEvent("MouseEvents");
	evt.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
	if (sys == 1) {
		console.log("duvar komutu");
		confirm = document.querySelectorAll('button._42ft._4jy0.layerConfirm.uiOverlayButton._4jy3._4jy1.selected._51sy')[0];
		dialog = document.querySelectorAll('div[role|=dialog]')[0];
		if (dialog !== undefined) {
			document.querySelectorAll('div[role|=dialog] a[action|=cancel]')[0].dispatchEvent(evt);
		}
		if (confirm !== undefined) {
			console.log("beklemedeyiz..");
		}
		else
		{
			kontrolelement = document.querySelectorAll('._5pbj._p')[0];
			if (!kontrolelement) {
				scroll();
			}
			else{
				bul();
			}
		}
	}

	else if (sys == 2) {
		console.log("harkeketler komutu");
		dialog = document.querySelectorAll('div[role|=dialog]')[0];
		if (dialog !== undefined) {
			document.querySelectorAll('div[role|=dialog] a[action|=cancel]')[0].dispatchEvent(evt);
		}
		kontrolelement = document.querySelectorAll('div._6a._6b.uiPopover.rfloat._5v-0 a._42ft._42fu._4-s1._2agf._p._42gx')[0];
		if (!kontrolelement) {
			scroll();
		}
		else{
			allclear();
		}
	}
}

function scroll(){
	window.scrollBy(0, 400);
}



function allclear(){
	evt = document.createEvent("MouseEvents");
	evt.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);

	btndelete = document.querySelectorAll('div._6a._6b.uiPopover.rfloat._5v-0 a._42ft._42fu._4-s1._2agf._p._42gx')[0];

	btndelete.dispatchEvent(evt);
	btndelete.remove();
	menu = document.querySelectorAll("ul._54nf[role|=menu]")[0];
	altbtn = menu.querySelectorAll("a");
	if (altbtn.length == 1) {
		console.log("beğen  1 sec c "+altbtn[0].dispatchEvent(evt));
			scroll();
	}
	else if (altbtn.length == 2)
	{
		console.log("gizle  2 sec c "+altbtn[1].dispatchEvent(evt));
			scroll();
	}
	else if (altbtn.length == 3)
	{
		console.log("izin verme 3 sec c "+altbtn[1].dispatchEvent(evt));
			scroll();
	}
	menu.remove();
}
