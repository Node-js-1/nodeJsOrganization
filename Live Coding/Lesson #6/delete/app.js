app.delete('/user/:userId', (req,res) => {
    const userId= req.params.userId; 
    res.send(`User with ID ${userId} has been deleted.`);
}); 

