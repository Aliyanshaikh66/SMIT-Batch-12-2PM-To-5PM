// // alert("Hello");
// window.location.assign("http://www.google.com");
// window.location.replace("http://www.github.com");
// // window.location.reload(true);
// history.go(-1);
// window.location.reload(false);
// window.location.reload();

// var windowSpecs = "'faq.html', 'faq', 'width=420,height=380,left=200,top=100'"; 
// window.open(windowSpecs);

// function checkForPopBlocker() {
//      var testPop = window.open("", "","width=100,height=100");
//      if (testPop === null) {
//      alert("Please disable your popup blocker.");
//      }
//      testPop.close();
//      }

// function checkForPopBlocker() {
//      var testPop = window.open("", "","width=100,height=100");
//      if (testPop === null || typeof(testPop === "undefined")) {
//      alert("Please disable your popup blocker.");
//      }
//      testPop.close();
//      }

// function checkForLastName() {
//       if (document.getElementById("lastNameField").value.length === 0) {
//       alert("Please enter your last name");
//       return false;
//       }
//       }


// function checkForLastName() {
//       var targetField = document.getElementById("FirstNameField");
//       var targetField1 = document.getElementById("lastNameField");
//       if (targetField.value.length === 0) {
//       alert("Please enter your First name");
//       targetField.focus();
//       }
//       else if (targetField1.value.length === 0) {
//       alert("Please enter your last name");
//       targetField1.focus(); 
//       }
//       return false;
//      }

// function validateRadios() {
//       var radios = document.getElementsByName("r1");
//       for (var i = 0; i < radios.length; i++) {
//       if (radios[i].checked) {
//       return true;
//       }
//       }
//       alert("Please check one.");
//       return false;
//       }

// function validateEmail() {
//       var addressIsLegal = true;
//       var eEntered = document.getElementById("address").value;
//       if (eEntered.indexOf(" ") !== -1) {
//       addressIsLegal = false;
//       }
//       if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
//       addressIsLegal = false;
//       }
//       if (addressIsLegal === false) {
//       alert("Please correct email address");
//       return false;
//       }
//       }


function checkPassword() {
 try {
 var pass = document.getElementById("f1").value;
 if (pass.length < 8) {
 throw "Please enter at least 8 characters.";
 }
 if (pass.indexOf(" ") !== -1) {
     throw "No spaces in the password, please.";
 }
      var numberSomewhere = false;
      for (var i = 0; i < pass.length; i++) {
     if (isNaN(pass[i]) === false) {
      numberSomewhere = true;
      break;
      }
      }
      if (numberSomewhere === false) {
      throw "Include at least 1 number.";
      }
      }
      catch(err) {
      alert(err);
      }
      }

// function checkPassword() {
//      try {
//          var pass = document.getElementById("f1").value; 
        
//          if (pass.length < 8) {
//              throw "Please enter at least 8 characters.";
//          }
         
//          if (pass.indexOf(" ") !== -1) {
//              throw "No spaces in the password, please.";
//          }
//          var numberSomewhere = false;
//          for (var i = 0; i < pass.length; i++) {
//              if (!isNaN(pass[i])) {  
//                  numberSomewhere = true;
//                  break;
//              }
//          }
//          if (!numberSomewhere) {
//              throw "Include at least 1 number.";
//          }
//      } catch (err) {
//          alert(err);  
//          return false; 
//      }
//      return true;  
//  }