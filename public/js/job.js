
function budropdown() {
    var budropdown = "";
    var url = "http://localhost:2000/bu";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            for (var i = 0; i < result[0].length; i++) {
                budropdown = budropdown +
                    '<option value="' + result[0][i].bussinessunitid + '">' + result[0][i].bussinessunit + '</option>';
            }
            $("#bunit").html(budropdown);
            $("#buedit").html(budropdown);
        }
    });
}

function salesdropdown() {
    var salesdropdown = "";
    var url = "http://localhost:2000/sales";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            for (var i = 0; i < result[0].length; i++) {
                salesdropdown = salesdropdown +
                    '<option value="' + result[0][i].salesregionsid + '">' + result[0][i].salesregions + '</option>';
            }
            $("#salesregion").html(salesdropdown);
            $("#sregionedit").html(salesdropdown);
        }
    });
}

function customerdropdown() {
    var customerdropdown = "";
    var url = "http://localhost:2000/customer";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //            customerdropdown = customerdropdown+"<option>--Select--</option>";

            for (var i = 0; i < result[0].length; i++) {
                customerdropdown = customerdropdown +
                    '<option value="' + result[0][i].customersid + '">' + result[0][i].customers + '</option>';
            }
            $("#cus").html(customerdropdown);
            $("#custedit").html(customerdropdown);
            $("#jobaccount").html(customerdropdown);
            $("#intcustomer").html(customerdropdown);

        }
    });
}

function salesrepdropdown() {
    var salesrepdropdown = "";
    var url = "http://localhost:2000/salesrep";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            //salesrepdropdown = salesrepdropdown+"<option>--Select--</option>";

            for (var i = 0; i < result[0].length; i++) {
                salesrepdropdown = salesrepdropdown +
                    '<option value="' + result[0][i].salesrepid + '">' + result[0][i].salesrep + '</option>';
            }
            $("#salesrepresent").html(salesrepdropdown);
            $("#srepedit").html(salesrepdropdown);
        }
    });
}

function jobstatusdropdown() {
    jobstatus = '';
    var url = "http://localhost:2000/jobstatusnew";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            for (var i = 0; i < result[0].length; i++) {
                jobstatus = jobstatus +
                    '<option value="' + result[0][i].jobstatusid + '">' + result[0][i].jobstatus + '</option>';
            }
            $("#jstatus").html(jobstatus);
            $("#jstatusedit").html(jobstatus);
            //$("#statuspedit").html(jobstatusdrop);
        }
    });
}

function currentlocationdropdown() {
    var currentlocation = "";
    var url = "http://localhost:2000/curentlocation";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //            currentlocation = currentlocation+"<option>--Select--</option>";
            //	currentlocation = currentlocation + "<option style='display:none;'></option>";

            for (var i = 0; i < result[0].length; i++) {
                currentlocation = currentlocation +
                    '<option value="' + result[0][i].locationid + '">' + result[0][i].location + '</option>';
            }
            $("#currentlocation").html(currentlocation);
            $("#desiredlocation").html(currentlocation);
            $("#vendorpriloc").html(currentlocation);
            $("#editvendorpriloc").html(currentlocation);
            $("#peditcurrentlocation").html(currentlocation);
            $("#peditdesiredlocation").html(currentlocation);
            $("#jlocation").html(currentlocation);
            $("#lttsintlocation").html(currentlocation);
            $("#jloc").html(currentlocation);
            $("#jlidedit").html(currentlocation);

        }
    });
}

function addjd() {
    var Requirement = $('[name="Requirementid"]').val();
    var Role = $('[name="role"]').val();
    var rolelevel = $('[name="role_level"]').val();
    var jobtitle = $('[name="jobtitle"]').val();
    var Position = $('[name="positions"]').val();
    var closedate = $('[name="ex_date"]').val();
    var dateofreq = $('[name="req_date"]').val();
    var jdduration = $('[name="jduration"]').val();
    var Exp = $('[name="experience"]').val();
    var PSkill = $('[name="primary_skill"]').val();
    var SSkill = $('[name="secondry_skill"]').val();
    var locationflex = $('input[name=loc_flex]:checked').val();
    var customerid = $('[name="customer"]').val();
    var jdstatus = $('[name="j_status"]').val();
    var buid = $('[name="bu_unit"]').val();
    var salesregionid = $('[name="sales_region"]').val();
    var salesrepid = $('[name="sale_rep"]').val();
    var joblocation = $('#jloc option:selected').text();
    var joblocationid = $('[name="job_location"]').val();
    var jDescription = $('[name="job_description"]').val();
    var buComments = $('[name="bu_comments"]').val();
    var jdComments = $('[name="jd_comments"]').val();
    var createdby = 'Admin';
    var isactive='Y';
    
    var data = {
        "Requirement": Requirement,
        "Role": Role,
        "rolelevel": rolelevel,
        "jobtitle": jobtitle,
        "Position": Position,
        "closedate": closedate,
        "dateofreq": dateofreq,
        "jdduration": jdduration,
        "Exp": Exp,
        "PSkill": PSkill,
        "SSkill": SSkill,
        "locationflex": locationflex,
        "customerid": customerid,
        "jdstatus": jdstatus,
        "buid": buid,
        "salesregionid": salesregionid,
        "salesrepid": salesrepid,
        "joblocationid": joblocationid,
        "joblocation": joblocation,
        "jDescription": jDescription,
        "buComments": buComments,
        "jdComments": jdComments,
        "createdby": createdby,
        "isactive":isactive
    }

    data = JSON.stringify(data);
    var url = "http://localhost:2000/jdescription";
    
if(Requirement!="" && Role!="" && rolelevel!="" && jobtitle!="" && Position!="" && closedate!="" && dateofreq!="" &&
     jdduration!="" && Exp!=""&& PSkill!=""&& SSkill!=""&& locationflex!=""&& customerid!=""&& jdstatus!=""&& 
     buid!=""&& salesregionid!=""&& salesrepid!="" && joblocationid!="" && joblocation!=""&& jDescription!="")
      {
    $.ajax({
        url: url,
        type: "post",
        async: false,
        data: data,
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
            $('#successmodal').modal('show');
            
        },
        error: function () {
        }
        
    });
    clearFormJob();

    }		
    
}

function joblistingdetails() {
    var tableData = "";

    var url = "http://localhost:2000/joblistingdetails";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            for (var i = 0; i < result[0].length; i++) {
                
                var jobdescriptionID = "\"" + result[0][i].jobdescriptionid + "\"";
                tableData = tableData + "  <tr class='content' data-target='#jobModal' data-toggle='modal' data-backdrop='static' data-keyboard='false' style='white-space:nowrap' onclick='jobdisplay(" + jobdescriptionID + ")'> " +
                    //"<td id='' hidden>" + result[0][i].contactid + "</td>" +
                    "<td >" + result[0][i].requirmentid + "</td>" +
                    "<td >" + result[0][i].role + "</td>" +
                    "<td >" + result[0][i].noofpositions + "</td>" +
                    "<td >" + result[0][i].experience + "</td>" +
                    "<td >" + result[0][i].jdtitle + "</td>" +
                    "<td >" + result[0][i].duration + "</td>" +
                    "<td >" + result[0][i].primaryskills + "</td>" +
                    "<td >" + result[0][i].secondaryskills + "</td>" +
                    "<td >" + result[0][i].jobstatus + "</td>" +
                    "<td >" + result[0][i].dateofreq + "</td>" +
                    "<td >" + result[0][i].closedate + "</td>" +
                    "<td >" + result[0][i].customers + "</td>" +
                    "<td >" + result[0][i].bussinessunit + "</td>" +
                    "<td >" + result[0][i].salesregions + "</td>" +
                    "<td >" + result[0][i].salesrep + "</td>" +
                    "<td >" + result[0][i].joblocation + "</td>" +
                    "<td >" + result[0][i].locationflexibility + "</td>" +
                    "<td >" + result[0][i].jobdescription + "</td>" +
                    "<td >" + result[0][i].createdby + "</td>" +
                    "<td >" + result[0][i].createddate + "</td>" +
                    "<td >" + result[0][i].updateby + "</td>" +
                    "<td >" + result[0][i].updatedtime + "</td>" +
                    // "<td >" + "<a>" + "<i class='far fa-edit' data-target='#jobModal' data-toggle='modal' data-backdrop='static' data-keyboard='false'  onclick='jobdisplay(" + jobdescriptionID + ")' style='font-size: 20px;color:black;position:relative;left:37%;'></i>" + "</a>" + "</td>" +
                    "</tr>";
            }
            $("#jobtable tbody").html(tableData);
            // $("#joblistingbody").html(tableData);
            $("#jobtable").DataTable();

        }
    });
}

function jobdisplay(i) {
    // $("#updatehide").hide();
    var url = "http://localhost:2000/joblisting/" + i;

    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            if (result[0][0].bucomments == undefined) {
            //	console.log(result[0][0].bucomments);
                result[0][0].bucomments == ""
            }


            if (result[0][0].locationflexibility == 'Y') {
                $("#lfedity").prop('checked', true);

            }
            else if (result[0][0].locationflexibility == 'N') {
                $("#lfeditn").prop('checked', true);
            }

            $("#jdiddisplayhidden").text(result[0][0].jobdescriptionid);
            $("#reqiddisplay").text(result[0][0].requirmentid);
            $("#jobtitleedit").val(result[0][0].jdtitle);
            $("#techleveledit").val(result[0][0].customers).attr('selected', 'selected');
            $("#jlidedit").val(result[0][0].joblocationid).attr('selected', 'selected');
            $("#psedit").val(result[0][0].primaryskills);
            $("#ssedit").val(result[0][0].secondaryskills);
            $("#nposedit").val(result[0][0].noofpositions);
            $("#roleedit").val(result[0][0].role);
            $("#jdurationedit").val(result[0][0].duration);
            $("#jstatusedit").val(result[0][0].jobstatusid).attr('selected', 'selected');
            $("#datereqedit").val(result[0][0].dateofreq.slice(0, 10));
            $("#closedateedit").val(result[0][0].closedate.slice(0, 10));
            $("#expedit").val(result[0][0].experience);
            $("#buedit").val(result[0][0].bussinessunitid).attr('selected', 'selected');
            $("#sregionedit").val(result[0][0].salesregionsid).attr('selected', 'selected');
            $("#srepedit").val(result[0][0].salesrepid).attr('selected', 'selected');
            $("#custedit").val(result[0][0].customersid).attr('selected', 'selected');
            $("#cbyedit").val(result[0][0].createdby);
            $("#ubyedit").val(result[0][0].updateby);
            $("#cbydateedit").val(result[0][0].createddate.slice(0, 10));
            $("#ubydateedit").val(result[0][0].updatedtime.slice(0, 10));
        //	$("#lfedit").val(result[0][0].locationflexibility);
            $("#jdedit").val(result[0][0].jobdescription);					
            $("#jdcomment").val(result[0][0].jdcomments);
            $("#bucomment").val(result[0][0].bucomments);

        }

    });

}

function enablejoblist() {

    $("#updatehide").show();
    // $("#edithide").hide();
    $("#jlidedit").attr('disabled', false);
    $("#expedit").attr('disabled', false);
    $("#lfedit").attr('disabled', false);
    $("#jdedit").attr('disabled', false);
    $("#buedit").attr('disabled', false);
    $("#sregionedit").attr('disabled', false);
    $("#srepedit").attr('disabled', false);
    $("#statuspedit").attr('disabled', false);
    $("#psedit").attr('disabled', false);
    $("#ssedit").attr('disabled', false);
    $("#cbyedit").attr('disabled', false);
    $("#ubyedit").attr('disabled', false);
    $("#nposedit").attr('disabled', false);
    $("#roleedit").attr('disabled', false);
    $("#cbydateedit").attr('disabled', false);
    $("#ubydateedit").attr('disabled', false);
    $("#datereqedit").attr('disabled', false);
    $("#closedateedit").attr('disabled', false);
    $("#custedit").attr('disabled', false);
    $("#jdcomment").attr('disabled', false);
    $("#bucomment").attr('disabled', false);
    $("#techleveledit").attr('disabled', false);
    $("#jdurationedit").attr('disabled', false);
    $("#reqclosedateedit").attr('disabled', false);
    $("#jstatusedit").attr('disabled', false);
    $("#jobtitleedit").attr('disabled', false);

}


function updatejd() {
    // $("#edithide").show();
    $("#updatehide").show();
    var jobdescriptionId = $('[name="jdiddisplay_hidden"]').text();
    var bussinessunit = $('[name="bu_edit"]').val();
    var salesregion = $('[name="sregion_edit"]').val();
    var salerep = $('[name="srep_edit"]').val();
    var reqid = $('[name="reqid_display"]').text();
    var jdtitle=$('[name="jobtitle_edit"]').val();
    var joblocationid = $('[name="jlid_edit"]').val();
    var joblocation = $("#jlidedit option:selected").text();
    var experience = $('[name="exp_edit"]').val();
    var dateofreq = $('[name="datereq_edit"]').val();
    var closedate = $('[name="closedate_edit"]').val();
    var locaflex = $('input[name=lf_edit]:checked').val();
    var noofpos = $('[name="npos_edit"]').val();
    var duration = $('[name="jduration_edit"]').val();
    var role = $('[name="role_edit"]').val();
    var rolelevel = $('[name="tech_leveledit"]').val();
    var customer = $('[name="cust_edit"]').val();
    var status = $('[name="jstatus_edit"]').val();
    var primaryskill = $('[name="ps_edit"]').val();
    var secondaryskill = $('[name="ss_edit"]').val();
    var jobdescription = $('[name="jd_edit"]').val();
    var createdby= 'Admin';
    var updateby = 'Admin';
    var updatedate = $('[name="ubydate_edit"]').val();
    var jdcomments = $('[name="jd_comments"]').val();
    var bucomments = $('[name="bu_comments"]').val();
    var isactive='Y'

    var data = {

        "jobdescriptionId": jobdescriptionId,
        "reqid": reqid,
        "jdtitle":jdtitle,
        "joblocationid": joblocationid,
        "joblocation": joblocation,
        "experince": experience,
        "dateofreq": dateofreq,
        "closedate": closedate,
        "locaflex": locaflex,
        "noofpos": noofpos,
        "role": role,
        "rolelevel": rolelevel,
        "duration": duration,
        "customer": customer,
        "bussinessunit": bussinessunit,
        "salesregion": salesregion,
        "salerep": salerep,
        "status": status,
        "primaryskill": primaryskill,
        "secondaryskill": secondaryskill,
        "jobdescription": jobdescription,
        "updateby": updateby,
        "updatedate": updatedate,
        "jdcomments": jdcomments,
        "bucomments": bucomments,
        "createdby":createdby,
        "isactive":isactive
    }

    data = JSON.stringify(data);

    $.ajax({
        url: "http://localhost:2000/updatejoblisting/" + jobdescriptionId,
        type: "post",
        async: false,
        data: data,
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
        },
        error: function () {
        }
    });

    joblistingdetails();

}	

function clearFormJob() {

    $("#bunit").val('');
    $("#salesregion").val('');
    $("#salesrepresent").val('');
    $("#cus").val('');
    $("#comment").val('');
    $("#filename").val('');
    $("#requirement").val('');
    $("#role").val('');
    $("#edate").val('');
    $("#positions").val('');
    $("#experience").val('');
    $("#jobtitle").val('');
    $("#reqdate").val('');
    $("#jduration").val('');
    $("#locflexy").val('');
    $("#locflexn").val('');
    $("#jstatus").val('');
    $("#jobstatus").val('');
    $("#piskills").val('');
    $("#seskills").val('');
    $("#jloc").val('');
    $("#locflex").val('');
    $("#jdesp").val('');
    $("#comm").val('');

}
