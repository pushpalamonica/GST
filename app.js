    // Navbar slide function
    function navslide(){
        let header=document.querySelector(".header");
        let navlinks=document.querySelector(".navlinks");
        let hamburger=document.querySelector(".hamburger");

        hamburger.addEventListener("click", ()=>{
            navlinks.classList.toggle("nav-active");
            hamburger.classList.toggle('toggle');
        } )
    }
    navslide();
    
    
    // GST calculation function
    function calculate(){
    let UserName=document.getElementById("UserName").value;
    let UserAddress=document.getElementById("UserAddress").value;
    let UserMobile=document.getElementById("UserMobile").value;
    let UserEmail=document.getElementById("UserEmail").value;
    let MuttonBiriyani=document.getElementById("MuttonBiriyani").value;
    let ChillyMushroom=document.getElementById("ChillyMushroom").value;
    let GarlicGheeNaan=document.getElementById("GarlicGheeNaan").value;
    let MixedVegCurry=document.getElementById("MixedVegCurry").value;
    
    
    document.getElementById("User").innerHTML = (`User Name : ${UserName}`)
    document.getElementById("Address").innerHTML = (`User Address : ${UserAddress}`)
    document.getElementById("Mobile").innerHTML = (`User Mobile : ${UserMobile}`)
    document.getElementById("Email").innerHTML = (`User Email : ${UserEmail}`)

    document.getElementById("Biriyani").innerHTML = (`Mutton Biriyani : ${MuttonBiriyani}`)
    document.getElementById("Mushroom").innerHTML = (`Chilly Mushroom : ${ChillyMushroom}`)
    document.getElementById("Naan").innerHTML = (`Garlic GheeNaan : ${GarlicGheeNaan}`)
    document.getElementById("Vegcurry").innerHTML = (`Mixed VegCurry : ${MixedVegCurry}`)
   
   
 let items=[parseInt(MuttonBiriyani),parseInt(ChillyMushroom),parseInt(GarlicGheeNaan),parseInt(MixedVegCurry)];
//  let items=parseInt([MuttonBiriyani,ChillyMushroom,GarlicGheeNaan,MixedVegCurry]);
   let sum=0;
    for(let i=0;i<items.length;i++){
        sum+=items[i];
    }
    document.getElementById("total").innerHTML = (`Total without gst : ${sum}`);

    let gst=sum*18/100;
    document.getElementById("gst").innerHTML=(`GST 18% : ${gst}`);

    let tip=gst*3/100;
    document.getElementById("tip").innerHTML=(`Tip : ${tip}`);

    let TotalAmount=sum+gst+tip;
    document.getElementById("totalamount").innerHTML=(`Total With gst : ${TotalAmount}`);

}
// calculate();



   

    // let name=document.createElement('h2');
    // name.innerHTML=UserName;
    // let invoice=document.querySelector('.invoice');
    // invoice.appendChild(UserName);

    // document.getElementById("Address").innerHTML = (`User Address : ${UserAddress}`)
    // invoice.appendChild(UserAddress);

    // let address=document.createElement('h2');
    // address.innerHTML=UserAddress;
    // invoice.appendChild(address);

    // let mobile=document.createElement('h2');
    // mobile.innerHTML=UserMobile;
    // invoice.appendChild(mobile);

    // let email=document.createElement('h2');
    // email.innerHTML=UserEmail;
    // invoice.appendChild(email);

    // let biriyani=document.createElement('h2');
    // biriyani.innerHTML=MuttonBiriyani;
    // invoice.appendChild(biriyani)


    // let chilly=document.createElement('h2');
    // chilly.innerHTML=ChillyMushroom;
    // invoice.appendChild(chilly);

    // let garlic=document.createElement('h2');
    // garlic.innerHTML=GarlicGheeNaan;
    // invoice.appendChild(garlic);

    // let mixed=document.createElement('h2');
    // mixed.innerHTML=MixedVegCurry;
    // invoice.appendChild(mixed);

 