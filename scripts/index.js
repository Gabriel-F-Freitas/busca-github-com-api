async function user(){
    const response = await fetch('https://api.github.com/users/Gabriel-F-Freitas')
    return await response.json()
}

function getUserProfile(){
    user().then(userData => {
    let userInfo = `<img src="${userData.avatar_url}" />
    <div class="data>
    <h1>${userData.name ?? 'Não possui nome cadastrado 😢'}</h1>
    <p>${userData.bio ?? 'Não possui bio cadastrada 😢'}</p>
    </div>`
    })

    document.querySelector('.profile-data').innerHTML = userInfo
}

getUserProfile()