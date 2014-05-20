// ==UserScript==
// @name            PluggedN
// @description     PluggedN chrome extension converted for use as a userscript (greasemonkey, etc.)
// @include         http://plug.dj/*
// @exclude         http://plug.dj/_/*
// @require         http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// ==/UserScript==

$.getScript('http://audaxion.github.io/pluggedN/dat.gui.js', 
			function() {
				$.getScript('http://audaxion.github.io/pluggedN/bookmarklet.js');
			});
