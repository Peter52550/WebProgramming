const who = "Ric"
const columnIndex = ["Subject", "Score"]
const scoreCard = {
    name: `${who}`,
    records: [
        ["Math", 100],
        ["Chinese", 87],
    ],
};

class Row {
    constructor(tagName, content) {
        this.tr = document.createElement('tr')
        for(let i=0; i<content.length; i++){
            let thisNode = document.createElement(tagName)
            thisNode.textContent = content[i]
            this.tr.appendChild(thisNode)
        }
    }
    //get node() {return this.tr}
}

let tbNode = document.getElementById('table')
let capNode = document.createElement('caption')
capNode.textContent = `${scoreCard.name} 's Score`
tbNode.appendChild(capNode)

let thead = document.createElement('thead')
thead.appendChild(new Row("th", columnIndex).tr)
tbNode.appendChild(thead)


let tbody = document.createElement('tbody')
tbNode.appendChild(tbody)
for(let i=0; i<scoreCard.records.length; i++){
    tbody.appendChild(new Row("td", scoreCard.records[i]).tr)
}
