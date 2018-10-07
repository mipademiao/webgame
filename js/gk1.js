        window.onload = function () {
        	var z = document.getElementById("h");
        	var a = document.getElementById("box1");
        	var b = document.getElementById("box2");
        	a.style.left = "0px";
        	b.style.left = "300px";
        	var disx = 0;
        	z.onmousedown = function (evt) {
        		var oevent = evt || window.event;
        		disx = oevent.clientX - z.offsetLeft;
        		disa = oevent.clientX - a.offsetLeft;
        		disb = oevent.clientX - b.offsetLeft;
        		document.onmousemove = function (evt) {
        			var oevent = evt || window.event;
        			z.style.left = oevent.clientX - disx + "px";
        			if (impact(z, a)) {
        				a.style.left = oevent.clientX - disa + "px";
        			}
        			if (impact(z, b)) {
        				b.style.left = oevent.clientX - disb + "px";
        			}
        			if (a.style.left < "-30px" && b.style.left >= "400px") {

        				console.log(a.style.left + " " + b.style.left);
        				document.getElementById("wrap").style.backgroundImage = 'url(Images/next.jpg)';
        				document.getElementById("wrap").onclick = objclick;

        				function objclick() {
        					window.location.href = "gk2.html"
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