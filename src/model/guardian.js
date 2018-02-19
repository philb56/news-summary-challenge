(function(exports){

  var guardianResponse;

  function GuardianApi(url) {
    this.url = url;
    load(this.url, function(xhr) {
      guardianResponse = JSON.parse(xhr.responseText);
    });
  };

  GuardianApi.prototype.guardianResponse = function() {
    return guardianResponse;
  }

  exports.GuardianApi = GuardianApi;
})(this);
