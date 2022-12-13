$(function () {
  var html =
    '<div class="chatbox-holder">' +
    '<div class="chatbox-mini mini"  style="display=none;" ><div class="chatbox-mini-title mini"><p>Hello There 👋, chat with us!</p><div class="chatbox-mini-image mini"><img class="mini" src="https://onushospitals.com/uploads/logo.png" /></div></div></div>'+
    '<div class="chatbox">' +
    '<div class="chatbox-top">' +
    '<div class="chatbox-avatar">'+
            '<img src="https://onushospitals.com/uploads/logo.png" />'+
          '</div>'+
    '<div>'+
    '<div class="chat-partner-name">' +
    " Welcome To ONUS Hospitals" +
    "</div>" +
    '<div class="chat-partner-tag">' +
    "We are online to assist you" +
    "</div>" +
    "</div>" +
    '<div class="chatbox-icons">' +
    '<a href="javascript:void(0);"><i class="fa fa-minus"></i></a>' +
    "</div>" +
    "</div>" +
    '<div class="chat-messages">' +
    '<div class="message-box-holder">' +
    // '<div class="message-sender">Chat Support' +
    // " " +
    // getMommentDate($.now()) +
    // "</div>" +

     chatbotMessage()+
    ' <div class="message-box message-partner">' +
    "<p>"+getGreeting()+"<br>"+"<p>Welcome to ONUS hospital automated chat bot service</p>"+"<br>"+"</p> <p>All the departments at Onus hospital,set high standards for patient-care with qualified doctors and state-of-the-art facilities in helping you experience a pain-free life.</p>" + 
    "</div>" +
    "<br>" +
    chatbotMessage()+
    ' <div class="message-box message-partner">' +
    "<p>Welcome to Automated live chatbot for ONUS Hospital services</p><br/>" +
    '<div class="chatbox-images">'+
            '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJDg0-q6Agi-G0u55cmSLDp0kPnCjuQOt_w&usqp=CAU" />'+
          '</div>'+
        "</div>" +"<br>"+
    '<div class="message-box-holder" id="option1">' +
          // '<div class="message-sender">Chat Support' +
          // " " +
          // getMommentDate($.now()) +
          // "</div>" +
          chatbotMessage()+
          ' <div class="message-box message-partner">' +
          "<p>How may I assist you? Please select an option to see more detils</p><br/>" +
          '<div class="choice_one option-btn" id="healthpackage">Health Packages</div><br/>' +
          ' <div class="choice_one option-btn" id="appointment">Book Appointment</div><br/>' +
          '<div class="choice_one option-btn" id="doctor_list">View Doctors</div><br/>' +
          '<div class="choice_one option-btn" id="specialist">View Specialist</div><br/>' +
          '<div class="choice_one option-btn" id="contact">Contact us</div><br/>' +
          "</div>" +
          " </div>"+
    "</div>" +
    "</div>" +
    '<div class="chat-input-holder" style="display:none;"><input type="text" class="chat-input" id="chat_input"></input><button id="input_submit" class="message-send">Send</button></div>' +
    // "</div>";
    "</div>" +
    "</div>";
  $("body").append(html);
  // scrollBottom();
  var inputData = "";
  var username = "you";
  var selectedIndex = 0;
  var specialists = [];
  var heath_package = [
    {
      title:"Executive Diabetic Check Up - Male",
      price:"RS 999 /-",
      included: " HbA1c Serum Creatinine Physician Consultation Post Lunch Blood Sugar Physiotherapist Consultation"
    }
  ]
  var all_doc = [
    {
      title: "Dr. Sridhar Jakkepally",
      speciality: "Orthopedics",
      qualification:
        "MS (ORTHO), DNB (ORTHO) POST DOCTOR FELLOW IN SPINE SURGERY (DR.MGR UNIVERSITY - GANGA HOSPITAL) FELLOW IN SPINE DEFORMITIES (FRANCE) FELLOW IN SPINE SURGERY (JAPAN) CLINICAL DIRECTOR & HEAD OF THE DEPARTMENT OF SPINE SURGERY",
      sort_qualification:
        "MS (ORTHO), DNB (ORTHO) POST DOCTOR FELLOW IN SPINE SURGERY",
      img: "https://onushospitals.com/uploads/doctors/1664288012_6134_dr-sridhar-jakkepally.jpg",
      available: true,
      appointment_link:
        "https://onushospitals.com/doctor-appointment/dr.sridhar-jakkepally",
    },
    {
      title: "Dr. Balaraju Naidu",
      speciality: "Orthopedics",
      qualification:
        "MS (ORTHO), DNB (ORTHO), MNAMS Fellow in Robotic joint replacement surgery",
      sort_qualification:
        "MS (ORTHO), DNB (ORTHO), MNAMS Fellow in Robotic joint replacement surgery",
      img: "https://onushospitals.com/uploads/doctors/1666872740_6053_d46288e1-ac55-4d4e-8f5b-491a4a979452.jpg",
      available: true,
      appointment_link:
        "https://onushospitals.com/doctor-appointment/dr.balaraju-naidu",
    },
    {
      title: "Dr. Sudarshan Reddy",
      speciality: "Gastroenterologist",
      qualification: "MBBS, MS (GENERAL SURGERY) DNB (SURGICAL GASTRO)",
      sort_qualification: "MBBS, MS (GENERAL SURGERY) DNB (SURGICAL GASTRO)",
      img: "https://onushospitals.com/uploads/doctors/1664288005_3571_dr-sudarshan-reddy-k.jpg",
      available: true,
      appointment_link:
        "https://onushospitals.com/doctor-appointment/dr.sudarshan",
    },
    {
      title: "Dr. U Azadh Chandrasekhar",
      speciality: "Oncology",
      qualification:
        "MBBS, MS(General Surgery) Gold Medalist, MCH (Surgical Oncology) Gold Medalist",
      sort_qualification:
        "MBBS, MS(General Surgery) Gold Medalist, MCH (Surgical Oncology) Gold Medalist",
      img: "https://onushospitals.com/uploads/doctors/1664288017_7649_dr-u-azadh-chandrashekar.jpg",
      available: true,
      appointment_link:
        "https://onushospitals.com/doctor-appointment/dr.u.azad-chandrashekhar",
    },
  ];
  $(".mini").click(function () {
    $(".chatbox").show();
    $(".chatbox-mini").hide();
  });
   $(".fa-minus").click(function () {
    $(".chatbox").hide();
    $(".chatbox-mini").show();
    // $(this).closest(".chatbox").toggleClass("chatbox-min");
    // if (inputData != "") $(".chat-input-holder").toggle();
  });

  $(".fa-close").click(function () {
    $(this).closest(".chatbox").hide();
  });
  $("#chat_input").on("keypress", function (e) {
    if (e.keyCode == 13) {
      userInput();
    }
  });
  $("#input_submit").on("click", function () {
    userInput();
  });
  function IsEmail(email) {
    var regex =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }
  function userInput() {
    var val = $("#chat_input").val();
    $("#chat_input").val("");
    console.log("input", val);
    switch (inputData) {
      case "username":
        if (val == "") {
          alert("Please enter your name");
        } else {
          username = val;
          html =
            '<div class="message-box-holder">' +
            ' <div class="message-box">Welcome ' +
            username +
            "</div>" +
            // '<div class="message-receiver">' +
            // username +
            // " " +
            // getMommentDate($.now()) +
            // "</div>" +
            userMessage()+
            "</div>" +
            '<div class="message-box-holder">' +
            // '<div class="message-sender">Chat Support' +
            // " " +
            // getMommentDate($.now()) +
            // "</div>"
            chatbotMessage() +
            ' <div class="message-box message-partner">' +
            "Please Enter your mobile number" +
            "</div>" +
            "</div>";
          $(".chat-messages").append(html);
          inputData = "mobile";
        }

        break;
      case "mobile":
        if (val == "" ) {
          alert("Please enter your mobile number");
        }else if (val.length < 10) {
          alert("Please enter valid mobile number(10 digit)");
        } else {
          html =
            '<div class="message-box-holder">' +
            // '<div class="message-receiver">' +
            // username +
            // "</div>" +
            ' <div class="message-box ">' +
            val +
            "</div>" +
            // '<div class="message-receiver">' +
            // username +
            // " " +
            // getMommentDate($.now()) +
            // "</div>" +
            userMessage()+
            "</div>" +
            '<div class="message-box-holder">' +
            // '<div class="message-sender">Chat Support' +
            // " " +
            // getMommentDate($.now()) +
            // "</div>" 
            chatbotMessage()+
            ' <div class="message-box message-partner">' +
            "Please Enter your email" +
            "</div>" +
            "</div>";
          $(".chat-messages").append(html);
          inputData = "email";
        }
        break;
      case "email":
      if(val=="") {
        alert('Please enter email');
      }else if(!IsEmail(val)) {
        alert('Please enter valid email');
      }else{ 
        html =
          '<div class="message-box-holder">' +
          ' <div class="message-box">' +
          val +
          "</div>" +
          // '<div class="message-receiver">' +
          // username +
          // " " +
          // getMommentDate($.now()) +
          // "</div>" +
          userMessage()+
          " </div>";
        html +=
          '<div class="message-box-holder" id="option1">' +
          // '<div class="message-sender">Chat Support' +
          // " " +
          // getMommentDate($.now()) +
          // "</div>" 
          chatbotMessage()+
          ' <div class="message-box message-partner">' +
          " Please choose<br/>" +
          ' <div class="choice_one option-btn" id="appointment">Book Appointment</div><br/>' +
          '<div class="choice_one option-btn" id="doctor_list">View Doctors</div><br/>' +
          '<div class="choice_one option-btn" id="specialist">View Specialist</div><br/>' +
          "</div>" +
          " </div>";

        //<div id="welcome_msg">Hi,'+name+'</div>';
        inputData = "";
        $(".chat-messages").append(html);
        $(".chat-input-holder").css("display", "none");}
        break;
      case "doctor_name":
        searhByName(val);
        html =
          '<div class="message-box-holder">' +
          ' <div class="message-box ">' +
          val +
          "</div>" +
          // '<div class="message-receiver">' +
          // username +
          // " " +
          // getMommentDate($.now()) +
          // "</div>" +
          userMessage()+
          "</div>" +
          '<div class="message-box-holder">' +
          // '<div class="message-sender">Chat Support' +
          // " " +
          // getMommentDate($.now()) +
          // '</div>'
          chatbotMessage()+
          '<div class="message-box message-partner" id="detail_card">' +
          // " Please enter department or doctor specialization<br/>" +
          getSpecialistCard() +
          "</div></div>";
        $(".chat-messages").append(html);
        $(".chat-input-holder").css("display", "none");
        scrollBottom();
        option_disp = window.setInterval(() => {
          changeOption();
        }, 3000);

        break;
      default:
        inputData = "";
        $(".chat-input-holder").css("display", "none");
        break;
    }
    scrollBottom();
  }

  var option_disp = "";
  $(document).on("click", ".choice_one", function () {
    var id = $(this).attr("id");
    var optionText = $("#" + id).text();
    $("#option1").css("display", "none");
    html =
      '<div class="message-box-holder">' +
      ' <div class="message-box ">' +
      "You select: " +
      optionText +
      "</div>" +
      // '<div class="message-receiver">' +
      // username +
      // " " +
      // getMommentDate($.now()) +
      // "</div>" +
      userMessage()+
      " </div>";
    console.log(id, optionText);
    switch (id) {
      case "healthpackage":
        html += healthPackage();

        break;
      case "appointment":
        // window.location.replace("https://onushospitals.com/book-appointment");
        html += bookAppointment();
      //  '<div class="message-box-holder">' +
      // '<div class="message-sender">Chat Support' +
      // " " +
      // getMommentDate($.now()) +
      // "</div>" +
      // ' <div class="message-box message-partner">' +
      // "Please share your email and phone to continue with the appointment" +
      // "</div>" +
      
      // ' <div class="message-box message-partner contact-form">' +
      // contactform()+
      // // '<div class="text-center col"><span class="h6 font-weight-bold">Contact Information</span><p class="m-0">Please enter your contact details</p></div>' +
      // "</div>" +
      // "</div>";
        break;
      case "doctor_list":
        html +=
          '<div class="message-box-holder">' +
          // '<div class="message-sender">Chat Support' +
          // " " +
          // getMommentDate($.now()) +
          // "</div>"
          chatbotMessage()+
          ' <div class="message-box message-partner">' +
          selectDocBy() +
          "</div>" +
          " </div>";
        break;
      case "specialist":
        html += specialityChoice();

        break;
      case "contact":
        html +=
          '<div class="message-box-holder">' +
          
          chatbotMessage()+
          ' <div class="message-box message-partner">' +
          "<p>How may I assist you? Please select an option to see more detils</p><br/>" +
          '<div class="choice_one option-btn" id="healthpackage">Health Packages</div><br/>' +
          ' <div class="choice_one option-btn" id="appointment">Book Appointment</div><br/>' +
          '<div class="choice_one option-btn" id="doctor_list">View Doctors</div><br/>' +
          '<div class="choice_one option-btn" id="specialist">View Specialist</div><br/>' +
          
        
    '<div class="chat-input-holder" style="display:none;"><input type="text" class="chat-input" id="chat_input"></input><button id="input_submit" class="message-send">Send</button></div>'+
    chatbotMessage()+
    ' <div class="message-box message-partner">' +
   '<div class="contact">Please call us on,  <a href="tel:+911234567890">+91 1234567890</a> We are always at your service</div>'+
    "</div>" +
    " </div>";

        break;

      default:
        break;
    }
    $(".chat-messages").append(html);
    scrollBottom();
  });
 function healthPackage(){
  var html =
  '<div class="message-box-holder">' +
//  '<div class="message-sender">Chat Support' +
//  " " +
//  getMommentDate($.now()) +
//  "</div>" 
chatbotMessage()+
 ' <div class="message-box message-partner">' +
 "We have different Health packages available please check that below and choose one as per your need" +
 "</div>" +

 chatbotMessage()+
      '<div class="message-box message-partner">' +
      "<p>Please Choose a Health package to see details, You can book appointment for helth check-up</p><br/>" +
      ' <div class="choice_spec option-btn" id="health1">Executive Diabetic Check Up - Male <b>Price: Rs 999/-</b></div><br/>' +
      "<p><b>What's Included</b><br><br>HbA1c<br> Serum Creatinine<br>Physician Consultation<br>Post Lunch Blood Sugar<br>Physiotherapist Consultation</p><br/>" +
      '<div class="option-btn" id="book_doc_appointment">Book Appointment</div>'+
      "</div>"+

chatbotMessage()+
      '<div class="message-box message-partner">' +
      "<p>Please Choose a Health package to see details, You can book appointment for helth check-up</p><br/>" +
      '<div class="choice_spec option-btn" id="health3">Master Health Check Up - Male and Female <b>Price: Rs 1999/-</b></div><br/>' +
      "<p><b>What's Included</b><br><br>Esr<br>Lipid Profile<br>Serum Tsh<br>Blood Grouping/Rh Typing<br>Complete Blood Picture</p><br/>" +
      '<div class="option-btn" id="book_doc_appointment">Book Appointment</div>'+
      "</div>"+
      
 
      // '<div class="choice_spec option-btn" id="health3">Master Health Check Up - Male and Female</div><br/>' +
      // '<div class="choice_spec option-btn" id="health4">Knee, Shoulder & Hip Arthritis Profile - Male and Female</div><br/>' +
      // '<div class="choice_spec option-btn" id="health5">Back Pain Profile - Male and Female</div><br/>' +
      // '<div class="choice_spec option-btn" id="health6">Complete Health Check Profile - Male and Female</div><br/>' +
      // "</div></div>";
      
 chatbotMessage()+
      '<div class="message-box message-partner">' +
      "<p>Please Choose a Health package to see details, You can book appointment for helth check-up</p><br/>" +
      '<div class="choice_spec option-btn" id="health2">Hypertension Panel - Male <b>Price: Rs 1499/-</b></div><br/>' +
      "<p><b>What's Included</b><br><br> Lipid Profile<br>Electro Cardio Gram (ECG)<br> Serum Creatinine<br>Physician Consultation<br>Post Lunch Blood Sugar</p>"+
      '<div class="option-btn" id="book_doc_appointment">Book Appointment</div>'+
      "</div>";

 

 return html;
 }
 function bookAppointment(){
  var html =
  '<div class="message-box-holder">' +
//  '<div class="message-sender">Chat Support' +
//  " " +
//  getMommentDate($.now()) +
//  "</div>" 
chatbotMessage()+
 ' <div class="message-box message-partner">' +
 "Please share your email and phone to continue with the appointment" +
 "</div>" +
 
 ' <div class="message-box message-partner contact-form">' +
 contactform()+
 // '<div class="text-center col"><span class="h6 font-weight-bold">Contact Information</span><p class="m-0">Please enter your contact details</p></div>' +
 "</div>" +
 "</div>";
 return html;
 }
  function changeOption() {
    console.log("changeOption", selectedIndex);
    if (selectedIndex < specialists.length - 1) {
      selectedIndex = selectedIndex + 1;
    } else {
      selectedIndex = 0;
    }
    $("#detail_card").html(getSpecialistCard());
  }
  function stopOption() {
    window.clearTimeout(option_disp);
  }
  $(document).on("click", "#preBtn", function () {
    console.log("preBtn", selectedIndex);
    if (selectedIndex > 0) {
      selectedIndex = selectedIndex - 1;
    } else {
      selectedIndex = specialists.length - 1;
    }
    $("#detail_card").html(getSpecialistCard());
  });
  $(document).on("click", "#nextBtn", function () {
    console.log("nextbtn", selectedIndex);
    if (selectedIndex < specialists.length - 1) {
      selectedIndex = selectedIndex + 1;
    } else {
      selectedIndex = 0;
    }
    $("#detail_card").html(getSpecialistCard());
  });
  $(document).on("click", "#searh_byName", function () {
    $(".chat-input-holder").css("display", "flex");
    inputData = "doctor_name";
    html =
      '<div class="message-box-holder">' +
      ' <div class="message-box ">' +
      "Search by Name" +
      "</div>" +
      // '<div class="message-receiver">😎' +
      // username +
      // " " +
      // getMommentDate($.now()) +
      // "</div>" +
      userMessage()+
      "</div>" +
      '<div class="message-box-holder">' +
      // '<div class="message-sender">Chat Support' +
      // " " +
      // getMommentDate($.now()) +
      // "</div>"
      chatbotMessage()+
      ' <div class="message-box message-partner">' +
      "Please Enter Doctor name" +
      "</div>" +
      "</div>";
    $(".chat-messages").append(html);
    scrollBottom();
  });
  $(document).on("click", "#choice_speciality", function () {
    var html =
      '<div class="message-box-holder">' +
      ' <div class="message-box ">' +
      "Find Specialist" +
      "</div>" +
      // '<div class="message-receiver">' +
      // username +
      // " " +
      // getMommentDate($.now()) +
      // "</div>" +
      userMessage()+
      "</div>" +
      specialityChoice();
    $(".chat-messages").append(html);
    scrollBottom();
  });
  $(document).on("click", "#book_doc_appointment", function () {
    stopOption();
    // window.location.replace(specialists[selectedIndex]["appointment_link"]);
    var html = 
    '<div class="message-box-holder">' +
    ' <div class="message-box ">' +
    " Book Appointment " +
    "</div>" +
    // '<div class="message-receiver">' +
    // username +
    // " " +
    // getMommentDate($.now()) +
    // "</div>" +
    userMessage()+
    " </div>";
    html += bookAppointment();
    $(".chat-messages").append(html);
    scrollBottom();
  });
  $(document).on("click", ".choice_spec", function () {
    var val = $(this).text();
    searhBySpecification(val);
    html =
      '<div class="message-box-holder">' +
      ' <div class="message-box ">' +
      val +
      "</div>" +
      // '<div class="message-receiver">' +
      // username +
      // " " +
      // getMommentDate($.now()) +
      // "</div>" +
      userMessage()+
      "</div>" +
      '<div class="message-box-holder">' +
      // '<div class="message-sender">Chat Support' +
      // " " +
      // getMommentDate($.now()) +
      // '</div>'
      chatbotMessage()+
      '<div class="message-box message-partner" id="detail_card">' +
      // " Please enter department or doctor specialization<br/>" +
      getSpecialistCard() +
      "</div></div>";
    $(".chat-messages").append(html);
    scrollBottom();
    if (option_disp != "") stopOption();
    option_disp = window.setInterval(() => {
      changeOption();
    }, 3000);
  });

  function specialityChoice() {
    html =
      '<div class="message-box-holder">' +
      // '<div class="message-sender">Chat Support' +
      // " " +
      // getMommentDate($.now()) +
      // '</div>'
      chatbotMessage()+
      '<div class="message-box message-partner">' +
      "<p>Please enter department or doctor specialization to see more details about thr doctors</p><br/>" +
      ' <div class="choice_spec option-btn" id="dept_Orthopedics">Orthopedics</div><br/>' +
      '<div class="choice_spec option-btn" id="dept_Gastroenterology">Gastroenterology</div><br/>' +
      '<div class="choice_spec option-btn" id="dept_Oncology">Oncology</div><br/>' +
      "</div></div>";

    return html;
  }
  function selectDocBy() {
    html =
      "<p>Search doctor by name or a specialist by your symptoms to see more details about the doctor.<p/><br/>" +
      ' <div class="choice_doc option-btn" id="choice_speciality">Find Specialist</div><br/>' +
      '<div class="choice_doc option-btn" id="searh_byName">Search By Name</div><br/>'; // +
    return html;
  }

  function scrollBottom() {
    var height = 0;
    $(".message-box-holder").each(function (i, value) {
      height += parseInt($(this).height());
    });

    height += "";

    $(".chat-messages").animate({ scrollTop: height });
  }

  function getSpecialistCard() {
   
    var html = "";
    html =
     
      '<div class="nav-arrow left-arrow" id="preBtn"><i class="fa fa-arrow-circle-o-left"></i></div><div class="display-card">' +
      ' <div class="card-border">' +
      ' <div class="image-section">' +
      ' <div class="image-container">' +
      ' <img data-card-image="" class=""' +
      " src=" +
      specialists[selectedIndex]["img"] +
      ">" +
      "</div>" +
      " </div>" +
      '<div class="data-section">' +
      '<div class="data-section-container">' +
      '<div class="data-title text-left" style="font-weight:bold" data-card-title="">' +
      specialists[selectedIndex]["title"] +
      "</div>" +
      '<div class="data-subtitle text-left" style="font-weight:bold" data-card-subtitle="">' +
      specialists[selectedIndex]["sort_qualification"] +
      "</div>" +
      '<div class="option-btn" id="book_doc_appointment">Book Appointment</div>';
     "</div>" +
      " </div>" +
      " </div>" +
      '</div> <div class="nav-arrow right-arrow" id="nextBtn"><i class="fa fa-arrow-circle-o-right"></i></div>'; //+
   
    return html;
  }
  function searhByName(name) {
    specialists = all_doc.filter(
      (v) => v.title.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
    console.log("search by name ", name, specialists.length);
    selectedIndex = 0;
  }
  function searhBySpecification(name) {
    specialists = all_doc.filter((v) => v.speciality == name);
    console.log("search by specification ", name, specialists.length);
    selectedIndex = 0;
  }
  function getGreeting(){
    var thehours = new Date().getHours();
	var themessage;
  if (thehours >= 0 && thehours < 12) {
		themessage = 'Good morning'; 

	} else if (thehours >= 12 && thehours < 17) {
		themessage = 'Good afternoon';

	} else if (thehours >= 17 && thehours < 24) {
		themessage = 'Good evening';
	}
  return themessage;
  }
  function getMommentDate(dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var para = "am";
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    if(h>11){
      para = 'pm';
    }
    h=h%12;
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    var date = day + "/" + month + "/" + year + " " + h + ":" + m +" "+ para;// ":" + s;

    return date;
  }

  function contactform(){
   var  html ='<div class="form">'+
            '<div class="mt-1 row">'+
                '<div class="text-center col">'+
                  '<span class="h6 font-weight-bold">Contact Information</span><p class="m-0">Please enter your contact details. Our support team will connect with you for more details of bookings</p>'+
                '</div>'+
            '</div>'+
            '<div class="mt-2 row"><div class="col">'+
             ' <div class="input-container">'+
                '<div class="icon-container">'+
                 ' <span class="fa fa-user"></span>'+
               ' </div>'+
               ' <input type="text" placeholder="Name" id="name" class="form-control" style="font-style: inherit;">'+
             ' </div>'+
              '<div class="invalid-feedback invalid-text d-none">please enter a valid name</div>'+
            '</div></div>'+
            '<div class="mt-2 row"><div class="col"><div class="input-container"><div class="icon-container"><span class="fa fa-envelope"></span></div><input type="email" placeholder="Email"  id="email" class="form-control" style="font-style: inherit;"></div><div class="invalid-feedback invalid-email d-none">please enter a valid email address</div></div></div>'+
            '<div class="mt-2 row"><div class="col"><div class="input-container"><div class="icon-container"><span class="fa fa-phone"></span></div><input type="number" placeholder="Mobile"  id="mobile" class="form-control" style="font-style: inherit;"></div><div class="invalid-feedback invalid-number d-none">please enter a valid mobile number</div></div></div>'+
            '<div class="mt-4 row"><div class="text-center col"><button class="btn btn-success mr-2"> Submit <span class="fa fa-send"></span></button></div></div></div>';

   return html;
  }
  var myData = {};
  $(document).on('blur',".form-control",function() {
    var val = $(this).val();
    var type = $(this).attr('type');
    console.log('from form control', val,type);
    if(val==""){
      // $(this).closest('.invalid-'+type).css('display','block');
      $('.invalid-'+type).css('display','block');
    }else{
      // $(this).closest('.invalid-'+type).css('display','none');
      switch (type) {
        case 'email':
          if(!IsEmail(val)){
            $('.invalid-'+type).css('display','block');
          }else{
            $('.invalid-'+type).css('display','none');
          }
          break;
       case 'number':
          if(val.length<10){
            $('.invalid-'+type).css('display','block');
          }else{
            $('.invalid-'+type).css('display','none');
          }
          break;
      
        default:
          $('.invalid-'+type).css('display','none');
          break;
      }
     
    }
  });
  $(document).on('click','.btn-success',function(){
    var nm = $('#name').val();
    var email = $('#email').val();
    var mobile = $('#mobile').val();
    var flag = true;
    if(nm==""){
      $('.invalid-text').css('display','block');
      flag = false;
    }
    console.log('email', email, IsEmail(email));
    if(email==""||!IsEmail(email)){
      $('.invalid-email').css('display','block');
      flag = false;
    }
    if(mobile==""||mobile.length < 10){
      $('.invalid-number').css('display','block');
      flag = false;
    }
    if(flag){
      mydata = {"name":nm,
      "mobile":mobile,
      "email":email
    };
    $('.contact-form').remove();
    var html= '<div class="message-box-holder">'+
    // <div class="message-sender">🤖 Chat Support' +
    // " " +
    // getMommentDate($.now()) +
    // '</div>
    chatbotMessage()+
    '<div class="message-box message-partner">' +
      "<p>Thanks for sharing the details.</p><br/>" +
      '<ul>'+
      '<li>Name: '+nm+'</li>'+
      '<li>Email: '+email+'</li>'+
      '<li>Mobile: +91'+mobile+'</li>'+
      '</ul>'+
      '</div>';
      html += '<div class="message-box message-partner">' +
      // '<span class="h6 font-weight-bold">Select Appointment Date and Time UTC+05:30</span><br/>' +
      appointmentDetails()+
      '</div></div>';
      $(".chat-messages").append(html);
      scrollBottom();
    }
  });
  function chatbotMessage(){
    return '<div class="message-sender">🤖 Chat Support' +
    " " +
    getMommentDate($.now()) +
    '</div>';
  }
  function userMessage(){
    return '<div class="message-receiver">😎 ' +
    username +
    " " +
    getMommentDate($.now()) +
    "</div>";
  }
  function appointmentDetails(){
    return '<div class="form">'+
    '  <div class="mt-1 row">'+
    '    <div class="text-center col">'+
    '      <span class="h6 font-weight-bold">Select Appointment Date and Time UTC+05:30</span>'+
    '      <p class="m-0"></p>'+
    '    </div>'+
    '  </div>'+
    '  <div class="mt-2 row">'+
    '    <div class="col">'+
    '      <div class="input-container">'+
    '        <div class="icon-container">'+
    '          <span class="fa fa-calendar"></span>'+
    '        </div>'+
    '        <input type="date" placeholder="Appointment Date" class="form-control" style="font-style: inherit;"/>'+
    '      </div>'+
    '      <div class="invalid-feedback d-none">please select a valid date</div>'+
    '    </div>'+
    '  </div>'+
    '  <div class="mt-2 row">'+
    '    <div class="col">'+
    '      <div class="input-container">'+
    '        <div class="icon-container">'+
    '          <span class="fa fa-clock-o"></span>'+
    '        </div>'+
    '        <select name="Appointment Time" class="form-control1" style="font-style: inherit;">'+
    '          <option value="10 AM" selected>10 AM</option>'+
    '          <option value=" 11 AM"> 11 AM</option>'+
    '          <option value=" 12 PM"> 12 PM</option>'+
    '          <option value=" 1 PM"> 1 PM</option>'+
    '          <option value=" 2 PM"> 2 PM</option>'+
    '          <option value=" 3 PM"> 3 PM</option>'+
    '          <option value=" 4 PM"> 4 PM</option>'+
    '          <option value=" 5 PM"> 5 PM</option>'+
    '          <option value=" 6 PM"> 6 PM</option>'+
    '          <option value=" 7 PM"> 7 PM</option>'+
    '          <option value=" 8 PM"> 8 PM</option>'+
    '        </select>'+
    '      </div>'+
    '      <div class="invalid-feedback d-none">please select a valid time</div>'+
    '    </div>'+
    '  </div>'+
    '  <div class="mt-4 row">'+
    '    <div class="text-center col">'+
    '      <button class="btn btn-success mr-2"> Submit <span class="fa fa-send"></span></button>'+
    '    </div>'+
    '  </div>'+
    '</div>';
  }
  
});
