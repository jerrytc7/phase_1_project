document.addEventListener("DOMContentLoaded", () => {
    fetchTeams()
    fetchPlayers()
    fetchStats()
})

const fetchTeams = () => {
    fetch( "http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&season='2020'&all_star_sw='N'")
        .then(res => res.json())
        .then(data => renderTeams2(data.team_all_season.queryResults.row))
        .catch(error => console.log(error))
}

const fetchPlayers = () => {
    fetch( "http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='121'")
        .then(res => res.json())
        .then(data => console.log(data.roster_40.queryResults.row))
        .catch(error => console.log(error))
}

const fetchStats = () => {
    fetch( "http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='493316'")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}


const renderTeams2 = (teams) =>{    
 const container =document.querySelector(".container")
teams.map(team =>{
    const div = document.createElement("div")
    div.innerText = `${team.team_id}`
    div.innerHTML = `
    <h2>${team.name_display_full}<h2>
    `
    div.addEventListener("click",e => {
        console.log(e)
    })
    container.append(div)
})
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
