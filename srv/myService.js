module.exports = srv =>{

    srv.on("getName", (req)=>{
        return 'Hi ' + req.data.name;
    });
}