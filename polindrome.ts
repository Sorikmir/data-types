const strg1 = "repaper";

function checkPolindrome(world) {
    const innitialWorld = world;
    console.log('input', world, world.split('').reverse().join(''))

    return innitialWorld === world.split('').reverse().join('');
}

const result = checkPolindrome(strg1);
console.log('Result:', result)

let styles = ["blues", "Jazz",];
styles.push("rock-n-roll")
