/* remarks dropdown */
let remarkobj = {
    converted:"Converted",
    prospective_member:"Prospective Member",
    decide_later: "Decide Later",
    not_interesred: "Not Interested",
    wrong_number:"Wrong Number",
    no_answer:"No Answer"
}
let productobj = {
    member_ship:"Membership",
    math_block:"Math Block",
    academy: "Academy",
    ielts: "IELTS",
    noor_el_bayan: "Noor El Bayan",
    data_science:"Datascience",
    scada:"SCADA",
    cyber_defense:"Cyber Defense",
    cods:"CODS",
    offensive_pentesting:"Offensive Pentesting",
    dfth:"DF/TH"
}
let remarks = document.querySelector(".remarks");
let products = document.querySelector(".products");
console.log(remarks);
count = 0;
for (let key in remarkobj) {
    count +=1;
    remarks.innerHTML += `<option value="${count}">${remarkobj[key]}</option>`
}
for (let key in productobj) {
    count +=1;
    products.innerHTML += `<option value="${count}">${productobj[key]}</option>`
}


// const CONVERTED = "Converted"
// const PROSPECTIVE_MEMBER = "Prospective Member"
// const DECIDE_LATER = "Decide Later"
// const NOT_INTERESTED = "Not Interested"
// const WRONG_NUMBER = "Wrong Number"
// const NO_ANSWER = "No Answer"


/* products */
// const MEMBERSHIP = "Membership"
// const MATHBLOCK = "Math Block"
// const ACADEMY = "Academy"
// const IELTS = "IELTS"
// const NOOR_EL_BAYAN = "Noor El Bayan"
// const DATASCIENE = "Datascience"
// const SCADA = "SCADA"
// const CYBER_DEFENSE = "Cyber Defense"
// const CODS = "CODS"
// const OFFENSIVE_PENTESTING = "Offensive Pentesting"
// const DFTH = "DF/TH"
