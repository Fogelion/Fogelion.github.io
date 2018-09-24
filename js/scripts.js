// $(document).ready(function() {
$(function() {
  let switcher = function(btn) {
    if (btn === "btn_about") {
			var removeLeft = "normal_side hide_side";
			var removeCentral = "left_central normal_central";
			var removeRight = "normal_side hide_side";
			var addLeft = "wide_side";
			var addCentral = "right_central";
			var addRight = "hide_side";
    } else if (btn === "btn_works") {
			var removeLeft = "normal_side wide_side";
			var removeCentral = "normal_side right_central";
			var removeRight = "normal_side hide_side";
			var addLeft = "hide_side";
			var addCentral = "left_central";
			var addRight = "wide_side";
    } else if (btn === "logo") {
			var removeLeft = "wide_side hide_side";
			var removeCentral = "left_central right_central";
			var removeRight = "wide_side hide_side";
			var addLeft = "normal_side";
			var addCentral = "normal_central";
			var addRight = "normal_side";
    }
    $("#info").removeClass(removeLeft).addClass(addLeft);
    $("#navigation").removeClass(removeCentral).addClass(addCentral);
    $("#examples").removeClass(removeRight).addClass(addRight);
  };
  $("#btns").on("click", function(data) {
    switcher(data.target.id);
    console.log(data);
    console.log(data.target.id);
  })


});