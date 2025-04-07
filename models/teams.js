const teams = require('../teams.json')

class teamData {
    constructor(team) {
        this.team_id = team.team_id
        this.team_name = team.team_name
        this.team_abbreviation = team.team_abbreviation
        this.team_stadium = team.team_stadium
    }

    static showAll() {
        return teams.map(f => new teamData(f))
    }

    static show(teamName) {
        const team = teams.find((team) => team.team_name.toLowerCase() == teamName)

        if (team) {
            return new teamData(team)
        } else {
            throw 'The team does not exist'
        }
    }

}   

module.exports = teamData