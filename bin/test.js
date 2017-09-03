var myCursor = db.patientdetails.find();
while(myCursor.hasNext()) {
	var obj = myCursor.next();	
	if(obj.DoctorFirstName == 'Lee' && obj.DoctorLastName == 'Cowan') {
		print('First Name Last Name', obj.DoctorFirstName + "-" + obj.DoctorLastName);
		print('Doctor code', obj.DoctorCode1);

		obj.Email = 'arigelavijay@ymail.com'
		db.patientdetails.save(obj);
	}
}

print('completed...');