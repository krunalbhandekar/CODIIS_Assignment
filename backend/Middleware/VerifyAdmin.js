const verifyAdmin = (req, res, next) => {
    if (req.user.isAdmin) {
      next();
    } 
    else {
      return res.send({message:"You are not allowed to do that..."});
    }
};

module.exports =  verifyAdmin