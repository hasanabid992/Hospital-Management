//=== Hospital Management System ---/////
//--Arrow Function in EcmaScript --///
Patient_info =() =>{

    /// Variable Initialization Using EcmaScript ---///
    let PatientName = prompt('Enter Patient Name');
    let Father_HusbandName = prompt('Enter Father or Husband Name');
    let d = new Date();
    let NIC_no =+prompt("Enter Your NIC");
    let Patient_Ward = ['ICU','Emergency Ward','Accident Ward']
    let Patient_Diseas =['Fever','Flu','High/low Bp','Headache'] 
    let Doctors_fields=['Ahmed(Heart Specialist)','Salman (General)','Hasan(Surgen)','Huzaifa(skin Specialist)',
    'Ahsan (General)','Haider (General)','Ali (Heart Specialist)','Abbas (Heart Specialist)']
    let x = Math.floor((Math.random() * 10) + 1);
    let payment = ['Cash','Cheque','Card']
    let select_ward=+prompt("Press 1 for ICU | 2 for Emergency Ward | 3 for Accident Ward");
    let select_disease=+prompt('Press 1 for Fever | 2 for (General) | 3 for High/Low Blood Pressure | 4 for headache');
    let select_doc=+prompt('Press 1 for (Heart Specialist Doctor) | 2 for ( 2nd skin Specialist Doctor) | 3 for (skin Specialist Doctor) | 4 for (2nd General Doctor) | 5 for (2nd Heart Specialist Doctor) | 6 for (2nd surgen) | 7 for (3rd General Doctor) ');
    let select_payment_method =+ prompt('Press 1 for Cash | 2 for Cheque | 3 for Cards (Debit,Credit)'); 
     
    ///-- Print The Results of Above Inputs ---//// 
    console.log('Patient Name : '+PatientName);
    console.log('Father OR Husband Name is: ' +Father_HusbandName);
    console.log("Your Appointment Date and time" +d);
    console.log('Your generated Code is '+x);
    console.log('Your NIC is : ' +NIC_no);

    //-- Using If-Else Condition for desire outcome --//
    if(select_disease == 1){
    
       console.log('You choose : '+Patient_Diseas[0]);
    }
    else if (select_disease == 2)
   {
    console.log('You choose : '+Patient_Diseas[1]);
   }
   else if (select_disease == 3)
   {
    console.log('You choose : '+Patient_Diseas[2]);
   }
   else if (select_disease == 4){
    console.log('You choose : '+Patient_Diseas[3]);
   }
else {
    console.log ('Invalid Command Kindly press no between 1 to 4')
}
{
    if (select_ward == 1)
    {
        console.log('Your Ward is :'+Patient_Ward[0]);
    }
    else if (select_ward == 2)
    {
        console.log('Your Ward is :'+Patient_Ward[1]);
    }
    else if(select_ward == 3)
    {
        console.log('Your Ward is :'+Patient_Ward[2]); 
    }
    else{
        console.log('Invalid Command Kindly press no between 1 to 3');
    }
}

{
if (select_doc == 1)
{
    console.log('Your Doctor is : '+ Doctors_fields[0]);
}
else if (select_doc == 2)
{
    console.log('Your Doctor is : '+ Doctors_fields[1]);
}

else if (select_doc == 3)
{
    console.log('Your Doctor is : '+ Doctors_fields[2]);
}

else if (select_doc == 4)
{
    console.log('Your Doctor is : '+ Doctors_fields[3]);
}

else if (select_doc == 5)
{
    console.log('Your Doctor is : '+ Doctors_fields[4]);
}

else if (select_doc == 6)
{
    console.log('Your Doctor is : '+ Doctors_fields[5]);
}

else if (select_doc == 7)
{
    console.log('Your Doctor is : '+ Doctors_fields[6]);
}

else if (select_doc == 8)
{
    console.log('Your Doctor is : '+ Doctors_fields[7]);
}

else{
    console.log('Invalid Command Kindly press no between 1 to 8');
}
}

if (select_payment_method == 1)
{
    console.log("You Select"+payment[0]);
}
else if (select_payment_method == 2)
{
    console.log("You Select"+payment[1]);
}
else if (select_payment_method == 3)
{
    console.log("You Select"+payment[2]);
}
else {
    console.log('Invalid Command Kindly press no between 1 to 3');
}

}
// Calling Function///
Patient_info()