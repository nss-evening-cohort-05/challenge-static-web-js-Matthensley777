function christmasTreeVars() {
	var treeSize = document.getElementById("size").value;
	var treeCharictor = document.getElementById("char").value;
	var tree =  {height:treeSize*1,  char:treeCharictor};
	growTree(tree);
	
}	


function growTree(treeObject) {
	
	 for (var i = 0; i < treeObject.height; i++){
		var chars = 2*i+1;
		var spaces = treeObject.height-(i+1);
		
		console.log(" ".repeat(spaces)+treeObject.char.repeat(chars))
		
	 }



}

// add event listener to "Grow Your tree" button
document.getElementById("button").addEventListener("click", christmasTreeVars);
document.getElementById("button").addEventListener("click", growTree);
//when you click it fires off christmasTreeVars

