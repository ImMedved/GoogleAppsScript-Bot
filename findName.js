function findName(Lastname) {
    var spreadsheetid = "***";
    var ss = SpreadsheetApp.openById(spreadsheetid);
    var sheet = ss.getSheets()[0];
    var range = sheet.getDataRange();
    var values = range.getDisplayValues();
    var len = values.length;
  
    for (var i=1; i < len - 1; i++){
      if (values[i][0] == Lastname){
        var result = i;
      }else{
        var result = 0;
      }
    }
  return result;
  }