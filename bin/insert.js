for(var i = 100; i < 200; i++) {
	var j = 0;
	db.Table1.insert({
		code: i,
		name: 'some name' + i,
		phone: [
			{
			code: j + 1,
			home: 9966586830
		},
			{
				code: j + 2,
				office: 8019230706
		}
			]
	});

	print('completed :', i);
}