const InfoMall = window.infomall;
const VideoComponent = window.video;
const Utility = window.util;

const Hello = () => {
    const root = document.createElement('div');
    const hello = document.createElement('p');
    const error = document.createElement('p');
    hello.textContent = "Hello World";
    root.appendChild(hello);
    root.appendChild(VideoComponent());
    const utility = Utility();
    utility.then(doc => root.appendChild(doc))
            .catch(err => {
                error.textContent = "No user found";
                root.appendChild(error)
            })
    return root;
}

InfoMall.render(Hello());