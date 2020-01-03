module.exports = {
    getHomePage: (req, res) => {
     //   let query = "SELECT * FROM `players` ORDER BY id ASC"; // query database to get all the players

        // execute query
        
            res.render('index.ejs', {
                title: ""
                
            });
        
    },

    
    getJobStatusdrop : (req, res) => {

        let query = "CALL proclookupstatus()"; // query database to get all the status
    
        db.query(query, (err, result) => {
            
            if (err) {
                res.redirect('/');
    
            }
            else {
                res.status(200).json(result);
    
            }
        });

    },


    getbusinessunit: (req, res) => {
        let buquery = "CALL proclookupbu()";
        db.query(buquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
    },
    getsalesregionunit: (req, res) => {
        let salesquery = "CALL proclookupsalesregion()";
        db.query(salesquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
            
        });
    },
    getsalesrepunit: (req, res) => {
        let salesrepquery = "CALL proclookupsalesrep()";
        db.query(salesrepquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
    },
    getcustomers: (req, res) => {
        let customerquery = "CALL proclookupcustomer()";
        db.query(customerquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
    },

// profileTab lookup's
getsalutation: (req, res) => {
    let query = "CALL proclookupsalutation()";
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(result);
        
    });
},
getprofilecountry: (req, res) => {
    let query = "CALL proclookupcountry()";
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(result);
        
    });
},
getprofilestatebycountry: (req, res) => {

    let countryid = req.params.profilecountry; 
   
    let query = "CALL proclookupstatebycountry('"+countryid+"')";
   
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(result);
      
    });
},
gethighestqual: (req, res) => {
    let query = "CALL proclookuphighestqualification()";
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(result);
      
    });
},
getcurrentlocation: (req, res) => {
    let query = "CALL proclookupstate()";
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(result);
        
    });
},
getprofilestatus: (req, res) => {
    let query = "CALL proclookupstatus()";
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(result);
        
    });
},
    joblistingdetails: (req, res) => {
        let customerquery = "CALL proclistjobdescription()";
        db.query(customerquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
            
        });
    },

    joblisting: (req, res) => {
        
        let jdid = req.params.i;
        

        let query = "CALL proclistjobdescriptionbyid('"+jdid+"')";
      
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
            
        });
    },

    updatejoblisting: (req, res) => {
        
        let jobdescriptionid = req.body.jobdescriptionId;  
  
        let reqID = req.body.reqid;
        let joblocation = req.body.joblocation;
        let experience = req.body.experince;
        let expecteddate = req.body.expecteddate;
        let locationfelx = req.body.locaflex;
        let jobdescription = req.body.jobdescription;
        let bussinessunit = req.body.bussinessunit;
        let salesregion = req.body.salesregion; 
        let salesrep = req.body.salerep;
        let status = req.body.status;
        let primaryskill = req.body.primaryskill;
        let secondaryskill = req.body.secondaryskill;
      //  let createdby = req.body.cby_edit;
        let updateby = req.body.updateby;
        let noofpositions = req.body.noofpos;
        let role = req.body.role;
       // let createddate = req.body.cbydate_edit;
        let updatedtime =  req.body.updatedate;
        let dateofreq =   req.body.dateofreq;
        let customers =   req.body.customer;
        let jdcomments =   req.body.jdcomments;
        let bucomments =   req.body.bucomments;
       

        let query = "CALL procUpdatejobdescription('"+jobdescriptionid+"','"+reqID+"','"+role+"','"+noofpositions+"','"+dateofreq+"','"+experience+
        "','"+primaryskill+"','"+secondaryskill+"','"+expecteddate+"','"+locationfelx+"','"+customers+"','"+status+"','"+bussinessunit+"','"+salesregion+
        "','"+salesrep+"','"+joblocation+"','"+jobdescription+"','"+jdcomments+"','"+bucomments+"','"+updateby+"','"+updatedtime+"')";
      
        
        db.query(query, (err, result) => {
            if (err) {
             ;
                return res.status(500).send(err);
                
            }
            res.status(200).json(result);
           
        });
    },

    addjd : (req, res) => {
        let Requirement = req.body.Requirement;
        let Role = req.body.Role;
        let Position = req.body.Position;
        let Expected = req.body.Expected;
        let Exp = req.body.Exp;
        let PSkill = req.body.PSkill;
        let SSkill = req.body.SSkill;
        let locationflex = req.body.locationflex;
        let customerid = req.body.customerid;
        let Status = req.body.Status;
        let buid = req.body.buid;
        let salesregionid = req.body.salesregionid;
        let salesrepid = req.body.salesrepid;
        let joblocation = req.body.joblocation;
        let jDescription = req.body.jDescription;
        let buComments = req.body.buComments;
        let jdComments = req.body.jdComments;
        let createdby =  req.body.createdby;
        let updateby =  req.body.updateby;
        
        
    
        let query = "call procinsertjobdescription('" +
        Requirement + "', '" + Role + "', '" + Position + "', now(),'" + Exp + "','" + PSkill +
            "',  '" + SSkill + "','" + Expected + "', '" + locationflex + "', '" + customerid + "','" +
            Status + "','" + buid + "','" + salesregionid + "','" + salesrepid + "','" + joblocation + 
            "','" + jDescription + "','" + buComments + "','" + jdComments + "','" + createdby + "',now(),'" + updateby + "',now())";
      
  
        db.query(query, (err, result) => {
            if (err) {
            
                return res.status(500).send(err);
            }  
            res.status(200).json(result);
          
        });
    },


    addprofile : (req, res) => {
        
      //  let Profileid = req.body.Profileid;
        let Jobrecid = req.body.Jobrecid;
        let Salutation = req.body.Salutation;
        let Firstname = req.body.Firstname;
        let Lastname = req.body.Lastname;
        let Email = req.body.Email;
        let Mobile = req.body.Mobile;
        let Dob = req.body.Dob;
        let Address1 = req.body.Address1;
        let Address2 = req.body.Address2;
        let City = req.body.City;
        let State = req.body.State;
        let Country = req.body.Country;
        let Postalcode = req.body.Postalcode;
        let Experience = req.body.Experience;
        let Highestquali = req.body.Highestquali;
        let Currentjobtitle = req.body.Currentjobtitle;
        let Currentsalary = req.body.Currentsalary;
        let Expectedsalary = req.body.Expectedsalary;
        let Skillset = req.body.Skillset;
        let Skypeid = req.body.Skypeid;
        let Noticeperiod = req.body.Noticeperiod;
        let Currentlocation =  req.body.Currentlocation;
        let Desiredlocation =  req.body.Desiredlocation;
        let Status =  req.body.Status;
        let Resume =  req.body.Resume;
     
        let Vendorid =  req.body.Vendorid;
        let Createdby =  req.body.Createdby;
        let Updateby =  req.body.Updateby;



        let query = "call procinsertprofile('" + Jobrecid + "', '" + Salutation + "', '" + Firstname + "','" + Lastname + "','" + 
        Email + "',  '" + Mobile + "','" + Dob + "', '" + Address1 + "', '" + Address2 + "','" +
            City + "','" + State + "','" + Country + "','" + Postalcode + "','" + Experience + 
            "','" + Highestquali + "','" + Currentjobtitle + "','" + Currentsalary + "','" + Expectedsalary + "','" + 
            Skillset + "','" + Skypeid + "','" + Noticeperiod + "','" + Currentlocation + "','" + Desiredlocation + "','" + 
            Status + "','" + Resume + "','" + Vendorid + "','" + Createdby + "',now(),'" + Updateby + "',now())";
     
         
    
        db.query(query, (err, result) => {
            if (err) {
              
                return res.status(500).send(err);
            }  
            res.status(200).json(result);
          
        });
    },

    profilelistingdetails: (req, res) => {
        
        let query = "CALL proclistprofiles()";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
            
        });
    },

    profilelisting:(req, res) => {
        
        let prid = req.params.i;
        
        let query = "CALL proclistprofilesbyid('"+prid+"')";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
            
        });
    },

    addvendor : (req, res) => {
        
        
        let Vendorcode = req.body.Vendorid;
        let Vendorname = req.body.Vendorname;
        let Vendorpriloc = req.body.Vendorpriloc;
        let Vendorspec = req.body.Vendorspec;
        let Vendoremail = req.body.Vendoremail;
        let Recruiterid = req.body.Recruiterid;
        let Recruitername = req.body.Recruitername;
        let Recruitercontno = req.body.Recruitercontno;
        let Vendorcomments = req.body.Vendorcomments;
        let Vendorrating = req.body.Vendorrating;
        let Createdby =  req.body.Createdby;
        let Updateby =  req.body.Updateby;
  
        
  
        let query = "call procinsertvendor('" + Vendorcode + "', '" + Vendorname + "', '" + Vendorpriloc + "','" + Vendorspec + "','" + 
        Vendoremail + "',  '" + Recruiterid + "','" + Recruitername + "', '" + Recruitercontno + "','" + Vendorcomments + "', '" + Vendorrating + "','" 
        + Createdby + "',now(),'" + Updateby + "',now())";
       
     
      
          db.query(query, (err, result) => {
              if (err) {
                 
                  return res.status(500).send(err);
              }  
              res.status(200).json(result);
            
          });
      },

      vendorlistingdetails: (req, res) => {
        
        let query = "CALL proclistvendors()";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
            
        });
    },

    vendorlisting:(req, res) => {
        
        let ivid = req.params.i;
        
        let query = "CALL proclistvendorsbyid('"+ ivid +"')";
        
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
            
        });
    },

    updatevendor: (req, res) => {
       
       
        
        let vendorid = req.body.vendorid; 
     
        let Vendorcode = req.body.Vendorcode;   
        let Vendorname = req.body.Vendorname;
        let Vendorpriloc = req.body.Vendorpriloc;
        let Vendorspec = req.body.Vendorspec;
        let Vendoremail = req.body.Vendoremail;
        let Recruiterid = req.body.Recruiterid;
        let Recruitername = req.body.Recruitername;
        let Recruitercontno = req.body.Recruitercontno;
        let Vendorrating = req.body.Vendorrating; 
        let Vendorcomments = req.body.Vendorcomments;
        let Updateby =  req.body.Updateby;
               
    
        
        let query = "CALL procUpdatevendor('"+ vendorid +"','"+ Vendorcode +"','"+ Vendorname +"','"+ Vendorpriloc +
        "','"+ Vendorspec +"','"+ Vendoremail +"','"+ Recruiterid +"','"+ Recruitername +"','"+ Recruitercontno +
        "','"+ Vendorcomments +"','"+ Vendorrating +"','"+ Updateby +"', now() )";
        db.query(query, (err, result) => {
            if (err) {
               
                return res.status(500).send(err);
                
            }
            res.status(200).json(result);
           
        });
    },

    updateprofile: (req, res) => {
        
        let peditprofileId = req.body.peditprofileId;  
  
        let peditjobdescriptionId = req.body.peditjobdescriptionId;
        let peditsalutationId = req.body.peditsalutationId;
        let peditfirstname = req.body.peditfirstname;
        let peditlastname = req.body.peditlastname;
        let peditemail = req.body.peditemail;
        let peditmobile = req.body.peditmobile;
        let peditdob = req.body.peditdob;
        let peditaddress1 = req.body.peditaddress1; 
        let peditaddress2 = req.body.peditaddress2;
        let peditcity = req.body.peditcity;
        let peditstate = req.body.peditstate;
        let peditcountry = req.body.peditcountry;
       let peditpostalcode = req.body.peditpostalcode;
        let peditexperience = req.body.peditexperience;
        let pedithighestquali = req.body.pedithighestquali;  
        let peditcurrentjobtitle = req.body.peditcurrentjobtitle;
        let peditcurrentsalary = req.body.peditcurrentsalary;
        let peditexpectedsalary = req.body.peditexpectedsalary;
        let peditskillset =  req.body.peditskillset;
        let peditskypeid =   req.body.peditskypeid;
        let peditnoticeperiod =   req.body.peditnoticeperiod;
        let peditcurrentlocation =   req.body.peditcurrentlocation;
        let peditdesiredlocation =   req.body.peditdesiredlocation;
        let peditstatus =   req.body.peditstatus;
        let peditresumename =   req.body.peditresumename;
        let peditvendorid =   req.body.peditvendorid;
        let peditupdatedby =   req.body.peditupdatedby;
    
        

        let query = "CALL procUpdateprofile('"+peditprofileId+"','"+peditjobdescriptionId+"','"+peditsalutationId+"','"+peditfirstname+"','"+peditlastname+"','"+peditemail+
        "','"+peditmobile+"','"+peditdob+"','"+peditaddress1+"','"+peditaddress2+"','"+peditcity+"','"+peditstate+"','"+peditcountry+"','"+peditpostalcode+
        "','"+peditexperience+"','"+pedithighestquali+"','"+peditcurrentjobtitle+"','"+peditcurrentsalary+"','"+peditexpectedsalary+"','"+peditskillset+"','"+peditskypeid+"','"+peditnoticeperiod+
        "','"+peditcurrentlocation+"','"+peditdesiredlocation+"','"+peditstatus+"','"+peditresumename+"','"+peditvendorid+"','"+peditupdatedby+"',now())";
       
        db.query(query, (err, result) => {
            if (err) {
               
                return res.status(500).send(err);
                
            }
            res.status(200).json(result);
           
        });
    },


    
    }