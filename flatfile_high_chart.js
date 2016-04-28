//Highchart options

Highcharts.setOptions({
    lang: {
     drillUpText: '? Back to {series.name}'
     }
    });


//Income column graph options
  var incomeOpt = {
  chart: {
   height: 500,
    type:'column',
   }
   ,
   title: {
   text: '',
    margin:50,
    style: {fontSize:30}
   },
   xAxis: {
   type:'category',
    labels:{
    style:{fontSize:13}
    }
   },
   yAxis:{
   title:{text:"Dollar Amount"}
   },
   legend: {
   enabled:true
   },
   plotOptions: {
   series: {
    dataLabels: {
     enabled: true,
      crop:false,
      overflow:"justify",
      inside:false,
      style:{fontSize:10}
     },
     shadow: false
    },
   },
   series: [
     {
     name: '2015 Actual Income',
      data: [{name:"Donations", y: 42703.32, drilldown:false},
             {name:"Program Fees", y: 20796.00, drilldown:false},
             {name:"Event Fees", y: 16596.00, drilldown:false},
             {name:"Team Fundraising", y: 0, drilldown:false},
             {name:"Membership Dues", y: 0, drilldown:false},
             {name:"Transportation Fees", y: 4800.00, drilldown:false}
            ]
     }, {
     name: '2016 Expected Income',
      data: [{name:"Donations", y: 35940.00, drilldown:false},
             {name:"Program Fees", y: 25400.00, drilldown:false},
             {name:"Event Fees", y: 16200.00, drilldown:false},
             {name:"Team Fundraising", y: 3500, drilldown:false},
             {name:"Membership Dues", y: 250, drilldown:false},
             {name:"Transportation Fees", y: 2000.00, drilldown:false}
            ]
     }        
   ]
  };

//Expense column graph options
  var expenseOpt={
  chart: {
   height: 500,
    type:'column'
   },
   title: {
   text: '',
    margin:50,
    style: {fontSize:30, color:"#FFFFFF"}
   },
   xAxis: {
   categories: ["Administrative","Athletics Program","Charity","Community Engagement","Events","Scholarship & Grants","Lion Dance Expenses","Travel"],
    labels:{
    style:{fontSize:13,color:"#ffffff"}
    }
   },
   yAxis:{
   title:{text:"Dollar Amount", style:{color:"#ffffff"}}
   },
   legend: {
   enabled:true,
    itemStyle:{color:"#ffffff"}
   },
   plotOptions: {
   series: {
    dataLabels: {
     enabled: true,
      crop:false,
      overflow:"justify",
      inside:false,
      allowOverlap:false,
      style:{fontSize:10, color:"white"}
     },
     shadow: false
    },
   },
   series: [
     {
     type:'column',
      name: '2015 Actual Expenses',
      data: [4028.80,37221.76,1015.18,2140.00,7958.66,2042.74,9042.39,7000.00]
     }, {
     type:'column',
      name: '2016 Expected Expenses',
      data: [4612,34400,11150,5500,8550,6000,11078,2000]
     }        
   ]
  };

//Pie Drilldown Options

  var pieOpt1={
  chart: {
   height: 500
   },
   title: {
   text: '',
    margin:50,
    style: {fontSize:30}
   },
   plotOptions: {
   series: {
    dataLabels: {
     enabled: true,
      crop:false,
      overflow:"justify",
      inside:false,
      allowOverlap:false,
      style:{fontSize:15}
     },
     shadow: false
    }
   },
   series: [{
            type:'pie',
             name: 'Dollar Amount',
             allowPointSelect:true,      
             center:["50%","50%"],
             dataLabels: {
             format: '{point.name}: <b>{point.percentage:.1f}%</b>'
             },
             size: "80%"
            }],

            };
            

// Render graphs/charts


incomeOpt.chart.renderTo = 'Income';
incomeOpt.title.text = 'CYC Income'
var chart1 = new Highcharts.Chart(incomeOpt);


// Pie Income
pieOpt1.chart.renderTo = 'Pies1';
pieOpt1.title.text = '2015 Actual Income';
var root_node = createTree('2015_actual_income', pieOpt1.title.text)
pieOpt1.series.data = createSeries(root_node);
console.log(pieOpt1.series.data)
//var dseries = createDrilldown(root_node);
//var drilldown = dseries;
var chart3= new Highcharts.Chart(pieOpt1);


// Chart Expenses
  expenseOpt.chart.renderTo = 'Expenses';
  expenseOpt.title.text = 'CYC Expenses';
  expenseOpt.chart.backgroundColor = '#292929';
  var chart2= new Highcharts.Chart(expenseOpt);


/*pieOpt.chart.renderTo = 'Pies2';
 pieOpt.title.text = '2016 Expected Income';
 var chart4= new Highcharts.Chart(pieOpt);
  
  // Pie Expenses
  pieOpt.chart.renderTo = 'Pies3';
  pieOpt.title.text = '2015 Actual Expenses';
  pieOpt.chart.backgroundColor = '#292929';
  pieOpt.title.style = {fontSize:30, color:"#FFFFFF"};
  pieOpt.plotOptions.series.dataLabels.style = {fontSize:15, color:"white"}
  pieOpt.series = [{
                   type:'pie',
                    name: 'Dollar Amount',
                    allowPointSelect:true,
                    data: [{name: 'Administrative 5.7%',y: 4028.8}, {name: 'Athletic Program 52.8%',y: 37221.76}, {name: 'Charity 1.4%',y: 1015.18}, {name: 'CYC Gear 3.0%',y: 2140}, {name: 'Events 11.3%',y: 7958.66}, {name: 'Scholarship & Grants 2.9%',y: 2042.74    }, {name: 'Lion Dance Expenses 12.8%',y: 9042.39}, {name: 'Travel 9.9%',y: 7000}],
                    center:["50%","50%"],
                    size: "80%"
                   }];
  var chart5= new Highcharts.Chart(pieOpt);
  pieOpt.chart.renderTo = 'Pies4';
  pieOpt.title.text = '2016 Expected Expenses';
  pieOpt.chart.backgroundColor = '#292929';
  pieOpt.title.style = {fontSize:30, color:"#FFFFFF"};
  pieOpt.plotOptions.series.dataLabels.style = {fontSize:15, color:"white"}
  pieOpt.series = [{
                   type:'pie',
                    name: 'Dollar Amount',
                    allowPointSelect:true,
                    data: [{name: 'Administrative 5.5%',y: 4612}, {name: 'Athletic Program 41.3%',y: 34400}, {name: 'Charity 13.4%',y: 11150}, {name: 'Community Engagement 6.6%',y: 5500}, {name: 'Events 10.3%',y: 8550}, {name: 'Scholarship & Grants 7.2%',y: 6000}, {name: 'Lion Dance Expenses 13.3%',y: 11078}, {name: 'Travel 2.4%',y: 2000}],
                    center:["50%","50%"],
                    size: "80%"
                   }];
  var chart6= new Highcharts.Chart(pieOpt);
  */


//USEFUL FUNCTIONS
      function addBranch(parent, categories, ind, dollar){
      			parent['dollar'] = parent['dollar'] + dollar;
            if(ind == categories.length){
            		return parent;
            }
            find_ind = parent['children'].findIndex(function(p){return p.category == categories[ind] });
						if(find_ind == -1){
            		
            		parent['children'].push({category:categories[ind], dollar:0, children:[]});
                return addBranch(parent['children'].find(function(p){return p.category==categories[ind]}), categories, ind+1, dollar);
            }
            
            return addBranch(parent['children'][find_ind], categories,ind+1, dollar);
        }
        
    function createSeries(tree_root){
    		var series = "[";
        tree_root['children'].forEach(function(data){
        		
        		series = series + "{name:'" + data.category + "'," + "y:"+  data.dollar + ",drilldown:'" + data.category+ data.dollar + "'},";
        });
        series = series + "]";
        return series;
    }
    
    function createDrilldown(node){
    	//console.log(node);
      if(node['children'].length == 0){
      		return "";
      }
      
      var series = "";
      node['children'].forEach(function(data){
      			//console.log(data.category);
            //console.log(data['children'].length);
      		series = series + createSeriesObject(data);
      		series = series + createDrilldown(data);
		                  
            
      });
      			return series;
      }
        
      
      
    function createSeriesObject(data){
		    var series = "{type:'pie',name:'" + data.category + "'," + "id:'" + data.category+data.dollar + "'," + "data:[";
        
        	  data['children'].forEach(function(child){
            	if(child['children'].length == 0){
        			series = series + "{name:'" + child.category + "'," + "y:" + child.dollar + "},";
              }
              else{
        			series = series + "{name:'" + child.category + "'," + "y:" + child.dollar + ",drilldown:'" + child.category+child.dollar+ "'},";
        
        }
        });        
        
        series = series + "], dataLabels:{format: '{point.name}: <b>{point.percentage:.1f}%</b>'}},";
        return series;
}

function createTree(csv_id, category_name){
var csv = document.getElementById(csv_id).innerHTML;
var rows = csv.split('\n');
var root_node = {category:category_name, dollar:0, children:[]};
rows.forEach(function(row){
  		
  		var categories = row.split(",")[0];
			var dollar = row.split(",")[1];    	 
  		if(categories != "" & dollar != "" & !categories.includes("TOTAL")){
        	dollar = Number(dollar);
        	var cat_arr = categories.split(":");
          addBranch(root_node, cat_arr, 0, dollar);
     }
     
  });
     return root_node;
}