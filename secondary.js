function findVacation(startRow, spreadsheetid) {
    var spreadsheetid = "***";
    var ss = SpreadsheetApp.openById(spreadsheetid);
    var sheet = ss.getSheets()[0];
    var startRow = resolt;
    var dates = [];
    var startEnd = [];
    var alldates = sheet.getSheetValues(1, 3, 1, 367);
  
    for (let i = 3 ;i < 368 ;i++){
      var value = sheet.getSheetValues(startRow, i, 1, 367);
      if (value != null){
        dates.push(sheet.getSheetValues(1, i, 1, 1))
        for (let j = 0; j != 1; j++) {
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