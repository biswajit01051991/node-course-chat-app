const expect=require('expect');

const {Users}=require('./users');

describe('Users',()=>{
	
	var users;
	
	beforeEach(()=>{
	users=new Users();
    users.users=[{
		id:'1',
		name:'Bisu',
		room:'Node course'
	},{
		id:'2',
		name:'Pramita',
		room:'React course'
	},{
		id:'3',
		name:'Hari',
		room:'Node course'
	}];	
	});
	it('should create a new user',()=>{
		var users=new Users();
		var user ={
			id:'123',
			name:'Biswajit',
			room:'Chat'
		};
		var resUser=users.addUser(user.id,user.name,user.room);
		expect(users.users).toEqual([user]);
		
	});
	
	it('shold remove a user',()=>{
		var userId='1';
		var user=users.removeUser(userId);
		
		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
		
	});
	
	it('should not remove user',()=>{
		
		var userId='99';
		var user=users.removeUser(userId);
		
		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
		
	});
	
	it('should find user', ()=>{
		var userId='2'
		var user=users.getUser(userId);
		expect(user.id).toBe(userId);
	});
	
	it('should not find user',()=>{
		var userId='99';
		var user=users.getUser(userId);
		expect(user).toNotExist();
	});
	
	it('should returns name of node course',()=>{
		var userList= users.getUserList('Node course');
		expect(userList).toEqual(['Bisu','Hari']);
	});
	
		it('should returns name of react course',()=>{
		var userList= users.getUserList('React course');
		expect(userList).toEqual(['Pramita']);
	});
});