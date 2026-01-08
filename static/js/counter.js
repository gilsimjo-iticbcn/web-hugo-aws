document.addEventListener('DOMContentLoaded', function() {
	    const apiUrl = "https://v3lgb856wj.execute-api.us-east-1.amazonaws.com/default/ActualitzarComptador"; // URL de la Lambda del comptador
	    const counterElement = document.getElementById('counter');
	    fetch(apiUrl, { method: 'POST' }) 
	        .then(response => response.json())
	        .then(data => {
			            counterElement.innerText = `Visites: ${data.visites}`;
			        })
	        .catch(error => console.error('Error:', error));
});
