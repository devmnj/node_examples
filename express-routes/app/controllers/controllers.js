module.exports = {
  home:(req,res)=>{
    try {
      res.status(200).send('This is a Home Page')
    } catch (e) {
      console.log(e);
    }
  },
  about:(req,res)=>{
    try {
      res.status(200).send('This is a About Page')
    } catch (e) {
      console.log(e);
    }
  },
  contact:(req,res)=>{
    try {
      res.status(200).send('This is a Contact Page')
    } catch (e) {
      console.log(e);
    }
  },
}
