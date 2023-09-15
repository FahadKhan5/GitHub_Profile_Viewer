const APIURL = "https://api.github.com/users/";

const getUser = async(name) => {
	const response = await fetch(APIURL + name);
	const data = await response.json();
	console.log(data);
	const card = `
	<div class="card">
		<div>
			<img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
		</div>	
			<div class="user-info">
			<h2>${data.name}</h2>
			<p>${data.bio}</p>
			
		<ul>	
			<li>${data.followers}<strong>Followers</strong></li>
			<li>${data.following}<strong>Following</strong></li>
			<li>${data.public_repos}<strong>Repos</strong></li>
		</ul>
		<div id="repos">
			
			</div>
		</div>
		</div>
		`
		main.innerHTML = card;
		//console.log(card);
		getRepos(name);
};

const getRepos = async(username) => {
	const repos = document.querySelector("#repos");
	const response = await fetch(APIURL + username + "/repos");
	const data = await response.json();
	data.forEach(
		(item) => {
			//console.log(item);
			const elem = document.createElement("a");
			elem.classList.add("repo");
			elem.href = item.html_url;
			elem.innerText = item.name;
			elem.target = "_blank";
			repos.appendChild(elem);
		});
	//console.log(data);
};
const form = document.getElementById("form");
const searchBox = document.getElementById("searchBox");

form.addEventListener("keyup", function(event){
		if (event.target.value != "") {
			getUser(event.target.value);
		}
		});

			/*if (searchBox.value != "") {
		getUser(searchBox.value);
		searchBox.value = "";
		}
		return false;
});

//getUser(searchBox.value);

<a class="repo" href="#" target="blank">Repo 1</a>
<a class="repo" href="#" target="blank">Repo 2</a>
<a class="repo" href="#" target="blank">Repo 3</a>*/