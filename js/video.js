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
		document.getElementById("video_background").play();
	},2000);
	
}
