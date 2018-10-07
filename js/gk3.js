        window.onload = function () {
        	var z = document.getElementById("h");
        	var s = document.getElementById("s");
        	var a = document.getElementById("box1");
        	var hwall = document.getElementById("hwall");
        	var swall = document.getElementById("swall");
        	a.style.left = "0px";
        	a.style.top = "0px";
        	var disx = 0;
        	var disy = 0;
        	z.onmousedown = function (evt) {
        		var oevent = evt || window.event;
        		disx = oevent.clientX - z.offsetLeft;
        		disa1 = oevent.clientX - a.offsetLeft;
        		document.onmousemove = function (evt) {
        			var oevent = evt || window.event;
        			z.style.left = oevent.clientX - disx + "px";
        			if (impact(s, swall)) {
        				console.log("break");
        				document.onmousemove = null;
        				document.onmouseup = null;

        			}
        			if (impact(z, s)) {
        				s.style.left = oevent.clientX - disx - 50 + "px";
        				if (impact(a, s)) {
        					a.style.left = oevent.clientX - disx - 100 + "px";
        				}
        			}

        			if (a.style.left < "-50px") {
        				document.getElementById("wrap").style.backgroundImage = 'url(Images/finish.png)';
        				document.getElementById("swall").style.backgroundImage = "url(Images/finish.png)";
        				document.getElementById("hwall").style.backgroundImage = "url(Images/finish.png)";

        			}
        		}
        		document.onmouseup = function () {
        			document.onmousemove = null;
        			document.onmouseup = null;
        		}
        		return false;
        	}

        	s.onmousedown = function (evt) {
        		var oevent = evt || window.event;
        		disy = oevent.clientY - s.offsetTop;
        		disa2 = oevent.clientY - a.offsetTop;
        		disz = oevent.clientY - z.offsetTop;
        		document.onmousemove = function (evt) {
        			var oevent = evt || window.event;
        			s.style.top = oevent.clientY - disy + "px";
        			if (impact(h, hwall)) {
        				console.log("break");
        				document.onmousemove = null;
        				document.onmouseup = null;

        			}

        			if (impact(s, z)) {
        				z.style.top = oevent.clientY - disz + "px";
        			}
        			
        		}
        		document.onmouseup = function () {
        			document.onmousemove = null;
        			document.onmouseup = null;
        		}
        		return false;
        	}
        }

        function impact(obj, dobj) {
        	var o = {
        		x: getDefaultStyle(obj, 'left'),
        		y: getDefaultStyle(obj, 'top'),
        		w: getDefaultStyle(obj, 'width'),
        		h: getDefaultStyle(obj, 'height')
        	}
        	var d = {
        		x: getDefaultStyle(dobj, 'left'),
        		y: getDefaultStyle(dobj, 'top'),
        		w: getDefaultStyle(dobj, 'width'),
        		h: getDefaultStyle(dobj, 'height')
        	}
        	var px, py;
        	px = o.x <= d.x ? d.x : o.x;
        	py = o.y <= d.y ? d.y : o.y;
        	if (px >= o.x && px <= o.x + o.w && py >= o.y && py <= o.y + o.h && px >= d.x && px <= d.x + d.w && py >= d.y && py <= d.y + d.h) {
        		return true;
        	} else {
        		return false;
        	}
        }

        function getDefaultStyle(obj, attribute) {
        	return parseInt(obj.currentStyle ? obj.currentStyle[attribute] : document.defaultView.getComputedStyle(obj, false)[attribute]);
        }