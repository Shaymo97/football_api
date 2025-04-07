const teamData = require('../models/teams')

const index = async (req,res) => {
    try {                         
        const teams = await teamData.showAll() 
        res.status(200).send(teams)
    } catch {
        res.status(500).send({ error: "Server Error" })
    }
}

const show = async (req,res) => {
    const name = req.params.name.toLowerCase()
    try {
        const team = await teamData.show(name)
        res.status(200).send(team)
    } catch (err) {
        res.status(404).send({ error: err})
        
    }
}




module.exports = {
    index,
    show,
}