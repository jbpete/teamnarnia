const autoFeed = async () => {
    const response = await fetch('/random', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    if (response.ok) {
        document.location.replace('/random');
      } else {
        alert(response.statusText);
      }
}



document.querySelector('#auto-feed').addEventListener('click', autoFeed);