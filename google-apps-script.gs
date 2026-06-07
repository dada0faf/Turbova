/**
 * Turbová contact form → Google Sheet
 * ------------------------------------
 * Receives POST requests from the website's contact form and appends one row
 * per enquiry to the spreadsheet this script is bound to.
 *
 * Setup: create a Google Sheet, open Extensions → Apps Script, paste this in,
 * then Deploy → New deployment → Web app (Execute as: Me, Who has access:
 * Anyone). See CONTACT_SETUP.md for the full walkthrough.
 */

var SHEET_NAME = 'Enquiries';

// Optional hardening: set this to a random string and add the SAME string as
// `payload.token` in the website JS to reject submissions without it. Leave
// empty to accept all submissions.
var SHARED_SECRET = '';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (SHARED_SECRET && data.token !== SHARED_SECRET) {
      return json_({ result: 'error', message: 'unauthorized' });
    }

    var sheet = getSheet_();
    sheet.appendRow([
      new Date(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.country || '',
      data.intent || '',
      data.timeframe || '',
      data.contactMethod || '',
      data.message || '',
      data.language || '',
    ]);

    return json_({ result: 'success' });
  } catch (err) {
    return json_({ result: 'error', message: String(err) });
  }
}

// Diagnostic response if someone opens the URL directly in a browser. Reports
// whether the script can reach its spreadsheet and what tabs/rows exist, so
// connectivity problems are easy to see. Safe to leave in place.
function doGet() {
  var info = { result: 'ok', message: 'Turbová contact endpoint is live.' };
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    info.boundToSpreadsheet = !!ss;
    if (ss) {
      info.spreadsheetName = ss.getName();
      info.spreadsheetUrl = ss.getUrl();
      info.tabs = ss.getSheets().map(function (s) { return s.getName(); });
      var sh = ss.getSheetByName(SHEET_NAME);
      info.enquiriesRows = sh ? Math.max(0, sh.getLastRow() - 1) : 0;
      info.enquiriesGid = sh ? sh.getSheetId() : null;
    }
  } catch (err) {
    info.diagnosticError = String(err);
  }
  return json_(info);
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp', 'First name', 'Last name', 'Email', 'Phone',
      'Country', 'Looking to', 'Timeframe', 'Preferred contact', 'Message', 'Language',
    ]);
  }
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
