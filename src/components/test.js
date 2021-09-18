let membersName = ['s', 's', 's', 's']
let membersInstrument = [1, 2, 3, 4]

function handleClickform2() {
    let membersList = [];
    for (let i = 0; i < membersName.length; i++) {
        let obj = {}
        obj['name'] = membersName[i];
        obj['instrument'] = membersInstrument[i];
        membersList.push(obj)
    }
    return membersList;
}
console.log(handleClickform2());