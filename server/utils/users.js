class Users{
	constructor(){
		this.users=[];
	}
	
	addUser(id,name,room){
		var user={id,name,room};
		this.users.push(user);
		return user;
	}
	
	removeUser(id){
		//console.log('test');
		var user=this.getUser(id);
		
		if(user){
			this.users=this.users.filter((user)=> user.id !== id );
		}
		return user;
		
	}
	getUser(id){
		
		return this.users.filter((user)=> user.id ===id)[0];
		
	}
	
	getUserList(room){
		var users=this.users.filter((user)=> user.room === room);
		var nameArray=users.map((user) => user.name);
		return nameArray;
	}
}

module.exports={Users};




/*
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	
	getDescription(){
		return `${this.name} is ${this.age} year(s) old`;
	}
}

var me =new Person('Biswajit',27);
console.log('this.name ',me.name);
console.log('this.age ',me.age);

var description=me.getDescription();
console.log(description);
*/