/** Setting up an introductory post
 * Posts will include username and time they were posted
 *Post 1*/
var posts =[
    {
        id: 1,
        title: "Post 1",
        author: "Generic",
        date: Date.now(),
        content: "Post content",
        textarea: ' ',
    },
]
var posts;
let defaultPosts;
if(localStorage && localStorage.getItem('posts')) {
    posts = JSON.parse(localStorage.getItem('posts'));
} else {
    posts = defaultPosts;
    localStorage.setItem('posts',JSON.stringify(defaultPosts));
}