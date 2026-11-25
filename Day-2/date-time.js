let d=new Date("2026-11-25");


console.log(d.toString())
console.log(d.getDate())
console.log(d.getMonth())
console.log(d.getFullYear())
console.log(d.toISOString())
console.log(d.toJSON())
console.log(d.toLocaleDateString())
console.log(d.toLocaleTimeString())


let dfd = new Date('2026-03-23');

console.log(dfd.toLocaleString());         // Uses your system's default locale
console.log(dfd.toLocaleString('en-IN'));  // "23/3/2026, 5:30:00 am" (DD/MM/YYYY)
console.log(dfd.toLocaleString('en-US'));  // "3/23/2026, 5:30:00 AM" (MM/DD/YYYY)


let dfd2 = new Date('2026-03-23');

let formatted = dfd2.toLocaleString('en-IN', {
    weekday: 'long',   // "Monday" (or 'short' -> "Mon")
    day: 'numeric',    // "23" (or '2-digit' -> "23")
    month: 'long',     // "March" (or 'short' -> "Mar")
    year: 'numeric'    // "2026"
});

console.log(formatted); // "Monday, 23 March 2026"