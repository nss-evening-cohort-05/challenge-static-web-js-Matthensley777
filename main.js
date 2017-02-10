function christmasTree(treeSize) {
	var starTree;
}	
// Create an array that contains the letters of the alphabet
var tree = "*"

// The stackLetter function should accept the array as the sole argument
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
 
var treeStack = [];
 for (var i = 0; i < tree.length; i++) {
 	
 	treeStack.push(tree[i]);
 	if(i % 3 === 2)
 	treeStack.push(" ");


 console.log(treeStack.toString().replace(/,/g, ""));
 }


// Invoke the function and pass in the array
stackLetters(tree)



	alert(Both fields must have value!);
}

// for (i=0;i<=5;i++) 
// {
// for(j=0; j<=i; j++)
// {
// document.write("*");
// }
// document.write("<br>");
// }

// for (int i = 0; i < 4; i++) 
//             System.out.println("   *******".substring(i, 4 + 2*i));