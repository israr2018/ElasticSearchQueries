{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 1
  },
  "mappings": {
    "shoe": {
      "properties": {
        "style": {
          "type": "keyword"
        },
        "size": {
          "type": "keyword"
        },
        "color": {
          "type": "keyword"
        }
      }
    }
  }
}

// query
{
  "query": {
    "bool": {
      "filter": [
        { "term": { "size" : "7" } },
        { "term": { "color" : "Blue" } }
      ]
    }
  }
}
// query
{
  "size": 0,
  "query": {
  },
  "aggs": {
    "size": {
      "terms": {
         "field": "style"
       }
    }
  }
}

// querry 2
{
  "size": 0,
  "query": {
  },
  "aggs": {
    "size": {
      "terms": {
         "field": "style",
         "order" : { "_term" : "asc" },
         "include": {
           "partition": 0,
           "num_partitions": 100
         }
       }
    }
  }
}

//
