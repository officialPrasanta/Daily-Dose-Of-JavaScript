let taskCompleted = {
    day34: 'Node and Express tutorial-continued',
    day35: 'Node and Express tutorial-completed',
    day36: 'Music Streaming App with React-Day[1]'
}

let days = Object.keys(taskCompleted);
days.map((day) => console.log(`${day} => ${taskCompleted[day]}`));


// Look Around! Javascript is full of possibilities


let taskCompletionArr = Object.entries(taskCompleted);    // to array
const map = new Map(taskCompletionArr);
console.log(map);

/*
Map(3) {
  'day34' => 'Node and Express tutorial-continued',
  'day35' => 'Node and Express tutorial-completed',
  'day36' => 'Music Streaming App with React-Day[1]'
}
*/