```javascript
db.collection('myCollection').updateOne({"_id": 1}, {"$inc": {"myNumber": 1}});
//Convert to string if needed
let result = db.collection('myCollection').findOne({"_id": 1});
result.myString = result.myNumber.toString();
db.collection('myCollection').updateOne({"_id": 1}, {$set: {myString: result.myString}});
```