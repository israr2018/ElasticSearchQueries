curl -X POST "localhost:9200/sports/athlete/_search?size=0&pretty" -H 'Content-Type: application/json' -d '{
   "aggs":{
      "defender_filter":{
         "filter":{
            "term":{
               "role":"defender"
            }
         },
         "aggs":{
            "avg_goals":{
               "avg":{
                  "field":"goals"
               }
            }
         }
      }
   }
}'

// out put
"aggregations":{
   "defender_filter":{
      "doc_count":4,
      "avg_goals":{
         "value":71.25
      }
   }
}
//query
curl -X GET "localhost:9200/sports/athlete/_search?size=0&pretty" -H 'Content-Type: application/json' -d '{
   "aggs":{
      "athletes":{
         "filters":{
            "filters":{
               "defenders":{
                  "term":{
                     "role":"defender"
                  }
               },
               "forwards":{
                  "term":{
                     "role":"forward"
                  }
               }
            }
         },
         "aggs":{
            "avg_goals":{
               "avg":{
                  "field":"goals"
               }
            }
         }
      }
   }
}'


//out put

"aggregations":{
   "athletes":{
      "buckets":{
         "defenders":{
            "doc_count":4,
            "avg_goals":{
               "value":71.25
            }
         },
         "forwards":{
            "doc_count":9,
            "avg_goals":{
               "value":661.0
            }
         }
      }
   }
}
//Terms Aggregation
//A terms aggregation searches for unique values in the specified field of your documents and builds buckets for each unique value found.
Unlike the filter(s) aggregation, the task of the terms aggregation is not to limit the results to certain value but to find all
unique values for a given field in your documents.

curl -X POST "localhost:9200/sports/athlete/_search?size=0&pretty" -H 'Content-Type: application/json' -d '{
   "aggs":{
      "sports":{
         "terms":{
            "field":"sport"
         },
         "aggs":{
            "avg_scoring":{
               "avg":{
                  "field":"goals"
               }
            }
         }
      }
   }
}'
// out put
"aggregations":{
   "sports":{
      "doc_count_error_upper_bound":0,
      "sum_other_doc_count":0,
      "buckets":[
         {
            "key":"Football",
            "doc_count":9,
            "avg_scoring":{
               "value":54.888888888888886
            }
         },
         {
            "key":"Basketball",
            "doc_count":5,
            "avg_scoring":{
               "value":1177.0
            }
         },
         {
            "key":"Hockey",
            "doc_count":5,
            "avg_scoring":{
               "value":139.2
            }
         },
         {
            "key":"Handball",
            "doc_count":3,
            "avg_scoring":{
               "value":245.33333333333334
            }
         }
      ]
   }
}
//Histogram Aggregation
The Histogram aggregation allows us to construct buckets based on the specified intervals. 
The values that fall into each interval will form an interval bucket. For example, 
  let’s assume we want to apply the histogram aggregation on the age field using a 5-years-interval. 
  In this case, the histogram aggregation will find the minimum and maximum age in 

curl -X POST "localhost:9200/sports/athlete/_search?size=0&pretty" -H 'Content-Type: application/json' -d '{
   "aggs":{
      "basketball_filter":{
         "filter":{
            "term":{
               "sport":"Basketball"
            }
         },
         "aggs":{
            "goals_histogram":{
               "histogram":{
                  "field":"goals",
                  "interval":"200"
               }
            }
         }
      }
   }
}'
// out put
"aggregations":{
   "basketball_filter":{
      "doc_count":5,
      "goals_histogram":{
         "buckets":[
            {
               "key":800.0,
               "doc_count":2
            },
            {
               "key":1000.0,
               "doc_count":0
            },
            {
               "key":1200.0,
               "doc_count":2
            },
            {
               "key":1400.0,
               "doc_count":1
            }
         ]
      }
   }
}

// Ranage aggregations 
curl -X GET "localhost:9200/sports/athlete/_search?size=0&pretty" -H 'Content-Type: application/json' -d '{
   "aggs":{
      "goal_ranges":{
         "range":{
            "field":"age",
            "ranges":[
               {
                  "key":"start-of-career",
                  "to":20.0
               },
               {
                  "key":"mid-of-career",
                  "from":20.0,
                  "to":30.0
               },
               {
                  "key":"end-of-cereer",
                  "from":30.0
               }
            ]
         }
      }
   }
}'


// out put

"aggregations":{
   "goal_ranges":{
      "buckets":[
         {
            "key":"start-of-career",
            "to":20.0,
            "doc_count":3,
            "age_stats":{
               "count":3,
               "min":18.0,
               "max":19.0,
               "avg":18.333333333333332,
               "sum":55.0
            }
         },
         {
            "key":"mid-of-career",
            "from":20.0,
            "to":30.0,
            "doc_count":13,
            "age_stats":{
               "count":13,
               "min":20.0,
               "max":29.0,
               "avg":25.846153846153847,
               "sum":336.0
            }
         },
         {
            "key":"end-of-cereer",
            "from":30.0,
            "doc_count":6,
            "age_stats":{
               "count":6,
               "min":31.0,
               "max":41.0,
               "avg":35.0,
               "sum":210.0
            }
         }
      ]
   }
}
//Geo Distance Aggregation
//With the geo distance aggregation, you can define a point of origin and a set of distance ranges from that point. 
The aggregation will then evaluate the distance of each geo_point value from the origin point and determine which range bucket the document falls into. A document is considered to belong to a given bucket if the distance between the document's geo_point value
and the origin point falls within the distance range of that bucket.

curl -X POST "localhost:9200/sports/athlete/_search?size=0&pretty" -H 'Content-Type: application/json' -d '{
   "aggs":{
      "athlete_location":{
         "geo_distance":{
            "field":"location",
            "origin":"46.22,-68.85",
            "unit":"km",
            "ranges":[
               {
                  "to":200
               },
               {
                  "from":200,
                  "to":400
               },
               {
                  "from":400
               }
            ]
         }
      }
   }
}
// out put

"aggregations":{
   "athlete_location":{
      "buckets":[
         {
            "key":"*-200.0",
            "from":0.0,
            "to":200.0,
            "doc_count":13
         },
         {
            "key":"200.0-400.0",
            "from":200.0,
            "to":400.0,
            "doc_count":0
         },
         {
            "key":"400.0-*",
            "from":400.0,
            "doc_count":9
         }
      ]
   }
}










our document set and associate each document with the specified interval






