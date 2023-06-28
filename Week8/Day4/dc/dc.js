// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;

    }

    watch(){
        console.log(`${this.uploader} watched all ${this.time}sec of ${this.title}!`)

    }
}
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

// Instantiate a new Video instance and call the watch() method.

const video1 = new Video('football', 'John', 1800);
video1.watch();

// Instantiate a second Video instance with different values.

const video2 = new Video('walk in a zoo', 'Kate', 349)
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.

videosArray = [
    {
        'title':'basketball',
        'uploader': 'Ivan',
        'time': 1200
    },
    {
        'title':'Harry Potter',
        'uploader': 'Harry',
        'time': 7200
    },
    {
        'title':'My children',
        'uploader': 'Rose',
        'time': 1587
    },
    {
        'title':"Johan's birthday",
        'uploader': 'Johan',
        'time': 298
    },
    {
        'title':'blabla tape',
        'uploader': 'Daniel',
        'time': 28
    },
]
// Bonus: Loop through the array to instantiate those instances.
tapesObjects = []
for (let tape of videosArray){
    ({title, uploader, time} = tape)
    tapesObjects.push(new Video(title, uploader, time));
}

console.log(tapesObjects)
