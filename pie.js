var dataPoints = [];
	 
        function getDataPointsFromCSV(csv) {
            var dataPoints = csvLines = points = [];
            csvLines = csv.split(/[\r?\n|\r|\n]+/);         
            points0 = csvLines[0].split(",");
            points = csvLines[6].split(",");
            for (var i = 0; i < points.length; i++)
            	{
            		dataPoints.push({
            			y: parseFloat(points[i]),
            			label: String(points0[i])
            		});
            	}
            return dataPoints;
        }
	
	$.get("risk_distrctwise_ST.csv", function(data) {
	    var chart = new CanvasJS.Chart("chartContainer", {
		    title: {
		         text: "Chart from CSV",
		    },
		    
		    data: [{
		         type: "pie",
		         yValueFormatString: "##0.00\"%\"",
				 indexLabel: "{label} {y}",
		         dataPoints: getDataPointsFromCSV(data)
		      }]
	     });
		
	      chart.render();

	});