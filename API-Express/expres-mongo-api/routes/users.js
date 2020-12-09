const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).json({ message: error.message }); //500 server side error
  }
});
router.get("/:id", getUser, (req, res) => {
      res.send(res.user)
  });
router.post("/", async (req, res) => {
  const user = new User({
    uname: req.body.uname,
    role: req.body.role,
  });
  try {
    const newUsr = await user.save();
    res.status(201).json(user); //201 - successful
  } catch (error) {
    res.status(400).json({ message: error.message }); //400
  }
});


router.delete("/:id", getUser, async(req, res) => {
try {
    await res.user.remove()
    res.json({ message: 'Deleted ' }); //400

} catch (error) {
    res.status(500).json({ message: error.message }); //400
}
});

router.patch('/:id',getUser,async(req,res)=>{
    if(req.body.uname!=null){
res.user.uname=req.body.uname
    }

    if(req.body.role!=null){
        res.user.role=req.body.role
            }
            try {
                const updatedUser=  res.user.save()
                res.send(updatedUser)
            } catch (error) {
                res.status(500).json({ message: error.message }); //400
            }
})


async function getUser(req,res,next){
    let user
    try {
        user=await User.findById(req.params.id)
        if(user==null){
            return res.status(401).json({message:'User does not exist'})
        }
    } catch (error) {
        return res.status(401).json({message:error.message})
    }
    res.user=user
    next()
}
module.exports = router;
