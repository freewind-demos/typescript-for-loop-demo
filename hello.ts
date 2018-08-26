const names = ['typescript', 'javascript', 'json']

console.log('--- for in ---')
for (const index in names) {
    console.log(index)
}

console.log('--- for of ---')
for (const name of names) {
    console.log(name)
}
