/*************** Modules Importation ************/
// import express module
const express = require("express");
// import body parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
// import bcrypt module
const bcrypt = require("bcrypt");
// footDB =>DB name
mongoose.connect('mongodb://127.0.0.1:27017/footDB');

/*************** Express Application ************/
// creates express application
const app = express();

/*************** Models Importation ************/
const Match = require("./models/match");
const Team = require("./models/team");
const Player = require("./models/player");
const User = require("./models/user.js");


/*************** App Configuration ************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );

    next();
});

//Fake DataBase

let matchTab=[
  {id:1,scoreOne:3,scoreTwo:1,teamOne:'ca',teamTwo:'est'},
  {id:2,scoreOne:2,scoreTwo:4,teamOne:'fcb',teamTwo:'att'},
  {id:3,scoreOne:0,scoreTwo:5,teamOne:'rmd',teamTwo:'liv'},
  {id:4,scoreOne:5,scoreTwo:0,teamOne:'crb',teamTwo:'MUN'},
];

let  playersTab=[
  {id:1,name:"AZER",age:38,nbr:10,pos:"att"},
  {id:2,name:"cr7",age:40,nbr:7,pos:"ST"},
  {id:3,name:"ney",age:35,nbr:11,pos:"RW"},
  {id:4,name:"liva",age:40,nbr:9,pos:"ST"}
];
let   teamsTab=[
  { id:1,name:"FCB", owner:"laport",foundation:1899 },
  { id:2,name:"RMD", owner:"peres",foundation:1901 },
  { id:7,name:"est", owner:"hamdi",foundation:1919 },



];

function generateId(T)
{
  let max;
  if (T.length==0) {
    max=0;

  }
  else
  {
     max=T[0].id;
  for (let i = 0; i < T.length; i++) {
    if(T[i].id > max)
      {
        max=T[i].id;
      }
  }
}
return max + 1 ;
}



/*************** Business Logics ************/
// Business Logic: Add Match
app.post("/api/matches", (req, res) => {
    // Instructions
    console.log("Here into BL: Add Match",req.body);

    let matchobj= new Match(req.body);
    matchobj.save();
    res.json({isAdded : true});
});

// Business Logic: Edit Match
app.put("/api/matches", (req, res) => {
    // Instructions
    console.log("Here into BL: Edit Match ",req.body);
    Match.updateOne({_id:req.body._id},req.body).then(
      (reponse)=>{console.log(this.reponse);
        if(reponse.nModified == 1)
          {
        res.json({isEdited:"succes"})
          }
          else
          {
            res.json({isEdited:"echec"})
          }
      }

    )


});

// Business Logic: Get All Matches
app.get("/api/matches", (req, res) => {
    // Instructions
    console.log("Here into BL: Get All Matches");
    Match.find().then(
      (docs)=>{
        res.json({matches:docs });

      }
    );

});

// Business Logic: Delete Match By ID
app.delete("/api/matches/:id", (req, res) => {
    // Instructions
    console.log("Here into BL: Delete Match By ID",req.params.id);
    Match.deleteOne({_id : req.params.id}).then(
      (result)=>{console.log(result);
        if(result.deletedCount == 1)
          { res.json({isDeleted:true});}
        else{
          res.json({isDeleted:false});

        }

      }
    );

});

// Business Logic: Get Match By ID
app.get("/api/matches/:id", (req, res) => {
    // Instructions
    console.log("Here into BL: Get Match By ID",req.params.id);
   Match.findById(req.params.id).then(
    (doc)=>{res.json({ match : doc}
   )
           });



});

// Business Logic: search match By score
app.post("/api/matches/search", (req, res) => {
  // Instructions
  console.log("Here into BL: searchmatch",req.body);
  let T=[];
  for (let i = 0; i <matchTab.length; i++)
    {
      if(matchTab[i].scoreOne == req.body.scoreOne || matchTab[i].scoreTwo== req.body.scoreTwo )
        {
          T.push(matchTab[i]);

        }

    }
    res.json({match : T});


});


// Business Logic: Add team
app.post("/api/teams", (req, res) => {
  // Instructions
  console.log("Here into BL: Add team");
  let teamObj= new Team(req.body);
    teamObj.save();
    res.json({isAdded : true});
});

// Business Logic: Edit team
app.put("/api/teams", (req, res) => {
  // Instructions
  console.log("here into edit team from BE",req.body);
  Team.updateOne({_id:req.body._id},req.body).then(
    (reponse)=>{console.log(this.reponse);
      if(reponse.nModified == 1)
        {
      res.json({isEdited:"succes"})
        }
        else
        {
          res.json({isEdited:"echec"})
        }
    }

  )

});

// Business Logic: Get All teams
app.get("/api/teams", (req, res) => {
  // Instructions
  console.log("Here into BL: Get All teams");
  Team.find().then(
    (docs)=>{
      res.json({team:docs });

    }
  );

});

// Business Logic: Delete team By ID
app.delete("/api/teams/:id", (req, res) => {
  // Instructions
  console.log("Here into BL: Delete team By ID",req.params.id);
  Team.deleteOne({_id : req.params.id}).then(
    (result)=>{console.log(result);
      if(result.deletedCount == 1)
        { res.json({isDeleted:true});}
      else{
        res.json({isDeleted:false});

      }

    }
  );

});

// Business Logic: Get team By ID
app.get("/api/teams/:id", (req, res) => {
  // Instructions
  console.log("Here into BL: Get team By ID",req.params.id);
  Team.findById(req.params.id).then(
    (doc)=>{res.json({ team : doc}
   )
           });

});

// Business Logic: Add player
app.post("/api/players", (req, res) => {
  // Instructions
  console.log("Here into BL: Add player");
  let playerObj= new Player(req.body);
    playerObj.save();
    res.json({isAdded : true});
});

// Business Logic: Edit player
app.put("/api/players", (req, res) => {
  // Instructions
  console.log("here into edit player from BE",req.body);
  Player.updateOne({_id:req.body._id},req.body).then(
    (reponse)=>{console.log(this.reponse);
      if(reponse.nModified == 1)
        {
      res.json({isEdited:"succes"})
        }
        else
        {
          res.json({isEdited:"echec"})
        }
    }

  )
});

// Business Logic: Get All players
app.get("/api/players", (req, res) => {
  // Instructions
  console.log("Here into BL: Get All  player");
  Player.find().then(
    (docs)=>{
      res.json({player:docs });

    }
  );
});

// Business Logic: Delete player By ID
app.delete("/api/players/:id", (req, res) => {
  // Instructions
  console.log("Here into BL: Delete player By ID");
  Player.deleteOne({_id : req.params.id}).then(
    (result)=>{console.log(result);
      if(result.deletedCount == 1)
        { res.json({isDeleted:true});}
      else{
        res.json({isDeleted:false});

      }

    }
  );

});

// Business Logic: Get player By ID
app.get("/api/players/:id", (req, res) => {
  // Instructions
  console.log("Here into BL: Get player By ID",req.params.id);
  Player.findById(req.params.id).then(
    (doc)=>{res.json({ player : doc}
   )
           });

});
// Business Logic: Add user
app.post("/api/users",(req,res)=>{
  console.log("here into signup",req.body);
 User.findOne({ email: req.body.email}).then(
  (reponce)=>{console.log(reponce);
    if (!reponce) {
      bcrypt.hash(req.body.pwd,10).then(
        (cryptedpwd)=>{console.log("here crypted pwd",cryptedpwd);
          req.body.pwd=cryptedpwd;
          let user=new User(req.body);
          user.save();
          res.json({isAdded:true});
        }
      );


    } else {
      res.json({isAdded:false});

    }

  }
 );

});


/*************** App Exportation ************/
// make app importable
module.exports = app;
