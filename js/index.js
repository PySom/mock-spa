const InfoMall = window.infomall;
const VideoComponent = window.video;
const Utility = window.util;
const PopulateData = window.Populate;
const PostButton = window.myButton;
const CreatePost = window.create;

const Hello = () => {
    const root = document.createElement('div');
    const result = document.createElement('div');
    result.id = 'results';
    const hello = document.createElement('p');
    const error = document.createElement('p');
    hello.textContent = "Hello World";
    root.appendChild(hello);
    root.appendChild(VideoComponent());
    Utility().then(() => {
        root.appendChild(PopulateData(result))
        const b = PostButton()
        root.appendChild(b);
        b.addEventListener('click', (e) => CreatePost(e));
    });
    
    return root;
}


InfoMall.render(Hello());