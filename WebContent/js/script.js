$(document).ready(function() {

	console.log("jQuery loaded!");

	$("#view_all_btn").click(function() {

		$.ajax({
			url: "http://localhost:8080/rest-demo/rest/products/viewall"
		}).then(function(data) {

			console.log(data);

		})

	})
	
	$("#add_new_btn").click(function() {
		
		let id = $("#id").val();
		let name = $("#name").val();
		let price = $("#price").val();

		$.ajax({
			url: "http://localhost:8080/rest-demo/rest/products/create",
			type: "POST",
			data: JSON.stringify({
				"id": id,
				"name": name,
				"price": price
			}),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function() {
				console.log("Success");
				window.location.href = "http://localhost:8080/rest-demo-client-jqueryajax/index.html";
			}
		});
	})

})