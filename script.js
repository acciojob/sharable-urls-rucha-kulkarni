document.getElementById('button')
		 .addEventListener('click', function(){
let name = document.getElementById('name').value;
let year = document.getElementById('year').value;
const queryString = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${year}`;
});
document.getElementById('url').textContent = queryString;
