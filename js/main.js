
var data_attendaces = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
var data_forecast = [5, 5, 5, 5, 5, 6, 7, 7, 8, 8, 8, 10, 10, 12, 15, 16, 19, 19, 22, 22, 20, 16, 15, 10];
var data_breaches = [2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5];

new Chart(document.getElementById("bar-chart"), {
	type: 'bar',
	data: {
		labels: [
			"01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", 
			"13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"
		],
		datasets: [
			{
				label: "Attendaces",
				backgroundColor: "#3e95cd",
				data: data_attendaces
			},
			{
				label: "Forecast",
				backgroundColor: "#8e5ea2",
				data: data_forecast
			},
			{
				label: "Breaches",
				backgroundColor: "#45da78",
				data: data_breaches
			}
		]
	},
	options: {
		title: {
			display: true,
			text: 'Status'
		}
	}
});

$(document).ready(function() {

	function draw_table() {
		var td_width = ($("#bar-chart").width() - 50) / 24;

		var tr_attendaces = "<tr>";
		var tr_forecast = "<tr>";
		var tr_breaches = "<tr>";

		tr_attendaces += "<td style='width: 100px;'>Attendaces</td>";
		tr_forecast += "<td style='width: 100px;'>Forecast</td>";
		tr_breaches += "<td style='width: 100px;'>Breaches</td>";

		for (let i in data_attendaces) {
			tr_attendaces += "<td style='text-align: center; width: " + td_width + "px;'>" + data_attendaces[i] + "</td>";
		}
		for (let i in data_forecast) {
			tr_forecast += "<td style='text-align: center;'>" + data_forecast[i] + "</td>";
		}
		for (let i in data_breaches) {
			tr_breaches += "<td style='text-align: center;'>" + data_breaches[i] + "</td>";
		}

		tr_attendaces += "</tr>";
		tr_forecast += "</tr>";
		tr_breaches += "</tr>";

		var total_html = tr_attendaces + tr_forecast + tr_breaches;

		$("#bar-chart-values tbody").html(total_html);
	}

	draw_table();

	$(window).resize(function() {
		draw_table();
	});

});