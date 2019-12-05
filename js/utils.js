window.state = [];

const f =() =>{
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => json)

};
const Util = () => {
    const result = f();
    return result.then(res => {
            window.state.push(res);
        })
}



window.util = Util;