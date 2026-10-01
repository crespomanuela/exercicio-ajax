document.addEventListener('DOMContentLoaded', async function () {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    const usuario = 'crespomanuela';

    try {
        const resposta = await fetch(`https://api.github.com/users/${usuario}`);

        if (!resposta.ok) {
            throw new Error(`Erro ${resposta.status}: não foi possível buscar o usuário "${usuario}"`);
        }

        const json = await resposta.json();

        nameElement.innerText = json.name || json.login;
        usernameElement.innerText = `@${json.login}`;
        avatarElement.src = json.avatar_url;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    } catch (erro) {
        nameElement.innerText = 'Ops! Algo deu errado';
        usernameElement.innerText = erro.message;
        console.error(erro);
    }
});