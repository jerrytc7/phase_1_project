document.addEventListener("DOMContentLoaded", () => {
    fetchPlayers()
})

const fetchPlayers = () => {
    fetch( "http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&season='2020'&all_star_sw='N'")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}


const renderTeams2 = () =>{
     
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
