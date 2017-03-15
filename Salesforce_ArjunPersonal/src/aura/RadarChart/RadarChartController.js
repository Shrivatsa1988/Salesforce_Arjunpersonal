({
	getChart: function(component) {
var data = {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
 datasets: [
 {
 fillColor: &amp;quot;rgba(111,187,205,1)&amp;quot;,
 strokeColor: &amp;quot;rgba(111,187,205,0.2)&amp;quot;,
 data: [100, 200, 300, 50, 500, 600, 100, 300, 1000, 200, 100, 300]
 }
 ]
 }
 var options = { responsive: true };
 
//get the canvas element defined in the component
 var element = component.find(&amp;quot;chart&amp;quot;).getElement();
 
//Get the context of the canvas element we want to select
 var ctx = element.getContext(&amp;quot;2d&amp;quot;);
 
var myBarChart = new Chart(ctx).Bar(data, options);
}
})