const titulo = document.querySelector("#titulo");
const mensagem = document.querySelector("#mensagem");
const formulario = document.querySelector("#formulario");
const saidaTitulo = document.querySelector("#renderizador-titulo");
const saidaMensagem = document.querySelector("#renderizador-conteudo");
const avisoTitulo = document.querySelector("#aviso-titulo");
const avisoMensagem = document.querySelector("#aviso-mensagem");


formulario.addEventListener("submit", event => {
	event.preventDefault();
	
	    avisoTitulo.textContent = "Máximo 80 caracteres.";
	    avisoMensagem.textContent = "Máximo 500 caracteres.";
	    avisoTitulo.style.color = "#292f43";
	    avisoMensagem.style.color = "#292f43";
	
	const data = {
		title: titulo.value,
		body: mensagem.value,
		userId:1
	};
	
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		headers: {"Content-type": "application/json; charset=UTF-8"},
		body: JSON.stringify(data)
	}).then(resposta => resposta.json())
	.then(dados => {
		if(dados.title.length <= 80 && dados.body.length <= 500){
			saidaTitulo.textContent = dados.title;
			saidaMensagem.textContent = dados.body;
			
			titulo.value = "";
			mensagem.value = "";
		}
		else {
			
		    avisoTitulo.textContent = "Titulo ou mensagem muito grande! Máximo 80 caracteres. "
			avisoMensagem.textContent = "Titulo ou mensagem muito grande! Máximo 500 caracteres";
			avisoMensagem.style.color = "red";
			avisoTitulo.style.color = "red";
		}
		
		
		
	});
});

