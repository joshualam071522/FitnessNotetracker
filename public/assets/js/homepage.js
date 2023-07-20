function logout() {
    try{
        fetch("/logout", { 
        method: 'POST',
        credentials: 'same-origin'
        })
        .then(() => {
            location.reload();
        })
    } catch (error) {
      console.error(error);
    }
  }
  function getQuote() {
    fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(data => {
        const quote = data.quote;
        document.getElementById('quote').innerText = `"${quote}" - Kanye West`;
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
      });
  }