function insertImage() {

  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); 
  let lastRow = sheet.getLastRow(); 

  for (let i = 0; i < lastRow-1; i++) {
    let url = sheet.getRange(2+i,1).getValue(); 
    let image = SpreadsheetApp.newCellImage().setSourceUrl(url); 
    sheet.getRange(2+i,2).setValue(image); 
  }
}

function downloadImage() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); 
  let lastRow = sheet.getLastRow(); 

  let folder = DriveApp.getFolderById("1W4pv0RW7DB_yh8pqChc8YPNyq0ETQ_1m"); 

  for (let i = 0; i < lastRow-1; i++) {
    let url = sheet.getRange(2+i,1).getValue(); 
    let blob = UrlFetchApp.fetch(url).getBlob(); 
    folder.createFile(blob); 
  }
}
