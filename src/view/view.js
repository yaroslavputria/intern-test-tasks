// function View () {

// }

// View.prototype.render = function () {
//   console.log('Render');
// };

// module.exports = View;

define(
	function() {
		function View () {

		}

		View.prototype.render = function () {
		  var h1 = document.createElement("h1");
		  h1.textContent = "View works :)";
		  document.body.appendChild(h1);
		  console.log('Render');
		};
		return View;
	}
);