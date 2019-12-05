const PopulateAfter = window.Populate;;
const c =() =>{
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'This is the ' +window.state.length+ ' click' ,
          body: 'Chisom Nwisu wrote something here after '+window.state.length+ ' click' ,
          userId: window.state.length + 1,
          completed: Math.random() > 0.5
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => json)

};
const Create = (e) => {
    e.preventDefault();
    console.log(e)
    const result = c();
    return result.then(res => {
            window.state.push(res);
            PopulateAfter();
    })
}


window.create = Create;