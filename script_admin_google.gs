function myFunction() {
  var lista = readRange("SPREAD_SHEET_ID");
  var cont = 0;
  // Logger.log(lista);
  for (var index of lista)
  {
    for (var index2 of index)
      Logger.log(index2);
      moverOU(index2)
  }
}
function readRange(spreadsheetId) {
  var response = Sheets.Spreadsheets.Values.get(spreadsheetId, 'Sheet1!A:A');
  return response.values;
}

function moverOU(emailAddress){
  var user = AdminDirectory.Users.get(emailAddress);
  var orgunittomove="INSERT OU PATH"  
  var sucesso = 0;
  
  user.orgUnitPath = orgunittomove;
  AdminDirectory.Users.update(user, emailAddress);
  sucesso = 1;
  Logger.log(sucesso);
}