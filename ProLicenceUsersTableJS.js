
ProLicenceUsersTable = {};
ProLicenceUsersTable = {
    "ProLicenceUsers": {
        "1ad344c0-40c4-4ffe-b1b0-142f6918d437": {
            "reason": "LMauthor",
            "notes": "Jimboy3100"
        },
        "da4499e5-17a7-4159-8ca5-e80e4d87065f": {
            "reason": "Aus Taipan",
            "notes": "Greek australian girl"
        },
		"7bea1cb9-7e14-4e14-824c-c2682036b0a6": {
            "reason": "℄🌀βurNouT",
            "notes": "℄🌀"
        },
		"da4499e5-17a7-4159-8ca5-e80e4d87065f": {
            "reason": "Aus Taipan",
            "notes": "Greek australian girl"
        }
    },
    "versionsInfo": ["v-0.3", "LM-v2.5"]
};

if (ProLicenceUsersTable.ProLicenceUsers[window.ironrv_userId] != undefined) {
console.log("Authorised User");
buydeals();
}
else{
console.log("Non Authorised User");
toastr["info"]("This Function is enabled to those who donated 6$ to author, contact Skype Id: Jimboy3100 and refer your <font color='red'><b>UID</b></font color='red'>", "", { timeOut: 10000, extendedTimeOut: 10000 }).css("width", "300px");
}
