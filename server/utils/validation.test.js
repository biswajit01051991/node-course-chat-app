var expect=require('expect');

//import isRealString
var {isRealString}=require('./validation');
 describe('isRealString',()=>{
	 it('should reject non-string values',()=>{
		 //should reject non-string values
		 var res=isRealString();
		 expect(res).toBe(false);
		 	    
				 });
   
   it('should reject string with only spaces.',()=>{
	   //should reject string with only spaces
	      var res = isRealString(' ');
          expect(res).toBe(false);
   });

   it('should allow string with non-space characters',()=>{
	   //should allow string with non-space characters
	   var res=isRealString('Biswajit Singha');
	   expect(res).toBe(true);
   });
   

	 });


   
   