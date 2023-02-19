const repositories = document.querySelector('.my-projects')

function requestApiGihub(){
    fetch('https://api.github.com/users/danielsouzza/repos')
        .then(async answer =>{
            if(!answer.ok){
                throw new Error(answer.status)
            }

            let data = await answer.json()

            data.map(item =>{
                let projects = document.createElement('div')
                projects.setAttribute('class','project-item theme')
                
                if(!(item.language == null && item.description == null)){
                    projects.innerHTML =` 
                    <a href="${item.html_url}">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                        ${item.name}
                    </span>
                    <p>${item.description}</p>
                    <div class="icon-align">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <p>${item.stargazers_count}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>
                            </svg>
                            <p>${item.forks}</p>
                        </div>
                        <span>${item.language}</span>
                    </div>
                </a>
                `
                repositories.appendChild(projects)
                }
            })
        })
}

requestApiGihub()