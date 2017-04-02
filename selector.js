/**
 * @author ganas
 */

var objects = 5;
var image = "ex.png";
var objInfo = 	[["Example 1 This is an example text", "Example 1", "Example 1"], 
				["Example 2", "Example 2", "Example 2"],
				["Example 3", "Example 3", "Example 3"],
				["Example 4", "Example 4", "Example 4"],
				["Example 5", "Example 5", "Example 5"]];

function selector()
{
	var i,j;
	for(i=0; i<objects; i++)
	{
		$( "#selector ul.selectImages" ).append( "<li class='nselobj' id='option"+i+"'><img src='"+image+"' /></li>" );
	}
	var selectorWidth = $( "#selector ul.selectImages #option0 img" ).width()*objects + $( "#selector ul.selectImages #option0" ).css("padding-left").split("px")[0]*objects + $( "#selector ul.selectImages #option0" ).css("padding-right").split("px")[0]*objects+50;
	$( "#selector" ).css("width", selectorWidth);
	
	$( "#selector ul" ).on("click", ".nselobj", function() {
		var id = $( this ).attr("id").split("option")[1];
		for(i=0; i<=id; i++)
		{
			$( "#selector ul.selectImages #option"+i ).attr("class", "selobj");
			$( "#selector ul.selectImages #option"+i+" img" ).css("opacity", "1");
		}
		var circlePos = $( "#selector ul.selectImages #option"+id+" img" ).offset().left+5;
		$( "#selector .line .circle" ).css("left", circlePos+"px");
		objectInfo(id);
	});
	
	$( "#selector ul" ).on("click", ".selobj", function() {
		var id = $( this ).attr("id").split("option")[1];
		for(i=objects; i>id; i--)
		{
			$( "#selector ul.selectImages #option"+i ).attr("class", "nselobj");
			$( "#selector ul.selectImages #option"+i+" img" ).css("opacity", "0.5");
		}
		var circlePos = $( "#selector ul.selectImages #option"+id+" img" ).offset().left+5;
		$( "#selector .line .circle" ).css("left", circlePos+"px");
		objectInfo(id);
	});
}


function objectInfo(id) {
	$( "#selector ul.selectInfo" ).empty();
		for(j=0; j<objInfo[0].length; j++)
		{
			$( "#selector ul.selectInfo" ).append("<li>"+objInfo[id][j]+"</li>");
		}
		var maxHeight = Math.max.apply(null, $( "#selector ul.selectInfo li" ).map(function ()
		{
   			return $(this).height();
		}).get());
		$( "#selector ul.selectInfo li" ).css("height", maxHeight+"px");
}
