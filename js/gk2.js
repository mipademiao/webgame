        window.onload = function () {
        	var z = document.getElementById("h");
        	var s = document.getElementById("s");
        	var a = document.getElementById("box1");
        	var b = document.getElementById("box2");
        	var c = document.getElementById("box3");
        	a.style.left = "150px";
        	b.style.left = "300px";
        	c.style.left = "300px";
        	a.style.top = "0px";
        	b.style.top = "0px";
        	c.style.top = "50px";
        	z.style.top = "100px";
        	var disx = 0;
        	var disy = 0;
        	z.onmousedown = function (evt) {
        		var oevent = evt || window.event;
        		disx = oevent.clientX - z.offsetLeft;
        		disa1 = oevent.clientX - a.offsetLeft;
        		disb1 = oevent.clientX - b.offsetLeft;
        		disc1 = oevent.clientX - c.offsetLeft;
        		document.onmousemove = function (evt) {
        			var oevent = evt || window.event;
        			z.style.left = oevent.clientX - disx + "px";
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
        		disb2 = oevent.clientY - b.offsetTop;
        		disc2 = oevent.clientY - c.offsetTop;
        		disz = oevent.clientY - z.offsetTop;
        		document.onmousemove = function (evt) {
        			var oevent = evt || window.event;
        			s.style.top = oevent.clientY - disy + "px";
        			if (impact(s, z)) {
        				z.style.top = oevent.clientY - disz + "px";
        			}
        			if (impact(z, a)) {
        				a.style.top = oevent.clientY - disa2 + "px";
        			}
        			if (impact(z, b)) {
        				b.style.top = oevent.clientY - disb2 + "px";
        				if (impact(b, c)) {
        					c.style.top = oevent.clientY - disb2 + "px";
        				}
        			}
        			if (impact(z, c)) {
        				c.style.top = oevent.clientY - disc2 + "px";
        			}
        			if (z.style.top < 0) {
        				consol.log("z " + z.style.top);
        				z.onmousedown = null;
        			}
        			//c.style.top会到100多
        			if (a.style.top < "-50px" && b.style.top < "-50px") {
        				if (c.style.top < "-50px")
        					document.getElementById("wrap").style.backgroundImage = 'url(Images/next.jpg)';
        				document.getElementById("wrap").onclick = objclick;

        				function objclick() {
        					window.location.href = "gk3.html"
        				};
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