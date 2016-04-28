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