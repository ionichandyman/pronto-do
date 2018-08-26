class CommonFunctions{
        snapShotToArray = function(snapshot){
            let returnArr = [];
            snapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item.key = childSnapshot.key;
                returnArr.push(item);
            })
            return returnArr;
        }
}
export { CommonFunctions };