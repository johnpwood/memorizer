angular.module('poetryApp').service('poetryService', function($http){
  var self = this;
  var url = "http://poetrydb.org/"
  this.search = function(author, title, text){
    var inputFields = [];
    var searchTerms = [];
    if(author){
      inputFields.push("author");
      searchTerms.push(author);
    }
    if(title){
      inputFields.push("title");
      searchTerms.push(title);
    }
    if(text){
      inputFields.push("lines");
      searchTerms.push(text);
    }

    var query = inputFields.join(",")+"/"+searchTerms.join(";");
    return $http.get("http://poetrydb.org/" + query).then(function(response){
      self.results = response.data;
      if(text){//for text search, display the first line that matched the search
                //and the lines around it
        self.results.forEach(function(x){
          for(var i = 0; i < x.lines.length; i++){
            if(x.lines[i].match(text)){
              x.showlines=i<2?[0,1,2]:[i-1,i,i+1];
              return;
            }
          }
        })
      }else{self.results.forEach(function(x){
        x.showlines = [0,1,2];
      })}
    })
  }

  this.select = function(n){
    console.log(n);
    this.poem = this.results[n];
    this.memorize = Array(10);
    this.memorize[0] = this.poem.lines.map(x=>x.split(" "))
  }
})
