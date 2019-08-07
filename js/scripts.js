function doRegisterPWAApp(){
	/*if ('serviceWorker' in navigator) {
	  window.addEventListener('load', function() {
	    navigator.serviceWorker.register('/sw.js').then(
	    	function(registration) {
		      // Registration was successful
		      console.log('ServiceWorker registration successful with scope: ', registration.scope);
		    }, function(err) {
		      // registration failed :(
		      console.log('ServiceWorker registration failed: ', err);
		    });
	  });
	}*/

	if ('serviceWorker' in navigator) {
	  navigator.serviceWorker.register('service-worker.js');
	}

	document.querySelector('#show').addEventListener('click', () => {
	  const iconUrl = document.querySelector('select').selectedOptions[0].value;
	  let imgElement = document.createElement('img');
	  imgElement.src = iconUrl;
	  document.querySelector('#container').appendChild(imgElement);
	});

}