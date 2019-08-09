window.addEventListener("load", () => {
	var aktuellePosition = window.location.href;

	if (aktuellePosition.includes("#contact")){
		paint();
	}

});

window.addEventListener("hashchange", () => {

	var aktuellePosition = window.location.href;

	if (aktuellePosition.includes("#contact")){
		paint();
	} 

});

function paint() {
	const canvas = document.querySelector("#paint");

		const ctx = canvas.getContext("2d");

		//Resizing
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;

		//variables 
		let painting = false; 

		function startPosition(e){
			painting = true;
			draw(e);
		}

		function finishedPosition(){
			painting = false; 
			ctx.beginPath();
		}

		function draw(e) {
			if (!painting) return;
			ctx.lineWidth = 4;     
			ctx.lineCap = "round";
			ctx.strokeStyle = "#67FCF1";

			ctx.lineTo(e.clientX, e.clientY);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(e.clientX, e.clientY);
		}

		//EventListeners 
		canvas.addEventListener("mousedown", startPosition);
		canvas.addEventListener("mouseup", finishedPosition);
		canvas.addEventListener("mousemove", draw);
	};
