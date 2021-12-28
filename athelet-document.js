curl -XPUT "http://localhost:9200/sports/" -H "Content-Type: application/json" -d '{
   "mappings":{
      "athlete":{
         "properties":{
            "birthdate":{
               "type":"date",
               "format":"dateOptionalTime"
            },
            "location":{
               "type":"geo_point"
            },
            "name":{
               "type":"keyword"
            },
            "rating":{
               "type":"integer"
            },
            "sport":{
               "type":"keyword"
            },
            "age":{
               "type":"integer"
            },
            "goals":{
               "type":"integer"
            },
            "role":{
               "type":"keyword"
            },
            "score_weight":{
               "type":"float"
            }
         }
      }
   }
}'