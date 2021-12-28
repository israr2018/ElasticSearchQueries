curl -XPOST "http://localhost:9200/sports/_bulk" -H "Content-Type: application/json" -d 
'{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Michael", "birthdate":"1989-10-1", "sport":"Football", "rating": ["5", "4"], "location":"46.22,-68.45", "age":"23","goals": "43","score_weight":"3","role":"midfielder"} 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Bob", "birthdate":"1989-11-2", "sport":"Football", "rating": ["3", "4"], "location":"45.21,-68.35", "age":"33", "goals": "54","score_weight":"2", "role":"forward"} 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Jim", "birthdate":"1988-10-3", "sport":"Football", "rating": ["3", "2"], "location":"45.16,-63.58", "age":"28", "goals": "73", "score_weight":"2", "role":"forward" } 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Joe", "birthdate":"1992-5-20", "sport":"Basketball", "rating": ["4", "3"], "location":"45.22,-68.53", "age":"18", "goals": "848", "score_weight":"3", "role":"midfielder"} 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Tim", "birthdate":"1992-2-28", "sport":"Basketball", "rating": ["3", "3"], "location":"46.22,-68.85", "age":"28","goals": "942", "score_weight":"2","role":"forward"} 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Alfred", "birthdate":"1990-9-9", "sport":"Football", "rating": ["2", "2"], "location":"45.12,-68.35", "age":"25", "goals": "53", "score_weight":"4", "role":"defender"} 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Jeff", "birthdate":"1990-4-1", "sport":"Hockey", "rating": ["2", "3"], "location":"46.12,-68.55", "age":"26","goals": "93","score_weight":"3","role":"midfielder"} 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Will", "birthdate":"1988-3-1", "sport":"Hockey", "rating": ["4", "4"], "location":"46.25,-84.25", "age":"27", "goals": "124", "score_weight":"2", "role":"forward" } 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Mick", "birthdate":"1989-10-1", "sport":"Football", "rating": ["3", "4"], "location":"46.22,-68.45", "age":"35","goals": "56","score_weight":"3", "role":"midfielder"} 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Pong", "birthdate":"1989-11-2", "sport":"Basketball", "rating": ["1", "3"], "location":"45.21,-68.35", "age":"34","goals": "1483","score_weight":"2", "role":"forward"} 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Ray", "birthdate":"1988-10-3", "sport":"Football", "rating": ["2", "2"], "location":"45.16,-63.58", "age":"31","goals": "84", "score_weight":"3", "role":"midfielder" } 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Ping", "birthdate":"1992-5-20", "sport":"Basketball", "rating": ["4", "3"], "location":"45.22,-68.53", "age":"27","goals": "1328", "score_weight":"2", "role":"forward"} 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Duke", "birthdate":"1992-2-28", "sport":"Hockey", "rating": ["5", "2"], "location":"46.22,-68.85", "age":"41","goals": "218", "score_weight":"2", "role":"forward"} 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Hal", "birthdate":"1990-9-9", "sport":"Hockey", "rating": ["4", "2"], "location":"45.12,-68.35", "age":"18","goals": "148", "score_weight":"3", "role":"midfielder"}
{"index":{"_index":"sports","_type":"athlete"}}
{"name":"Charge", "birthdate":"1990-4-1", "sport":"Football", "rating": ["3", "2"], "location":"44.19,-82.55", "age":"19","goals": "34", "score_weight":"4", "role":"defender"} 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Barry", "birthdate":"1988-3-1", "sport":"Football", "rating": ["5", "2"], "location":"36.45,-79.15", "age":"20", "goals": "48", "score_weight":"4", "role":"defender" } 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Bank", "birthdate":"1988-3-1", "sport":"Handball", "rating": ["6", "4"], "location":"46.25,-54.53", "age":"25", "goals": "150", "score_weight":"4", "role":"defender" } 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Bingo", "birthdate":"1988-3-1", "sport":"Handball", "rating": ["10", "7"], "location":"46.25,-68.55", "age":"29", "goals": "143", "score_weight":"3", "role":"midfielder" } 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"James", "birthdate":"1988-3-1", "sport":"Basketball", "rating": ["10", "8"], "location":"41.25,-69.55", "age":"36", "goals": "1284", "score_weight":"2", "role":"forward" } 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Wayne", "birthdate":"1988-3-1", "sport":"Hockey", "rating": ["10", "10"], "location":"46.21,-68.55", "age":"25", "goals": "113", "score_weight":"3", "role":"midfielder" } 
{"index":{"_index":"sports","_type":"athlete"}} 
{"name":"Brady", "birthdate":"1988-3-1", "sport":"Handball", "rating": ["10", "10"], "location":"63.24,-84.55", "age":"29", "goals": "443", "score_weight":"2", "role":"forward" } 
{"index":{"_index":"sports","_type":"athlete"}} {"name":"Lewis", "birthdate":"1988-3-1", "sport":"Football", "rating": ["10", "10"], "location":"56.25,-74.55", "age":"24", "goals": "49", "score_weight":"3", "role":"midfielder" } '
