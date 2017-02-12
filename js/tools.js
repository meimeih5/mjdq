$(function(){
				$("#optWrap").css({"background":"#0092d8","border":"none"});
				$("#optWrap a").mouseover(function(){
					$("#search").show();
					$("#optWrap").css({"background":"#fff","border":"1px solid #ccc"})
					$("#optWrap").animate({"left":"887px","width":"180px"},500);
				});
				
				$("#phone").hover(
					function(){
						$(this).css("background","#285079");
						$("#ewm").stop(true,true).fadeIn(1000);
					},
					function(){
						$(this).css("background","#0092d8");
						$("#ewm").stop(true,true).fadeOut(1000);
					}
					
				);
				
				
				$("#shopping-car").hover(
					function(){
						$(this).css("background","#285079");
						$("#login-box").css("display","block");
					},
					function(){
						$(this).css("background","#0092d8");
						$("#login-box").css("display","none");
					}
					
				);
				
				$("#register").hover(
					function(){
						$(this).css("background","#285079");
						$("#login-list").slideDown(300);
						$("#login-list").show().animate({"height":"306px"});
					},
					function(){
						$(this).css("background","#0092d8");
						$("#login-list").slideUp(300);
					}
					
				);		
			
			});
			
			$(function(){
				var ord = 1;  //当前图片的下标
				var myTimer = null;
				
				//开始轮播
				myTimer = setInterval(nextImg,3000);
				
				//鼠标进入图片停止播放
				$("#list").mouseover(function(){
					$("#next").show();
					$("#prev").show();
					window.clearInterval(myTimer);
				});	
				//鼠标离开图片继续播放
				$("#list").mouseout(function(){
					$("#next").hide();
					$("#prev").hide();					
					myTimer = setInterval(nextImg,3000);
				});
				
				//鼠标进入按钮
				$("#btn span").mouseover(function(){
					clearInterval(myTimer);
					ord = $(this).index();
					nextImg();
				});
				
				//下一张图片
				$("#next").click(function(){				
					nextImg();
				});
				//上一张图片
				$("#prev").click(function(){													
					prevImg();
				});
				
				function nextImg(){
					ord++;
					if(ord>5){
						$("#btn span").eq(0).addClass("active").siblings().removeClass();
					}			
					$(".banner #list").stop(true,true).animate({left:-(ord)*1200},function(){
						if(ord>5){
							$(this).css("left","-1200px");
							ord = 1;
						}
					});
					$("#btn span").eq(ord-1).addClass("active").siblings().removeClass();
				}				
				function prevImg(){
					ord--;					
					$(".banner #list").stop(true,true).animate({left:-(ord)*1200},function(){
						if(ord<1){
							$(this).css("left","-6000px");
							ord = 5;
						}
					});
					$("#btn span").eq(ord-1).addClass("active").siblings().removeClass();
				}
				
				$(".main-top a img").hover(
					function(){
						
						$(this).stop(true,true).animate({"margin-top":"10px"},500);
					},
					function(){
						$(this).stop(true,true).animate({"margin-top":"20px"},500);
					}
				);
				
				$(".footer-list").toggle(
					function(){
						$(".footer-list-hide").show();
						$(this).css("border-bottom","0");
						$(".last-a").css("background","url(img/index_sprite.png) -123px -198px no-repeat");
					},
					function(){
						$(".footer-list-hide").hide();
						$(this).css("border-bottom","1px solid #ccc");
						$(".last-a").css("background","url(img/index_sprite.png) -138px -198px no-repeat");
					}
					
				);
				
				$("#list-nav").children().mouseover(function(){
					$(this).css("background","#999").siblings().css("background","rgba(0,0,0,0.4)");
					$("#list-aside").show();
				});
				$("#list-nav").children().mouseout(function(){
					$(this).css("background","rgba(0,0,0,0.4)");
					$("#list-aside").hide();
				});	
				
				
			});