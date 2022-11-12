
function doPost(request) {
  var url = "https://hooks.slack.com/services/***********/***********/***************";
  var payload = 
          {
            "username" : "TempoBot", 
            "text" : "processing"
          };
  sendToSlack(url,payload);
  findName(request.parameter.text);

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
  if (resolt == 0){
    function nameNotFound(resolt) {
      var payload =
          {
          "username" : "TempoBot", 
          "text" : "Incorrect name or simular error."
          };
      sendToSlack(url, payload);
   }
}

function Dates(resolt){
    var spreadsheetid = "***";
    var ss = SpreadsheetApp.openById(spreadsheetid);
    var sheet = ss.getSheets()[0];
    var startRow = resolt;
    var values = sheet.getSheetValues(startRow, 3, 1, 367);
    Logger.log(values);
    findVacation(startRow, spreadsheetid);
}

function findVacation(startRow, spreadsheetid) {
    var spreadsheetid = "***";
    var ss = SpreadsheetApp.openById(spreadsheetid);
    var sheet = ss.getSheets()[0];
    var startRow = resolt;
    var dates = [];
    var startEnd = [];
    var alldates = sheet.getSheetValues(1, 3, 1, 367);

    for (var i = 3 ;i < 368 ;i++){
      var value = sheet.getSheetValues(startRow, i, 1, 367);
      if (value != null){
        dates.push(sheet.getSheetValues(1, i, 1, 1))
        for (var j = 0; j != 1; j++) {
          i++;
          if (value == sheet.getSheetValues(startRow, i, 1, 1)){
            i--;
          }else{
            startEnd.push(sheet.getSheetValues(1, i, 1, 1));
          }
        
        }
      }
    }
    return(startEnd, alldates);
  }

function createPayload(startEnd, alldates){
    var res = "Отпуск "
    var res2;
    for (var v = 1; v < alldates + 2; v++){
      res2 = (startEnd[v])
      if(Math.floor(v / 2) != v / 2) {
        res = res + ('с ')
        } else {
          res = res + ('по ')
        }
      res = res + res2
    }
   return(res);
   console.log(res);
}

  
  function sendToSlack(url,payload) 
  {
    var options =  {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(payload)
    };
    return UrlFetchApp.fetch(url, options)
  }

//down done
  payload = 
        {
         "username" : "Tempo Terrier", 
          "text" : res
        };
    sendToSlack(url,payload);

 ScriptApp.newTrigger("doPost")
    .timeBased()
    .before(100)
    .create();

  return ContentService.createTextOutput();
}
