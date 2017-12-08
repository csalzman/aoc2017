//Now, instead of considering the next digit, it wants you to consider the digit halfway around the circular list. That is, if your list contains 10 items, only include a digit in your sum if the digit 10/2 = 5 steps forward matches it. Fortunately, your list has an even number of elements.

// For example:

// 1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.
// 1221 produces 0, because every comparison is between a 1 and a 2.
// 123425 produces 4, because both 2s match each other, but no other digit has a match.
// 123123 produces 12.
// 12131415 produces 4.

// add them up

var testArray1 = "1212";
var testArray2 = "1221";
var testArray3 = "123425";
var testArray4 = "123123";
var testArray5 = "12131415"

var aoc1data = "5255443714755555317777152441826784321918285999594221531636242944998363716119294845838579943562543247239969555791772392681567883449837982119239536325341263524415397123824358467891963762948723327774545715851542429832119179139914471523515332247317441719184556891362179267368325486642376685657759623876854958721636574219871249645773738597751429959437466876166273755524873351452951411628479352522367714269718514838933283861425982562854845471512652555633922878128558926123935941858532446378815929573452775348599693982834699757734714187831337546474515678577158721751921562145591166634279699299418269158557557996583881642468274618196335267342897498486869925262896125146867124596587989531495891646681528259624674792728146526849711139146268799436334618974547539561587581268886449291817335232859391493839167111246376493191985145848531829344198536568987996894226585837348372958959535969651573516542581144462536574953764413723147957237298324458181291167587791714172674717898567269547766636143732438694473231473258452166457194797819423528139157452148236943283374193561963393846385622218535952591588353565319432285579711881559343544515461962846879685879431767963975654347569385354482226341261768547328749947163864645168428953445396361398873536434931823635522467754782422557998262858297563862492652464526366171218276176258582444923497181776129436396397333976215976731542182878979389362297155819461685361676414725597335759976285597713332688275241271664658286868697167515329811831234324698345159949135474463624749624626518247831448143876183133814263977611564339865466321244399177464822649611969896344874381978986453566979762911155931362394192663943526834148596342268321563885255765614418141828934971927998994739769141789185165461976425151855846739959338649499379657223196885539386154935586794548365861759354865453211721551776997576289811595654171672259129335243531518228282393326395241242185795828261319215164262237957743232558971289145639852148197184265766291885259847236646615935963759631145338159257538114359781854685695429348428884248972177278361353814766653996675994784195827214295462389532422825696456457332417366426619555";

function checkArrayForMatches (stringToSplit) {
	//Take number and split it up into an array
	var arr = stringToSplit.split("");
	
	//Temp storage array for numbers we'll be grabbing later
	var tempArray = [];

	//Store half the array length
	var halfArray = arr.length / 2;
	
	//Loop through array hitting every item
	for(var i = 0; i < arr.length; i++) {
		
		//take digit and check against the halfway point on list
		//If it's past the end of the array
		if (arr[i + halfArray] == undefined) {
			//Subtract the length of the array to get the right number
			if(arr[i] == arr[i + halfArray - arr.length]) {
				//if matches, store, if not, ignore
				tempArray.push(arr[i]);
			}
		}
		else if (arr[i] == arr[i + halfArray]) {
			tempArray.push(arr[i]);
		}
		else {
			//just, like, chill
		}
	}

	//Storage for our final calculation
	var finalNumber = 0;

	//Loop through our tempArray and add it up
	for (var j = 0; j < tempArray.length; j++) {
		finalNumber += parseInt(tempArray[j]);
	}

	//Return the final number
	return finalNumber;
}

console.log(checkArrayForMatches(aoc1data));
// console.log(checkArrayForMatches(testArray4));