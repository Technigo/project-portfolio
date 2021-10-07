const tecnhnigoProjects = document.getElementById("card_technigo");
const username = "PriscilaAlfaro";

const reposTecnhigoFetch = async () => {
    const url = `https://api.github.com/users/${username}/repos`
    try {
        const response = await fetch(url)
        if (response.ok) {
            const repositories = await response.json();
            const forkedRepositories = repositories.filter(repo => repo.fork && repo.name.includes("project-"));


            forkedRepositories.map(async repo => {
                const allPullRequest = await pullRequestFetch(repo.name);
                repo.allPullRequest = allPullRequest;
                builFeaturedProjects(repo);
            })

        } else {
            throw new Error('Request failed!')
        }
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

const builFeaturedProjects = (repo) => {
    projectsInfo.innerHTML +=
        `<div class="card">
            <div class="general-info project-title">
                <h2 class="project-name"><a href=${repo.html_url} target="_blank"><i class="fas fa-project-diagram"></i>&nbsp;&nbsp;${repo.name.toUpperCase()}<a></h2>
                <h3 id="default-branch"> Default branch: ${repo.default_branch}</h3>
                <h3>Main language: ${repo.language ? repo.language : "No information"}</h3>
                <h3 id="recent-push"> Most recent push: ${new Date(repo.pushed_at).toDateString()}</h3>
            </div>
            <div class="pr-info">
                        <h3>Pull requests</h3>
                        <h4>Total pullrequest: ${repo.allPullRequest.total_count}</h4>
                        ${repo.allPullRequest.total_count === 0 ?
            `<h4>This repository don't any have Pull Request</h4>` :
            repo.allPullRequest.items.map(pullRequest =>
                `<h4>Pull Request #${pullRequest.number}</h4>
                            ${pullRequest.commits.length === 0 ?
                    `<h4>This repository don't have commits for this PR</h4>` :
                    `<h4>Total commits: ${pullRequest.commits.length}</h4>
                        <div class="collapsible" data-collapsible>
                        <div class="collapsible_title">
                        <h3>Click here for commits details</h3>
                        </div>
                        <div class="collapsible_content">
                        <ol>
                        ${pullRequest.commits.map(individualCommit =>
                        `<li>
                            <div>Commit #: ${individualCommit.sha}</div>
                            <div>Message: ${individualCommit.commit.message}</div>
                            <div> Autor: ${individualCommit.commit.author.name}</div>
                        </li>`).join('')
                    }
                        </ol>
                        </div>
                        </div>`}
                
                        ${pullRequest.comments.length === 0 ?
                    `<h4>This repository don't have comments for this PR</h4>` :
                    `<h4>Total comments: ${pullRequest.comments.length}</h4>
                        <div class="collapsible" data-collapsible>
                        <div class="collapsible_title">
                        <h3>Click here for comments details</h3>
                        </div>
                        <div class="collapsible_content">
                        <ol>
                    ${pullRequest.comments.map(individualComment =>
                        `<li>
                        <div>Created at: ${new Date(individualComment.created_at).toDateString()}</div>
                        <div>Message: ${individualComment.body}</div>
                        <div> Autor: ${individualComment.user.login}</div>
                        </li>`).join('')
                    }
                    </ol>
                    </div>
                    </div>`}
                   `)}
             </div>
        </div>`
}


const builOtherProjects = (repo) => {
    projectsInfo.innerHTML +=
        `<div class="card">
            <div class="general-info project-title">
                <h2 class="project-name"><a href=${repo.html_url} target="_blank"><i class="fas fa-project-diagram"></i>&nbsp;&nbsp;${repo.name.toUpperCase()}<a></h2>
                <h3 id="default-branch"> Default branch: ${repo.default_branch}</h3>
                <h3>Main language: ${repo.language ? repo.language : "No information"}</h3>
                <h3 id="recent-push"> Most recent push: ${new Date(repo.pushed_at).toDateString()}</h3>
            </div>
            <div class="pr-info">
                        <h3>Pull requests</h3>
                        <h4>Total pullrequest: ${repo.allPullRequest.total_count}</h4>
                        ${repo.allPullRequest.total_count === 0 ?
            `<h4>This repository don't any have Pull Request</h4>` :
            repo.allPullRequest.items.map(pullRequest =>
                `<h4>Pull Request #${pullRequest.number}</h4>
                            ${pullRequest.commits.length === 0 ?
                    `<h4>This repository don't have commits for this PR</h4>` :
                    `<h4>Total commits: ${pullRequest.commits.length}</h4>
                        <div class="collapsible" data-collapsible>
                        <div class="collapsible_title">
                        <h3>Click here for commits details</h3>
                        </div>
                        <div class="collapsible_content">
                        <ol>
                        ${pullRequest.commits.map(individualCommit =>
                        `<li>
                            <div>Commit #: ${individualCommit.sha}</div>
                            <div>Message: ${individualCommit.commit.message}</div>
                            <div> Autor: ${individualCommit.commit.author.name}</div>
                        </li>`).join('')
                    }
                        </ol>
                        </div>
                        </div>`}
                
                        ${pullRequest.comments.length === 0 ?
                    `<h4>This repository don't have comments for this PR</h4>` :
                    `<h4>Total comments: ${pullRequest.comments.length}</h4>
                        <div class="collapsible" data-collapsible>
                        <div class="collapsible_title">
                        <h3>Click here for comments details</h3>
                        </div>
                        <div class="collapsible_content">
                        <ol>
                    ${pullRequest.comments.map(individualComment =>
                        `<li>
                        <div>Created at: ${new Date(individualComment.created_at).toDateString()}</div>
                        <div>Message: ${individualComment.body}</div>
                        <div> Autor: ${individualComment.user.login}</div>
                        </li>`).join('')
                    }
                    </ol>
                    </div>
                    </div>`}
                   `)}
             </div>
        </div>`
}


reposTecnhigoFetch();