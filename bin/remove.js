var myCursor = db.Table1.find();
while(myCursor.hasNext()) {
	var doc = myCursor.next();
	var phoneArr = doc.phone;
	//printjson(phoneArr);

	//print(phoneArr.length);
	
	//printjson(phoneArr);

	for(var i = 0;i < phoneArr.length; i++) {
		printjson(phoneArr[i].code);

		if(phoneArr[i].code == 1)
			print('This is code 1', phoneArr[i].home);
		else if(phoneArr[i].code == 2) {
			print('This is code 2', phoneArr[i].office);

			phoneArr.splice(i);
		}
	}
	//print(phoneArr.length);
	//printjson(phoneArr);
	db.Table1.save(doc);
}

print('Completed...');