	var scrollUp = (function() {
				return function(json) {
					var objScroll = document.getElementById(json.id);
					objScroll.scrollTop = 0;
					objScroll.innerHTML += objScroll.innerHTML;
					if(json.on) {
						function scrollIng() {
							if(objScroll.scrollTop >= objScroll.scrollHeight) {
								objScroll.scrollTop = 0;
							} else {
								objScroll.scrollTop++;
							}
						}
						var myScroll = setInterval(function() {
							scrollIng()
						}, 30);
						objScroll.onmouseover = function() {
							clearInterval(myScroll);
						}
						objScroll.onmouseout = function() {
							myScroll = setInterval(function() {
								scrollIng()
							}, 30);
						}
					} else {
						var timer;

						function startScroll() {
							timer = setInterval(function() {
								scrollUp()
							}, 30);
							objScroll.scrollTop++;
						}

						function scrollUp() {
							if(objScroll.scrollTop % json.height == 0) {
								clearInterval(timer);
								setTimeout(startScroll, 2000);
							} else {
								objScroll.scrollTop++;
								if(objScroll.scrollTop >= objScroll.scrollHeight / 2) {
									objScroll.scrollTop = 0;
								}
							}
						}
						setTimeout(startScroll, 1000);
					}
				}
			})()
