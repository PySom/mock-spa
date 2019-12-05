const Populate = (root = null) => {
    const resultId = root ? root : document.getElementById('results');

    let util = document.createElement('p');
    window.state.forEach(response => {
        util.textContent = `userId: ${response.userId}, id: ${response.id}, title: ${response.title}, completed: ${response.completed}`;
        resultId.appendChild(util);
    })
    if (root) return resultId;
}

window.Populate = Populate;