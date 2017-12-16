// You come upon a very unusual sight; a group of programs here appear to be dancing.

// There are sixteen programs in total, named a through p. They start by standing in a line: a stands in position 0, b stands in position 1, and so on until p, which stands in position 15.

// The programs' dance consists of a sequence of dance moves:

// Spin, written sX, makes X programs move from the end to the front, but maintain their order otherwise. (For example, s3 on abcde produces cdeab).
// Exchange, written xA/B, makes the programs at positions A and B swap places.
// Partner, written pA/B, makes the programs named A and B swap places.
// For example, with only five programs standing in a line (abcde), they could do the following dance:

// s1, a spin of size 1: eabcd.
// x3/4, swapping the last two programs: eabdc.
// pe/b, swapping programs e and b: baedc.
// After finishing their dance, the programs end up in order baedc.

// You watch the dance for a while and record their dance moves (your puzzle input). In what order are the programs standing after their dance?

var testLineup = ["a", "b", "c", "d", "e"];
var testMoves = "s1,x3/4,pe/b";

//Functions take the move and the lineup and return the new lineup

//calls when an s is seen
function spin(move, lineup) {
	//Move: "X" 
	//Take x programs from end and put at front, keep order
	
	//splice them off the end
	var spinners = lineup.splice(lineup.length - move, move);

	//concat back and return
	return spinners.concat(lineup);
}


//calls when an x is seen
function exchange(move, lineup) {
	//Move: "A/B"
	//Swap programs at positions A and B

	//Pull out a and b from move
	var a = parseInt(move.split("/")[0]);
	var b = parseInt(move.split("/")[1]);

	//Capture existing programs at those positions
	var newA = lineup[b];
	var newB = lineup[a];

	//Set lineup
	lineup[a] = newA;
	lineup[b] = newB;

	return lineup;
}



// calls when a p is seen
function partner(move, lineup) {
	//Move "A/B"
	//Swap programs named A and B

	//Pull out a and b from move
	var a = move.split("/")[0];
	var b = move.split("/")[1];

	//Find the index of each one
	var indexOfA = lineup.lastIndexOf(a);
	var indexOfB = lineup.lastIndexOf(b);

	//Set them
	lineup[indexOfA] = b;
	lineup[indexOfB] = a;

	return lineup;
}

//Run them through their paces
function dance(moveList, lineup) {
	var parsedList = moveList.split(",");

	for(var i = 0; i < parsedList.length; i++) {
		switch(parsedList[i].split("")[0]) {
			case "s":
				lineup = spin(parsedList[i].substring(1), lineup);
				break;
			case "x":
				lineup = exchange(parsedList[i].substring(1), lineup);
				break;
			case "p":
				lineup = partner(parsedList[i].substring(1), lineup);
				break;
			default:
				console.log("something has gone wrong");
				break;
		}
	}

	return lineup;
}

console.log(dance(testMoves, testLineup));