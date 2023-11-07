fetch('./usuario.json')
.then((res) => res.json())
.then((json) => console.log(json.idade))