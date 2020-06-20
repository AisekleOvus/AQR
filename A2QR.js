chrome.runtime.onMessage.addListener(
	function (request, sender){
        var docHeight = $(window).height();
        var docWidth = $(window).width();
	if(request.line == 'doQR!'){
          if($("#QR").length==0){
              $("body").append("<div id='QR'></div>");
                      $("#QR")
                             .css({
                                   'opacity' : 1,
                                   'position': 'fixed',
                                   'top': ((docHeight/2)-125)+"px",
                                   'left': ((docWidth/2)-125)+"px",
                                   'background-color': 'white',
                                   'height': '254px',
                                   'width': '254px',
                                   'z-index': 6000,
                                   });
             $("#QR").append("<img id='QR_img' src='https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl="+window.location.href+"'/>");
                      $("#QR_img")
                            .css({
                                 'border':'2px solid black'});
             $("#QR").append("<div id='ADequate'></div>");
/*                      $("#ADequate")
                             .css({
                                   'height': '254px',
                                   'width': '254px',});*/
            }else if($("#QR").is(":visible")){$("#QR").hide(1000)
            }else if($("#QR").is(":hidden")){$("#QR").show(1000)}
        }
	}
);