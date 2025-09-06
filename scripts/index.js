import { getUser } from "./services/user.js"
import { getRepos } from "./services/repositories.js"
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
   const userName = e.target.value
   const key = e.which || e.keyCode
   const isEnterKeyPressed = key === 13

   if(isEnterKeyPressed){
    getUserData(userName)
   }
})


async function getUserData(userName){
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepos(userName)
    
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    screen.renderUser(user)

}
