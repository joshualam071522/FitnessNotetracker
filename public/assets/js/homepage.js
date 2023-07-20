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