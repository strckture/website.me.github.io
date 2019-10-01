window.addEventListener("load", () => {
	var aktuellePosition = window.location.href;

	if (aktuellePosition.includes("#work")){
		video_start();
	}

});

window.addEventListener("hashchange", () => {

	var aktuellePosition = window.location.href;

	if (aktuellePosition.includes("#work")){
		video_start();
	} 
});

function video_start() {
	setTimeout(function(){
		document.getElementById("videophone_background").play();
		document.getElementById("video_start").play();
	},2000);
	
}
