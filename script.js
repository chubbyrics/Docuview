// Full Alphabetized SOP Library
const sopDocs = [
    "Accessing Client Emails and Faxes", "Accessing Global", "Accronyms", "Adding an Alert", 
    "Adding Unmatched Debt", "Adding/ Removing Co-Client", "Agent Notes", 
    "Attaching Files to Request and Client File", "Authorized Third Parties", "Cancel Request", 
    "Cancel Request with Active SIFs", "Clear Cache_ Cookies browser", "Client Portal - Multi Factor Authentication", 
    "Client Portal Impersonation", "Client Portal Login & Reset", "Client Portal Trouble Shoot", 
    "Client Referral Program", "Client Verification MultiFactor Auth and Recorded Line Disclosure", 
    "Completed Courtesy Call", "Composing New Emails through inContact - CS", 
    "Consumer Legal Resources", "Contact list", "Creating a PDF", "Credit Pull SOP", 
    "Deceased Client", "Draft Change", "Draft Increase", "Draft Skip", 
    "Edit Client's Preferred Language", "EMT RFSS Request", "Escalated and Excessively Client", 
    "Expedited Pay Off (Settled Accounts)", "Expedited Pay Off (Unsettled Accounts)", 
    "Garnishment SOP", "Global FAQ SOP", "Global Validation Request", "Gong SOP", 
    "GRAD SOP", "Hardship Plan", "Headset Audio Troubleshooting Tips", "How to Add Shared Mailboxes", 
    "How to check if chrome is up to date", "How to download Authy Desktop", "How to recreate mail Profile", 
    "How to set headset as your default device", "InContact Softphone Integration", 
    "Intake form - CLG process", "Judgement SOP", "Language Link", "Legal - Prelegal - CLG", 
    "Legal Accounts Hardship Request", "Legal Cheatsheet", "Legal Process-Post Intake", 
    "Legal Summons", "Legal Summons Review", "MIC not working on headset", 
    "Natural Disaster Plan of Action", "NCA transfer Key", "New Creditor Profile", 
    "NSF Return Reasons and Codes", "Obtaining Settled in Full Letter (SIF)", 
    "OneDrive file transfer guide", "PC Login and Set-up", "PC Slowness and Lag", 
    "PIF Talking Points and Creditor List", "POG Paid Outside of global", 
    "Portal Special Draft Auth-EMT RFSS", "Pre-Legal CS Process", "Pritunl Auth Error Troubleshooting", 
    "Processing Amendments in the Calc", "Purged Account Process", "R11 Number Code", 
    "Recording Calls", "Request Queue Follow Up", "Sending Faxes Through QuickBase", 
    "Sending OneSpan Documents", "Setting Follow Ups", "Setting up pritunl VPN", 
    "Special Draft PK and Email Process", "Sub Status for Rejected Settlement", 
    "Submitting EMT Requests", "Texting Clients via QB", "Turn off cache exchange mode in outlook", 
    "UMA format", "Unresponsive Emails", "Updating Banking Information", 
    "Updating Clients contact information", "Updating creditor information", 
    "Using Microsoft teams", "Warm Transfer via InContact", "Which adapter will you need"
];

/**
 * THE MAPPING TABLE
 * This matches the "Display Name" on the site to the "Actual Filename" in your folder.
 */
function getActualFileName(displayName) {
    const fileMap = {
        "Accessing Client Emails and Faxes": "Accessing Client Email and Fax 7.20.23",
        "Accessing Global": "Accessing Global 12.4.24",
        "Accronyms": "COA Shorthand",
        "Adding an Alert": "Adding an Alert 7.20.23",
        "Adding/ Removing Co-Client": "Adding  Removing Co-Client 8.13.2024",
        "Agent Notes": "Adding Unmatched Debt 4-4-2025 (2)",
        "Attaching Files to Request and Client File": "Attaching Files to Request and Client File 7.20.23",
        "Authorized Third Parties": "Authorized Third Parties 8.13.24",
        "Cancel Request": "Cancel Request 8.14.24",
        "Cancel Request with Active SIFs": "Cancel with Active SIFS scripts ",
        "Clear Cache_ Cookies browser": "Clear Cache_Cookies Browser",
        "Client Portal - Multi Factor Authentication": "Client Portal - MultiFactorAuthentication Client 12.14.23",
        "Client Portal Impersonation": "Client Portal Impersonation (MFA Process)",
        "Client Portal Login & Reset": "Client Portal Login & Reset 7.21.23",
        "Client Portal Trouble Shoot": "Client Portal Troubleshooting",
        "Client Referral Program": "Client Referral Program 10.17.2025",
        "Completed Courtesy Call": "Completed Courtesy Call 8.13.24",
        "Composing New Emails through inContact - CS": "Composing New Emails via inContact - CS 7.21.23",
        "Consumer Legal Resources": "Consumer Legal Resources_rev10212022",
        "Contact list": "Contact List 9.20.2023",
        "Creating a PDF": "Creating PDF SOP 8.28.23",
        "Credit Pull SOP": "Credit Pull 7.21.23",
        "Deceased Client": "Deceased Client 10.2.2025",
        "Draft Change": "Draft Changes 11.19.25",
        "Draft Increase": "Draft Increase 8.14.24",
        "Draft Skip": "Draft Skip SOP",
        "Edit Client's Preferred Language": "Edit Client's Preferred Language",
        "EMT RFSS Request": "EMT RFSS Request 8.29.25",
        "Escalated and Excessively Client": "Escalation and Excessively Escalated Client process 5.20.2024",
        "Expedited Pay Off (Settled Accounts)": "Expedited Pay Off (Settled Accounts)",
        "Expedited Pay Off (Unsettled Accounts)": "Expedited Payoff (Unsettled Accounts)",
        "Garnishment SOP": "Garnishment SOP 10.10.2024",
        "Global FAQ SOP": "Global FAQ SOP 7.24.23",
        "Global Validation Request": "Global Validation Request 5.23.2024",
        "Gong SOP": "Gong SOP 8.28.23",
        "GRAD SOP": "Grad SOP CLG",
        "Hardship Plan": "Hardship Plan1 7.24.23",
        "Headset Audio Troubleshooting Tips": "Headset Audio Troubleshooting Tips 7.26.2023",
        "How to Add Shared Mailboxes": "How to add shared mailboxes to Outlook Web App",
        "How to check if chrome is up to date": "How to check if chrome is up to date 7.26.2023",
        "How to download Authy Desktop": "How to Download Authy Desktop 7.25.2023",
        "How to recreate mail Profile": "How To Recreate Mail Profile 7.23.2023",
        "How to set headset as your default device": "How to set headset as your default device 7.24.2023",
        "InContact Softphone Integration": "InContact Softphone Integration 7.23.2023",
        "Intake form - CLG process": "Intake Form SOP - CLG process 10.1.2025",
        "Judgement SOP": "Judgement SOP 10.10.2024",
        "Language Link": "Language Link Disconnects",
        "Legal - Prelegal - CLG": "Legal - Pre-Legal - CS process 8.26.25",
        "Legal Accounts Hardship Request": "Legal Accounts Hardship Request 7.25.2023",
        "Legal Cheatsheet": "Legal Cheatsheet 8.22.25",
        "Legal Process-Post Intake": "Legal Process - Post Intake 8.22.25",
        "Legal Summons": "Legal Summons 8.26.20251", 
        "Legal Summons Review": "Legal Summons - ESCL team",
        "MIC not working on headset": "Mic not working on headset 7.20.2023",
        "Natural Disaster Plan of Action": "Natural Disaster Plan of Action",
         "NCA transfer Key" : "NCA Transfer Key 7.26.2023", 
         "New Creditor Profile" : "New Creditor Profile 7.24.2023", 
         "NSF Return Reasons and Codes" : "NSF Return Reasons and Codes 7.19.2023", 
        "Obtaining Settled in Full Letter (SIF)" : "Obtaining Settled in Full Letters FAQ 7.20.2023", 
        "OneDrive file transfer guide" : "OneDrive file transfer guide 7.24.2023", 
        "PC Login and Set-up" : "PC Login Set-up 7.25.2023", 
        "PC Slowness and Lag" : "PC Slowness & Lag 7.25.2023", 
        "PIF Talking Points and Creditor List"  : "PIF Talking Points and Creditor List 7.25.2023", 
        "POG Paid Outside of global" : "POG SOP", 
        "Portal Special Draft Auth-EMT RFSS" : "CLO Portal Special Draft Auth ",
        "Pre-Legal CS Process" : "Pre-LegalCS process 10.9.24", 
        "Pritunl Auth Error Troubleshooting" : "Pritunl Authentication Error Troubleshooting 7.25.2023", 
        "Processing Amendments in the Calc" : "Processing Amendments in the Calculator 7.25.2023",
        "Purged Account Process" : "Purged Account Process",
        "R11 Number Code" : "R11 Return SOP 1", 
        "Recording Calls" : "Recording Calls 7.25.2023", 
        "Request Queue Follow Up" : "Request Queue Follow-Up 7.25.2023",
        "Sending Faxes Through QuickBase" : "Sending Faxes Through QuickBase", 
        "Sending OneSpan Documents" : "Sending Documents through OneSpan 8.1.2024", 
        "Setting Follow Ups" : "Setting Follow Ups 7.20.2023",
        "Setting up pritunl VPN" : "Setting up Pritunl VPN 7.20.2023", 
        "Special Draft PK and Email Process" : "Special Draft PK and Email Process 5.21.2024",
        "Sub Status for Rejected Settlement" : "Sub Status for Rejected Settlement Authorizations SOP", 
        "Submitting EMT Requests" : "SubmittingEMTRequest ", 
        "Texting Clients via QB" : "Texting Clients via QB 7.21.2023", 
        "Turn off cache exchange mode in outlook" : "Turn Off Cache exchange mode in Outlook7.24.2023", 
        "UMA format" : "UMA SOP 8.12.25",
        "Unresponsive Emails" : "Unresponsive Emails SOP 06.06",
        "Updating Banking Information" : "Updating Banking Information_9.18.24", 
        "Updating Clients contact information" : "Updating Clients Contact Information 10.17.25", 
        "Updating creditor information" : "Updating Creditor Information 7.20.2023", 
        "Using Microsoft teams" : "Using Microsoft Teams 7.19.2023",
        "Warm Transfer via InContact" : "Warm Transfer via InContact ", 
        "Which adapter will you need" : "Which adapter you need"
    };
    return fileMap[displayName] || displayName;
}

function loadSOPs() {
    const container = document.getElementById('sopList');
    if (!container) return;
    container.innerHTML = ""; 

    sopDocs.sort().forEach(doc => {
        const li = document.createElement('li');
        li.className = 'doc-item';
        const fileName = getActualFileName(doc);
        const pdfPath = `docs/${fileName}.pdf`;
        
        // encodeURI is essential for files with dates and spaces
        const safeLink = encodeURI(pdfPath);

        li.innerHTML = `
            <span>${doc}</span>
            <div class="btn-group">
                <a href="${safeLink}" class="pdf-btn" target="_blank" rel="noopener noreferrer">View PDF</a>
            </div>
        `;
        container.appendChild(li);
    });
}

function filterDocs() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const items = document.getElementsByClassName('doc-item');
    for (let i = 0; i < items.length; i++) {
        const text = items[i].getElementsByTagName('span')[0].innerText.toLowerCase();
        items[i].style.display = text.includes(input) ? "" : "none";
    }
}

document.addEventListener('DOMContentLoaded', loadSOPs);