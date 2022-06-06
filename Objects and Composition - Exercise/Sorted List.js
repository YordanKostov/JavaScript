function createSortedList(){
    let list = {
        lister: [].sort(),
        add: function (el){
            this.lister.push(el)
        },
        remove: function (index){
            this.lister.splice(index, 1)
        },
        get: function (index){
            return this.lister[index]
        },
    }
    return list
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));