!function(a){"use strict";var n;(n=jQuery).fn.fitText=function(e,i){var r=e||1,t=n.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},i);return this.each(function(){var e=n(this),i=function(){e.css("font-size",Math.max(Math.min(e.width()/(10*r),parseFloat(t.maxFontSize)),parseFloat(t.minFontSize)))};i(),n(window).on("resize.fittext orientationchange.fittext",i)})},jQuery(document).ready(function(){jQuery(".cp-info-bar").each(function(){var e=jQuery(this).data("placeholder-color"),i=jQuery(this).data("class"),r=e,t="."+i+" ::-webkit-input-placeholder {color: "+r+"!important;} ."+i+" :-moz-placeholder {color: "+r+"!important;} ."+i+" ::-moz-placeholder {color: "+r+"!important;}";jQuery("<style type='text/css'>"+t+"</style>").appendTo("head")})}),jQuery(document).on("ib_conversion_done",function(e,i){0<!jQuery(i).parents(".cp-form-container").find(".cp-email").length&&(0<jQuery(i).parents(".cp-form-container").find('[name="only_conversion"]').length&&jQuery(i).addClass("cp-disabled"))}),jQuery(document).on("infobarOpen",function(e,i){var r=i.data("close-btnonload-delay");r=Math.round(1e3*r),jQuery("html").addClass("cp-ib-open"),r&&setTimeout(function(){i.find(".ib-close").removeClass("cp-hide-close")},r);var t=i.data("close-after");jQuery.idleTimer("destroy"),void 0!==t&&(t*=1e3,setTimeout(function(){i.addClass("cp-close-after-x")},t),jQuery(document).idleTimer({timeout:t,idle:!1})),0<jQuery(".kleo-carousel-features-pager").length&&setTimeout(function(){a(window).trigger("resize")},1500)}),jQuery(document).ready(function(){jQuery(".cp-info-bar").each(function(e){if(jQuery("body").hasClass("admin-bar")){var i=jQuery("#wpadminbar").outerHeight();jQuery(this).hasClass("cp-pos-top")&&!jQuery(this).hasClass("cp-info-bar-inline")&&jQuery(this).css("top",i+"px")}var r=jQuery(this).data("inactive-time");void 0!==r&&(r*=1e3,jQuery(document).idleTimer({timeout:r,idle:!1}))}),jQuery(".ib-close").on("click",function(e){e.preventDefault();var i=jQuery(this).parents(".cp-info-bar");jQuery(document).trigger("cp_close_info_bar",[i])})})}(jQuery),function(n){"use strict";function o(e){return new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i).test(e)}function a(p){var f=jQuery(p),e=f.serialize(),m=jQuery(p).parents(".global_info_bar_container").find(".cp-msg-on-submit"),y=(jQuery(p).parents(".global_info_bar_container").find(".cp-form-container"),jQuery(p).parents(".global_info_bar_container").find(".cp-form-processing")),F=jQuery(p).parents(".global_info_bar_container"),h=jQuery(p).parents(".global_info_bar_container").find(".cp-form-processing-wrap"),v=jQuery(p).parents(".global_info_bar_container"),j=F.find(".cp-tooltip-icon").data("classes"),Q=jQuery(p).parents(".global_info_bar_container").find(".ib-close"),b=F.data("conversion-cookie-time"),_=jQuery(p).parents(".global_info_bar_container").data("redirect-lead-data"),g=jQuery(p).parents(".global_info_bar_container").data("redirect-to"),x=jQuery(p).parents(".global_info_bar_container").data("form-action"),C=jQuery(p).parents(".global_info_bar_container").data("form-action-time"),i=(C=parseInt(1e3*C),F.data("parent-style"));if(void 0!==i)var D=i;else D=F.data("info_bar-id");var w="",T="",k="";f.find(".cp-input").each(function(e){var i,r,t=jQuery(this);if(!t.hasClass("cp-submit-button")){var a=t.attr("name"),n=t.val(),s=a.replace(/param/gi,function(e){return""});s=(s=s.replace("[","")).replace("]",""),w+=0!=e?"&":"",w+=s+"="+n,!!t.attr("required")&&(i=t,(r=n).trim()&&(i.hasClass("cp-email")?o(r):!i.hasClass("cp-textfeild")||0!=/^[a-zA-Z0-9- ]*$/.test(r))?t.removeClass("cp-input-error"):(!1,t.addClass("cp-input-error")))}});var t=0,a="";f.find("select, textarea, input").each(function(e,i){if(jQuery(i).prop("required"))if("checkbox"==jQuery(i).attr("type")&&0==n(this).prop("checked"))t++,setTimeout(function(){jQuery(i).addClass("cp-error")},100),r=jQuery(i).attr("name"),a+=r+" is required \n";else if(jQuery(i).val()){if(jQuery(i).hasClass("cp-email"))if(o(jQuery(i).val()))jQuery(i).removeClass("cp-error");else{setTimeout(function(){jQuery(i).addClass("cp-error")},100),t++;var r=jQuery(i).attr("name")||"";console.log(r+" is required \n")}else jQuery(i).removeClass("cp-error")}else t++,setTimeout(function(){jQuery(i).addClass("cp-error")},100),r=jQuery(i).attr("name"),a+=r+" is required \n"}),0<t?console.log(a):(h.show(),m.fadeOut(120,function(){jQuery(this).show().css({visibility:"hidden"}),Q.show().css({visibility:"hidden"})}),y.hide().css({visibility:"visible"}).fadeIn(100),jQuery.ajax({url:smile_ajax.url,data:e,type:"POST",dataType:"HTML",success:function(e){b&&function(e,i,r){if(r){var t=new Date;t.setTime(t.getTime()+24*r*60*60*1e3);var a="; expires="+t.toGMTString()}else a="";document.cookie=e+"="+i+a+"; path=/"}(D,!0,b);var i=JSON.parse(e),r="",t="";void 0!==i.status&&null!=i.status&&(r=i.status),void 0!==i.cf_response&&null!=i.cf_response&&(k=i.cf_response,jQuery(document).trigger("cp_cf_response_done",[this,F,k])),i.email_status?f.find(".cp-email").removeClass("cp-error"):(setTimeout(function(){f.find(".cp-email").addClass("cp-error")},100),f.find(".cp-email").trigger("focus"));var a=void 0!==i.detailed_msg&&null!==i.detailed_msg?i.detailed_msg:"";if(""!==a&&null!==a&&(a="<h5>Here is More Information:</h5><div class='cp-detailed-message'>"+a+"</div>",a+="<div class='cp-admin-error-notice'>Read How to Fix This, click <a target='_blank' rel='noopener' href='https://www.convertplug.com/plus/docs/something-went-wrong/'>here</a></div>",a+="<div class='cp-go-back'>Go Back</div>",t+='<div class="cp-only-admin-msg">[Only you can see this message]</div>'),i.message=i.message.replace(/\\/g,""),"Invalid Secret Key for Google Recaptcha"==i.detailed_msg&&(setTimeout(function(){f.find(".g-recaptcha").addClass("cp-error")},100),f.find(".g-recaptcha").trigger("focus")),void 0!==i.message&&null!=i.message&&(m.hide().css({visibility:"visible"}).fadeIn(120),Q.hide().css({visibility:"visible"}).fadeIn(120),t+='<div class="cp-m-'+r+'"><div class="cp-error-msg">'+i.message+"</div>"+a+"</div>",m.html(t),v.addClass("cp-form-submit-"+r)),void 0!==i.action&&null!=i.action&&(y.fadeOut(100,function(){jQuery(this).show().css({visibility:"hidden"})}),m.hide().css({visibility:"visible"}).fadeIn(120),Q.hide().css({visibility:"visible"}).fadeIn(120),"success"===r))if(jQuery("head").append('<style class="cp-tooltip-css">.tip.'+j+"{display:none }</style>"),"redirect"===i.action){h.hide(),F.hide();var n=i.url,s="";s=-1<n.indexOf("?")?"&":"?";var o=n+s+decodeURI(w);if(o=1==_?o:i.url,"download"!==g)T=g,""==window.open(o,"_"+T)&&(document.location.href=o);else if(""!==o){var u=o.split(",");jQuery.each(u,function(e,i){var r,t,a,n;r=o=i,t=jQuery("<a>"),a=r.lastIndexOf("/")+1,n=r.substr(a),t.attr("href",r),t.attr("download",n),t.text("cpro_anchor_link"),t.addClass("cplus_dummy_anchor"),t.attr("target","_blank"),jQuery("body").append(t),jQuery(".cplus_dummy_anchor")[0].click(),setTimeout(function(){jQuery(".cplus_dummy_anchor").remove()},500)})}}else{h.show();var c=3e3;if("disappear"==x?(F.removeClass("cp-hide-inline-style"),F.removeClass("cp-close-ifb"),c=C,setTimeout(function(){F.hasClass("cp-info-bar-inline")&&F.addClass("cp-hide-inline-style"),F.hasClass("cp-ifb-with-toggle")&&F.addClass("cp-close-ifb"),jQuery(document).trigger("cp_close_info_bar",[F])},C)):"reappear"==x&&(c=C,setTimeout(function(){m.empty(),h.css({display:"none"}),m.removeAttr("style"),y.removeAttr("style"),f.trigger("reset")},C)),0<jQuery(p).find("a").length){var d=jQuery(p).find("a").attr("href"),l=jQuery(p).find("a").attr("target");""!=l&&void 0!==l||(l="_self"),""==d&&"#"==d||window.open(d,l)}F.hasClass("cp-do-not-close-inline")||setTimeout(function(){F.addClass("cp-hide-inline-style"),jQuery(document).trigger("cp_close_info_bar",[F])},c)}},error:function(e){h.hide(),y.fadeOut(100,function(){jQuery(this).show().css({visibility:"hidden"})})}}))}jQuery(document).ready(function(){jQuery(".cp-info-bar-container").find(".smile-optin-form").each(function(e,t){jQuery(t).find("input").keypress(function(e){13==e.which&&(e.preventDefault(),a(t))}),jQuery(t).find(".btn-subscribe").on("click",function(e){if(e.preventDefault,jQuery(t).find(".cp-input").removeClass("cp-error"),!jQuery(this).hasClass("cp-disabled")){a(t),jQuery(document).trigger("ib_conversion_done",[this]);var i=jQuery(this).attr("data-redirect-link")||"",r=jQuery(this).attr("data-redirect-link-target")||"_blank";"undefined"!=i&&""!=i&&(navigator.userAgent.toLowerCase().match(/(ipad|iphone)/)?document.location=i:window.open(i,r))}e.preventDefault()})}),jQuery(document).on("click",".cp-form-submit-error",function(e){var i=jQuery(this).find(".cp-form-processing-wrap"),r=jQuery(this).find(".cp-tooltip-icon").data("classes"),t=jQuery(this).find(".cp-msg-on-submit");jQuery(this).find(".cp-form-processing");i.hide(),jQuery(this).removeClass("cp-form-submit-error"),t.html(""),t.removeAttr("style"),jQuery("head").append('<style class="cp-tooltip-css">.tip.'+r+"{display:block }</style>")})})}(jQuery);