let taskCompleted = {
    day34: 'Node and Express tutorial-continued',
    day35: 'Node and Express tutorial-completed',
    day36: 'Music Streaming App with React-Day[1]'
}

let days = Object.keys(taskCompleted);
days.map((day) => console.log(`${day} => ${taskCompleted[day]}`));