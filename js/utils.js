
const f =() =>{
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => json)

};
const Util = () => {
    const result = f();
    return result.then(response => {
            const util = document.createElement('p');
            util.textContent = `userId: ${response.userId}, id: ${response.id}, title: ${response.title}, completed: ${response.completed}`;
            return util;
        })
    
}

window.util = Util;