/** Setting up the comments with some sample comments and usernames
 * Comments will include username and time they were posted
 *Thread 1*/
var threads =[
    {
        id: 1,
        title: "Thread 1",
        author: "Generic",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "gen",
                date: Date.now(),
                content: "hi"
            },
            {           
                author: "gen2",
                date: Date.now(),
                content: "hey"
            }
        ]
    },
    /** Thread 2 */
    {
        id: 2,
        title: "Thread 2",
        author: "Generic",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "gen2",
                date: Date.now(),
                content: "hi"
            },
            {           
                author: "gen3",
                date: Date.now(),
                content: "hey"
            }
        ]
    }
]
var threads;

if(localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThread;
}