window.addEventListener("load", () => {
	var aktuellePosition = window.location.href;

	if (aktuellePosition.includes("#work")){
		video_start();
	}

	if (aktuellePosition.includes("#project6")){
		video2_start();
	}

});

window.addEventListener("hashchange", () => {

	var aktuellePosition = window.location.href;

	if (aktuellePosition.includes("#work")){
		video_start();
	} 

	if (aktuellePosition.includes("#project6")){
		video2_start();
	}

});

function video_start() {
	setTimeout(function(){
		document.getElementById("pcvideo").play();
	},1500);
	
}

function video2_start() {
	setTimeout(function(){
		document.getElementById("pcvideo2").play();
	},1500);
	
}

