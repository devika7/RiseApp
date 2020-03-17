const goals = [
    {
      id: "travel",
      name: "Travel",
      tags: ["vacation", "inspirations", "bucketlist"],
      image: require("../assets/images/beach.png"),
      bigimage: require("../assets/images/beach1.png"),
      caption: "Plan your travel",
      description:
        "Set the amount you want to set aside for your travel. Choose your frequency",
    },
    {
      id: "wedding",
      name: "Wedding",
      tags: ["lifegoals", "milestones", "dreamwedding"],
        image: require("../assets/images/couple.png"),
        bigimage: require("../assets/images/couple1.png"),
        caption: "Save for your big day",
    description:"Set the amount you want to set aside for your wedding. Choose your frequency",

    },
    {
      id: "home",
      name: "Home",
      tags: ["lifegoals", "place"],
      image: require("../assets/images/loan.png"),
      bigimage: require("../assets/images/loan1.png"),
      caption: "Make your home dream come true",
    description: "Set the amount you want to set aside for your wedding",
    },
    {
      id: "gifts",
      name: "Gifting",
      tags: ["inspirations", "bucketlist"],
        image: require("../assets/images/gift-box.png"),
        bigimage: require("../assets/images/gift1.png"),
        caption: "Save up for the expensive gifts",
    description: "Set the amount you want to set aside for gifting",
    },
    {
      id: "fund",
      name: "Emergency",
      tags: ["emergency", "medical", "expenses"],
    image: require("../assets/images/alert.png"),
    bigimage: require("../assets/images/alert1.png"),
    caption: "We all have emergencies!",
    description:"Set the amount you want to set aside for your emergency fund",
    
    },
    {
      id: "car",
      name: "Car",
      tags: ["inspiration", "needs"],
    image: require("../assets/images/car.png"),
    bigimage: require("../assets/images/car1.png"),
    caption: "Get your wheels",
    description:
      "Set the amount you want to set aside for your car purchase",
    },

    {
        id: "create",
        name: "Create one",
        tags: ["bucketlist"],
        image: require("../assets/images/goal.png"),
        bigimage: require("../assets/images/goal1.png"),
        caption: "Tailored for you!",
        description:
          "Set the amount you want to set aside for your goal",
    }
  ];


const remits = [
  {
    
    country: "USA",
    currency: "USD",
    image: require("../assets/images/Usa.png"),
    rate: "72.33"
},
{
    
  country: "India",
  currency: "INR",
  image: require("../assets/images/india.png"),
  rate: "1",
}
];

const Recipients = [{
  Rfname: "Ram",
  Rlname: "Gupta",
  Rphone: "8622981242",
  Remail: "ram.gupta@gmail.com",
  Rstreet: "509 E 5th",
  RCity: "Panaji",
  RState:"Goa",
 Rbankacc:"1234567890",
 Rswiftcode: "HDFC12345",
},
{
Rfname: "Sham",
  Rlname: "Mehta",
  Rphone: "8622981242",
  Remail: "sham.mehta@gmail.com",
  Rstreet: "509 E 5th",
  RCity: "Panaji",
  RState:"Goa",
 Rbankacc:"111122223333",
 Rswiftcode: "SBI12345",
}

];

    const Icons = {
      cvc: require("../assets/images/stp_card_cvc.png"),
      //cvc_amex: require("../assets/images/stp_card_cvc_amex.png"),
      "american-express": require("../assets/images/stp_card_amex.png"),
      "diners-club": require("../assets/images/stp_card_diners.png"),
      "master-card": require("../assets/images/stp_card_mastercard.png"),
      discover: require("../assets/images/stp_card_discover.png"),
      //jcb: require("../assets/images/stp_card_jcb.png"),
      //placeholder: require("../assets/images/stp_card_unknown.png"),
      visa: require("../assets/images/stp_card_visa.png"),
    };


const transferlogo = {
  fundcc: require("../assets/images/Fundcard128.png"),
  transferback: require("../assets/images/transbalance.png")
};
  
  export { goals, remits, Icons, transferlogo, Recipients};
