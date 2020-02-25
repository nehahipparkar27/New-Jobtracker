function jobreqiddropdown() {

    jobreqID = '';
    var url = "http://localhost:2000/jobreqid";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //jobstatusdrop = jobstatusdrop+"<option>--Select--</option>";
            for (var i = 0; i < result[0].length; i++) {
                jobreqID = jobreqID +
                    '<option value="' + result[0][i].jobdescriptionid + '" >' + result[0][i].requirmentid + '</option>';
            }
            $("#jobrecid").html(jobreqID);
            $("#reqiddrop").html(jobreqID);
            //$("#statuspedit").html(jobstatusdrop);
        }
    });
}

function editjobtitilebyreqid() {

    var reqId = $('[name="pjob_recid"]').find(":selected").val();
    var jobtitilebyreqid = "";

    var url = "http://localhost:2000/jobtitlebyreqid/" + reqId;
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //profilestatebycountry = profilestatebycountry+"<option>--Select--</option>";
            for (var i = 0; i < result[0].length; i++) {
                jobtitilebyreqid = jobtitilebyreqid +
                    '<option value="' + result[0][i].jdtitle + '">' + result[0][i].jdtitle + '</option>';
            }
            $("#profilejobtitle").html(jobtitilebyreqid);
        }
    });
}

function editprofilestatedropdown() {


    var profilecountry = $('[name="pedit_country"]').find(":selected").val();

    var profilestatebycountry = "";
    var url = "http://localhost:2000/statebycountry/" + profilecountry;

    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //profilestatebycountry = profilestatebycountry+"<option>--Select--</option>";

            for (var i = 0; i < result[0].length; i++) {
                profilestatebycountry = profilestatebycountry +
                    '<option value="' + result[0][i].stateid + '">' + result[0][i].state + '</option>';
            }

            $("#peditstate").html(profilestatebycountry);
        }
    });
}

function profiletabcountrydropdown() {
    var profilecountry = "";
    var url = "http://localhost:2000/profilecountry";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            //profilecountry = profilecountry+"<option>--Select--</option>";
            for (var i = 0; i < result[0].length; i++) {
                profilecountry = profilecountry +
                    '<option value="' + result[0][i].countryid + '">' + result[0][i].country + '</option>';
            }
            $("#country").html(profilecountry);
            $("#peditcountry").html(profilecountry);
        }
    });
}

function profiletabstatedropdown() {

    let profilecountry = $('[name="p_country"]').find(":selected").val();
    var profilestatebycountry = "";
    var url = "http://localhost:2000/statebycountry/" + profilecountry;
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            //profilestatebycountry = profilestatebycountry+"<option>--Select--</option>";
            for (var i = 0; i < result[0].length; i++) {
                profilestatebycountry = profilestatebycountry +
                    '<option value="' + result[0][i].stateid + '">' + result[0][i].state + '</option>';
            }
            $("#state").html(profilestatebycountry);
            //$("#srepedit").html(salesrepdropdown);
        }
    });
}

function highestqualdropdown() {
    var highestqual = "";
    var url = "http://localhost:2000/highestqual";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //highestqual = highestqual + "<option>--Select--</option>";
            for (var i = 0; i < result[0].length; i++) {
                highestqual = highestqual +
                    '<option value="' + result[0][i].highestqualificationid + '">' + result[0][i].highestqualification + '</option>';
            }
            $("#highestquali").html(highestqual);
            //$("#srepedit").html(salesrepdropdown);
            $("#pedithighestquali").html(highestqual);
        }
    });
}

function profilestatusdropdown() {
    var profilestatus = "";
    var url = "http://localhost:2000/profilestatus";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //profilestatus = profilestatus + "<option>--Select--</option>";

            for (var i = 0; i < result[0].length; i++) {
                profilestatus = profilestatus +
                    '<option value="' + result[0][i].statusid + '">' + result[0][i].status + '</option>';
            }
            $("#status").html(profilestatus);
            //$("#srepedit").html(salesrepdropdown);
            $("#peditstatus").html(profilestatus);
        }
    });
}

function profilevendordropdown() {

    profilevendor = '';
    var url = "http://localhost:2000/profilevendor";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            for (var i = 0; i < result[0].length; i++) {
                profilevendor = profilevendor +
                    '<option value="' + result[0][i].vendorid + '">' + result[0][i].vendorname + '</option>';
            }
            $("#profilevendorid").html(profilevendor);
            $("#peditvendorid").html(profilevendor);
            //$("#statuspedit").html(jobstatusdrop);
        }
    });
}

function statuschange(pstatusid) {

    if (pstatusid == "Ltts Screening Reject") {

        $("#lttsInterviewBtn").css("display", "none");
        $("#customerInterviewBtn").css("display", "none");

        $("#LttsScreening").removeClass("active").addClass("is-reject");
        $("#LttsInterview").removeClass("active submitted");
        $("#customerScreening").removeClass("active submitted");
        $("#customerInterview").removeClass("active submitted");
        $("#onboarded").removeClass("active submitted");
    }

    else if (pstatusid == "Submitted For Ltts Screening") {

        $("#lttsInterviewBtn").css("display", "none");
        $("#customerInterviewBtn").css("display", "none");

        $("#LttsScreening").removeClass("is-reject active").addClass("submitted");
        $("#LttsInterview").removeClass("active is-reject submitted");
        $("#customerScreening").removeClass("active is-reject submitted");
        $("#customerInterview").removeClass("active is-reject submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }
    else if (pstatusid == "Shortlist For Ltts Interview") {
console.log('lttsinterview');
        $("#lttsInterviewBtn").css("display", "block");
        $("#customerInterviewBtn").css("display", "none");
        
        $("#ltts:before").css("background","grey");
        $("#LttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#LttsInterview").removeClass("active is-reject").addClass("submitted");
        $("#customerScreening").removeClass("active is-reject submitted");
        $("#customerInterview").removeClass("active is-reject submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }

    else if (pstatusid == "Ltts Interview Reject") {

        $("#lttsInterviewBtn").css("display", "none");
        $("#customerInterviewBtn").css("display", "none");

        $("#LttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#LttsInterview").removeClass("active submitted").addClass("is-reject");
        $("#customerScreening").removeClass("active is-reject submitted");
        $("#customerInterview").removeClass("active is-reject submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }

    else if (pstatusid == "Ltts Interview Select") {

        $("#lttsInterviewBtn").css("display", "none");
        $("#customerInterviewBtn").css("display", "none");

        $("#lttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#lttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customerScreening").removeClass("active is-reject submitted");
        $("#customerInterview").removeClass("active is-reject submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }

    else if (pstatusid == "Submitted For Customer Screening") {

        $("#lttsInterviewBtn").css("display", "none");
        $("#customerInterviewBtn").css("display", "none");

        $("#lttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#lttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customerScreening").removeClass("is-reject active").addClass("submitted");
        $("#customerInterview").removeClass("active is-reject submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }

    else if (pstatusid == "Customer Screening Reject") {

        $("#lttsInterviewBtn").css("display", "none");
        $("#customerInterviewBtn").css("display", "none");

        $("#lttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#lttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customerScreening").removeClass("submitted active").addClass("is-reject");
        $("#customerInterview").removeClass("active is-reject submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }

    else if (pstatusid == "Shortlist For Customer Interview") {

        $("#customerInterviewBtn").css("display", "block");
        $("#lttsInterviewBtn").css("display", "none");

        $("#lttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#lttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customerScreening").removeClass("is-reject submitted").addClass("active");
        $("#customerInterview").removeClass("is-reject active").addClass("submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }

    else if (pstatusid == "Customer Interview Reject") {

        $("#lttsInterviewBtn").css("display", "none");
        $("#customerInterviewBtn").css("display", "none");

        $("#lttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#lttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customerScreening").removeClass("is-reject submitted").addClass("active");
        $("#customerInterview").removeClass("submitted active").addClass("is-reject");
        $("#onboarded").removeClass("active is-reject submitted");
    }

    else if (pstatusid == "Customer Interview Select") {

        $("#lttsInterviewBtn").css("display", "none");
        $("#customerInterviewBtn").css("display", "none");

        $("#lttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#lttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customerScreening").removeClass("is-reject submitted").addClass("active");
        $("#customerInterview").removeClass("is-reject submitted").addClass("active");
        $("#onboarded").removeClass("active is-reject submitted");
    }

    else if (pstatusid == "On-Boarded") {

        $("#lttsInterviewBtn").css("display", "none");
        $("#customerInterviewBtn").css("display", "none");

        $("#lttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#lttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customerScreening").removeClass("is-reject submitted").addClass("active");
        $("#customerInterview").removeClass("is-reject submitted").addClass("active");
        $("#onboarded").removeClass("is-reject submitted").addClass("active");
    }
}


function addprofile() {

    //var Profileid = $('[name="profileid"]').val();
    var Jobrecid = $('[name="pjob_recid"]').val();
    var jobreqcode = $("#jobrecid option:selected").text();
    var Firstname = $('[name="pfirst_name"]').val();
    var Lastname = $('[name="plast_name"]').val();
    var Email = $('[name="p_email"]').val();
    var Mobile = $('[name="p_mobile"]').val();
    var Dob = $('[name="p_dob"]').val();
    var City = $('[name="p_city"]').val();
    var State = $('[name="p_state"]').val();
    var Country = $('[name="p_country"]').val();
    var Experience = $('[name="p_experience"]').val();
    var Highestquali = $('[name="p_highestquali"]').val();
    var Currentjobtitle = $('[name="pcurrent_jobtitle"]').val();
    var Currentsalary = $('[name="pcurrent_salary"]').val();
    var Expectedsalary = $('[name="pexpected_salary"]').val();
    var Skillset = $('[name="pskill_set"]').val();
    var Skypeid = $('[name="pskype_id"]').val();
    var Noticeperiod = $('[name="pnotice_period"]').val();
    var Currentlocation = $('[name="pcurrent_location"]').val();
    var Desiredlocation = $('[name="pdesired_location"]').val();
    var Status = $('[name="p_status"]').val();
    var Resume = $('[name="presume_name"]').val();
    var Vendorid = $("#profilevendorid option:selected").val();
    var Createdby = 'Admin';
    var Updateby = 'Admin';
    var Pjobtitle = $('[name="pjob_title"]').val();
    var Psecondskill = $('[name="sskill_set"]').val();
    var Resigned = $('input[name=resigned]:checked').val();
    var Vendorname = $("#profilevendorid option:selected").text();

    var data = {

        //"Profileid": Profileid,
        "Jobrecid": Jobrecid,
        "jobreqcode": jobreqcode,
        "Firstname": Firstname,
        "Lastname": Lastname,
        "Email": Email,
        "Mobile": Mobile,
        "Dob": Dob,
        "City": City,
        "State": State,
        "Country": Country,
        "Experience": Experience,
        "Highestquali": Highestquali,
        "Currentjobtitle": Currentjobtitle,
        "Currentsalary": Currentsalary,
        "Expectedsalary": Expectedsalary,
        "Skillset": Skillset,
        "Skypeid": Skypeid,
        "Noticeperiod": Noticeperiod,
        "Currentlocation": Currentlocation,
        "Desiredlocation": Desiredlocation,
        "Status": Status,
        "Resume": Resume,
        "Vendorid": Vendorid,
        "Createdby": Createdby,
        "Updateby": Updateby,
        "Pjobtitle": Pjobtitle,
        "Psecondskill": Psecondskill,
        "Resigned": Resigned,
        "Vendorname": Vendorname,
    }

    data = JSON.stringify(data);
    console.log(data);

    var url = "http://localhost:2000/addprofiles";

    console.log(url);


    if (Jobrecid != "" && jobreqcode != "" && Firstname != "" && Lastname != "" && Email != "" && Mobile != ""
        && Experience != "" && Highestquali != "" && Currentjobtitle != "" && Currentsalary != ""
        && Expectedsalary != "" && Skillset != "" && Noticeperiod != "" && Currentlocation != "" && Desiredlocation != ""
        && Status != "" && Experience != "" && Resigned != "" && Vendorid != "" && Pjobtitle != "" && Vendorname != "") {
        $.ajax({
            url: url,
            type: "post",
            async: false,
            data: data,
            contentType: "application/json",
            dataType: "json",
            success: function (result) {

                console.log(result);
                $('#profilesmodal').modal('hide');
                $('#successmodal').modal('show');
                clearFormProfile();


            },
            error: function () {
            }
        });

    }

    profileslistingdetails();

}


function profileslistingdetails() {

    var tableData = "";

    var url = "http://localhost:2000/profileslistingdetails";

    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            for (var i = 0; i < result[0].length; i++) {

                var profileID = "\"" + result[0][i].profileid + "\"";
                var statusId = "\"" + result[0][i].status + "\"";

                if (result[0][i].psecondaryskill == "undefined") {

                    result[0][i].psecondaryskill = ""
                }


                tableData = tableData + "  <tr class='content' data-target='#profileEditModal' data-toggle='modal' data-backdrop='static' data-keyboard='false'  onclick=' statuschange(" + statusId + "),profilesdisplay(" + profileID + ")' > " +

                    "<td >" + result[0][i].jobreqcode + "</td>" +
                    "<td >" + result[0][i].pjobtitle + "</td>" +
                    "<td >" + result[0][i].firstname + "&nbsp" + result[0][i].lastname + "</td>" +
                    "<td >" + result[0][i].skillset + "</td>" +
                    "<td >" + result[0][i].psecondaryskill + "</td>" +
                    "<td >" + result[0][i].email + "</td>" +
                    "<td >" + result[0][i].mobile + "</td>" +
                    "<td >" + result[0][i].dob + "</td>" +
                    "<td >" + result[0][i].city + "</td>" +
                    "<td >" + result[0][i].currentjobtitle + "</td>" +
                    "<td >" + result[0][i].experince + "</td>" +
                    "<td >" + result[0][i].currentsalary + "</td>" +
                    "<td >" + result[0][i].expectedsalary + "</td>" +
                    "<td >" + result[0][i].noticeperiod + "</td>" +
                    "<td >" + result[0][i].status + "</td>" +
                    "<td >" + result[0][i].pvendorname + "</td>" +
                    "<td >" + result[0][i].createdby + "</td>" +
                    "<td >" + result[0][i].createddate + "</td>" +
                    "<td >" + result[0][i].updatedby + "</td>" +
                    "<td >" + result[0][i].updateddate + "</td>" +
                    // "<td >" + "<a>" + "<i class='far fa-edit' data-target='#profileEditModal' data-toggle='modal' data-backdrop='static' data-keyboard='false'  onclick=' statuschange(" + statusId + "),profilesdisplay(" + profileID + ")' style='font-size: 20px;color:black;position:relative;left:3%;'></i>" + "</a>" + "</td>" +

                    "</tr>";

            }

            // $("#profileslistingbody").html(tableData);
            $("#profiletable tbody").html(tableData);

            $("#profiletable").DataTable();

        }
    });
}


function profilesdisplay(i) {
    // $("#updateeditprofile").hide();
    var url = "http://localhost:2000/profilelisting/" + i;

    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {


            if (result[0][0].psecondaryskill == "undefined") {
                console.log(result[0][0].psecondaryskill);
                result[0][0].psecondaryskill = ""
            }


            if (result[0][0].Resignation == 'Y') {
                $("#editresignedy").prop('checked', true);

            }
            else if (result[0][0].Resignation == 'N') {
                $("#editresignedn").prop('checked', true);
            }

            console.log(result);
            $("#editprofilehiddenId").text(result[0][0].profileid);
            $("#pprofileid").text(result[0][0].profileid);
            $("#peditjobrecid").text(result[0][0].jobreqcode);
            $("#peditfirstname").val(result[0][0].firstname);
            $("#peditlastname").val(result[0][0].lastname);
            $("#peditemail").val(result[0][0].email);
            $("#peditmobile").val(result[0][0].mobile);
            $("#peditdob").val(result[0][0].dob.slice(0, 10));
            $("#peditcity").val(result[0][0].city);
            $("#peditstate").val(result[0][0].stateid).attr('selected', 'selected');
            $("#peditcountry").val(result[0][0].countryid).attr('selected', 'selected');
            $("#peditexperience").val(result[0][0].experince);
            $("#pedithighestquali").val(result[0][0].highestqualificationid).attr('selected', 'selected');
            $("#peditcurrentjobtitle").val(result[0][0].currentjobtitle);
            $("#peditcurrentsalary").val(result[0][0].currentsalary);
            $("#peditexpectedsalary").val(result[0][0].expectedsalary);
            $("#peditskillset").val(result[0][0].skillset);
            $("#peditskypeid").val(result[0][0].skypeid);
            $("#peditnoticeperiod").val(result[0][0].noticeperiod);
            $("#peditcurrentlocation").val(result[0][0].currentlocationid).attr('selected', 'selected');
            $("#peditdesiredlocation").val(result[0][0].desiredlocationid).attr('selected', 'selected');
            $("#peditstatus").val(result[0][0].statusid).attr('selected', 'selected');
            $("#peditvendorid").val(result[0][0].vendorid);
            $("#peditfilename").val(result[0][0].resumename);
            $("#peditjobtitle").text(result[0][0].pjobtitle)
            $("#seditskillset").val(result[0][0].psecondaryskill);
            $("#peditjobtitle").text(result[0][0].pjobtitle);
            // lttsinterviewfields
            $("#profileinterviewhiddenId").text(result[0][0].profileid);
            $("#jobinterviewhiddenId").text(result[0][0].jobrecid);
            $("#interviewreqid").val(result[0][0].jobreqcode);
            $("#lttscandname").val(result[0][0].firstname + " " + result[0][0].lastname);
            $("#lttsjobtitle").val(result[0][0].pjobtitle);
        }

    });

}


function updateprofile() {

    var peditprofileId = $('[name="editprofile_hiddenId"]').text();
    var peditfirstname = $('[name="peditfirst_name"]').val();
    var peditlastname = $('[name="peditlast_name"]').val();
    var peditemail = $('[name="pedit_email"]').val();
    var peditmobile = $('[name="pedit_mobile"]').val();
    var peditdob = $('[name="pedit_dob"]').val();
    var peditcity = $('[name="pedit_city"]').val();
    var peditstate = $('[name="pedit_state"]').val();
    var peditcountry = $('[name="pedit_country"]').val();
    var peditexperience = $('[name="pedit_experience"]').val();
    var pedithighestquali = $('[name="pedit_highestquali"]').val();
    var peditcurrentjobtitle = $('[name="peditcurrent_jobtitle"]').val();
    var peditcurrentsalary = $('[name="peditcurrent_salary"]').val();
    var peditexpectedsalary = $('[name="peditexpected_salary"]').val();
    //	var peditresigned = $('[name="editresigned"]').val();
    var peditskillset = $('[name="peditskill_set"]').val();
    var seditskillset = $('[name="seditskill_set"]').val();
    console.log(seditskillset);
    var peditskypeid = $('[name="peditskype_id"]').val();
    var peditnoticeperiod = $('[name="peditnotice_period"]').val();
    var peditcurrentlocation = $('[name="peditcurrent_location"]').val();
    var peditdesiredlocation = $('[name="peditdesired_location"]').val();
    var peditstatus = $('[name="pedit_status"]').val();
    var peditresumename = $('[name="peditresume_name"]').val();
    var peditvendorid = $('[name="pedit_vendorid"]').val();
    var editresigned = $('input[name=editresigned]:checked').val();
    var peditvendorname = $("#peditvendorid option:selected").text();



    var data = {

        "peditprofileId": peditprofileId,
        "peditfirstname": peditfirstname,
        "peditlastname": peditlastname,
        "peditemail": peditemail,
        "peditmobile": peditmobile,
        "peditdob": peditdob,
        "peditcity": peditcity,
        "peditstate": peditstate,
        "peditcountry": peditcountry,
        "peditexperience": peditexperience,
        "pedithighestquali": pedithighestquali,
        "peditcurrentjobtitle": peditcurrentjobtitle,
        "peditcurrentsalary": peditcurrentsalary,
        "peditexpectedsalary": peditexpectedsalary,
        "peditskillset": peditskillset,
        "seditskillset": seditskillset,
        "peditskypeid": peditskypeid,
        "peditnoticeperiod": peditnoticeperiod,
        "peditcurrentlocation": peditcurrentlocation,
        "peditdesiredlocation": peditdesiredlocation,
        //"peditresigned": peditresigned,
        "peditstatus": peditstatus,
        "peditresumename": peditresumename,
        "peditvendorid": peditvendorid,
        "peditupdatedby": 'Admin',
        "peditresignation": editresigned,
        "peditvendorname": peditvendorname,
    }

    data = JSON.stringify(data);
    console.log(data);

    url = "http://localhost:2000/updateprofile/" + peditprofileId,

        console.log(url);

    $.ajax({
        url: url,
        type: "post",
        async: false,
        data: data,
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
            console.log(result);

        },
        error: function () {
        }
    });

    profileslistingdetails();

}
function enableprofileedit() {

    // $("#profileeditbtn").hide();
    $("#updateeditprofile").show();
    $("#peditsalutation").attr('disabled', false);
    $("#peditfirstname").attr('disabled', false);
    $("#peditlastname").attr('disabled', false);
    $("#peditemail").attr('disabled', false);
    $("#peditmobile").attr('disabled', false);
    $("#peditdob").attr('disabled', false);
    $("#peditcity").attr('disabled', false);
    $("#peditstate").attr('disabled', false);
    $("#peditcountry").attr('disabled', false);
    $("#peditpostalcode").attr('disabled', false);
    $("#peditexperience").attr('disabled', false);
    $("#pedithighestquali").attr('disabled', false);
    $("#peditcurrentjobtitle").attr('disabled', false);
    $("#peditcurrentsalary").attr('disabled', false);
    $("#peditexpectedsalary").attr('disabled', false);
    $("#peditskillset").attr('disabled', false);
    $("#peditskypeid").attr('disabled', false);
    $("#peditnoticeperiod").attr('disabled', false);
    $("#peditcurrentlocation").attr('disabled', false);
    $("#peditdesiredlocation").attr('disabled', false);
    $("#peditresigned").attr('disabled', false);
    $("#peditevaldate").attr('disabled', false);
    $("#peditinternaltd").attr('disabled', false);
    $("#peditpanel").attr('disabled', false);
    $("#peditscreening").attr('disabled', false);
    $("#peditstatus").attr('disabled', false);
    $("#peditvendorid").attr('disabled', false);
    $("#peditfilename").attr('disabled', false);
    $("#seditskillset").attr('disabled', false);
}
