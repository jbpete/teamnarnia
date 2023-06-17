const autoFeed = async () => {
    const response = await fetch('/recipe/random', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
}



document.querySelector('#auto-feed').addEventListener('click', autoFeed);