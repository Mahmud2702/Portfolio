/**
 * GOOGLE APPS SCRIPT — Contact Form → Google Sheets Integration
 * =============================================================
 * SETUP INSTRUCTIONS:
 *
 * 1. Go to https://sheets.google.com and create a new spreadsheet.
 *    Name it "Portfolio Contact Messages".
 *    Add these column headers in Row 1:
 *    Timestamp | Name | Email | Subject | Message
 *
 * 2. Click "Extensions" → "Apps Script" in the top menu.
 *
 * 3. Delete any existing code and paste the entire function below.
 *
 * 4. Click "Deploy" → "New Deployment":
 *    - Type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    Click "Deploy" and authorize when prompted.
 *
 * 5. Copy the Web App URL that appears.
 *
 * 6. In your index.html, replace:
 *      const GOOGLE_SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
 *    with:
 *      const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/YOUR_ID/exec';
 *
 * That's it! Every form submission will now appear as a new row in your sheet
 * and you'll receive an email notification as well.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    var timestamp = e.parameter.timestamp || new Date().toLocaleString();
    var name      = e.parameter.name    || '';
    var email     = e.parameter.email   || '';
    var subject   = e.parameter.subject || '';
    var message   = e.parameter.message || '';

    // Append data row to the sheet
    sheet.appendRow([timestamp, name, email, subject, message]);

    // Optional: Send yourself an email notification
    var yourEmail = 'mahmodurrahman2702@gmail.com'; // ← change this to your Gmail
    MailApp.sendEmail({
      to: yourEmail,
      subject: '📬 New Portfolio Message: ' + subject,
      body:
        'You received a new message from your portfolio website!\n\n' +
        'From:    ' + name + '\n' +
        'Email:   ' + email + '\n' +
        'Subject: ' + subject + '\n\n' +
        'Message:\n' + message + '\n\n' +
        '— Sent via your portfolio contact form'
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
