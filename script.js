document.addEventListener("DOMContentLoaded", () => {
    fetchTeams()
    //  fetchPlayers()
    //  fetchStats()
})



const fetchTeams = () => {
    fetch("http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&season='2020'&all_star_sw='N'")
        .then(res => res.json())
        .then(data => renderTeams2(data.team_all_season.queryResults.row))
        .catch(error => console.log(error))
}
const fetchPlayers = (id) => {
    fetch("http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id=" + id)
        .then(res => res.json())
        .then(data => renderPlayers(data.roster_40.queryResults.row))
        .catch(error => console.log(error))
}

const fetchStats = (id) => {
    fetch("http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id=" + id)
        .then(res => res.json())
        .then(data => renderStats(data))
        .catch(error => console.log(error))
}


const renderTeams2 = (teams) => {
    const container = document.querySelector(".container")
    teams.map(team => {
        const div = document.createElement("div")
        div.innerHTML = `
    <h2>${team.name_display_full}<h2>
    `
        div.addEventListener("click", () => {
            fetchPlayers(team.team_id)
        })
        container.append(div)
    })
}

function renderPlayers(data) {
    console.log(data)
    const container = document.querySelector(".players")
    data.map(player => {
        const div = document.createElement("div")
        div.innerHTML = `
    <h2>${player.name_display_first_last}<h2>
    `
        div.addEventListener("click", () => {
            fetchStats(player.player_id)
        })
        container.append(div)
    })
}

function renderStats(data) {

    const container = document.querySelector(".stats")
    if (!data.sport_career_hitting.queryResults.row) {
        const div = document.createElement("div")
        div.innerHTML = `
    <h2>No Stats<h2>
    `
        return
    }
    
    const {hr} = data.sport_career_hitting.queryResults.row


    const div = document.createElement("div")
        div.innerHTML = `
    <h2>${hr}<h2>
    `
   container.append(div)
  
}

/*const renderTeams = (teams) => {

   const container = document.querySelector(".container")
   teams.map((team) =>{
       const div = document.createElement("div")
       div.innerHTML = `
           <h3>$(team.team_full)</h3>
           <p>Average: $(team.avg)</p>
           <p>Home Runs: $(team.hr)</p>
       `
           container.append(div)
   })
}
*/
