window.onload = function(){
	
//	var exampleData = {
//		classValue:"app",
//		exampleText:"刮青",
//	};
//	new Vue({
//		el:'div',//'div'表示该Vue实例将挂载到<div id="">...</div>这个元素；
//		data:exampleData,//data属性指向Model，data: exampleData表示我们的Model是exampleData对象。
//	});
    var bool; 
    var bool2;
	var vm = new Vue({
			el: '#app',
			data: {
				newPerson: {
					name: '请输入用户名',
					age: 0,
					sex: 'Male'
				},
				people: [{
					name: 'Jack',
					age: 30,
					sex: 'Male'
				}, {
					name: 'Bill',
					age: 26,
					sex: 'Male'
				}, {
					name: 'Tracy',
					age: 22,
					sex: 'Female'
				}, {
					name: 'Chris',
					age: 36,
					sex: 'Male'
				}],
				popText:'',
				popText2:'',
				
			},
			methods:{
				createPerson: function(){
					if ( bool && bool2) {
							this.people.push(this.newPerson);
							// 添加完newPerson对象后，重置newPerson对象
							this.newPerson = {name: '请输入用户名', age: 0, sex: 'Male'};
							bool = '';
							bool2 = '';
							this.popText = '';
							this.popText2 = '';
					} 
					
				},
				
				deletePerson: function(index){
					// 删一个数组元素
					this.people.splice(index,1);
				},
				
				userNameReg: function(){
					var username = document.getElementById("userName");
					var  prompt_1 = document.getElementById("prompt_1");
					var  textT = "输入正确";
					var  textF = "输入错误,字母开头,允许5-16字,字母数字下划线";
					
					//匹配帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：
					var reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
					
					username.onchange = function(){
						var userVal = username.value;
						
						if (reg.test(userVal)) {
							vm.popText = textT;
							return bool = true;
						} else{
							vm.popText = textF;
							return bool = false;
						}
						
					}
					
					
				},
				
				AgeReg:function(){
					var Age = document.getElementById("Age");
					var prompt_2 = document.getElementById("prompt_2");
					//验证数字1-120
					var  textT = "输入正确";
					var  textF = "输入错误,请输入正确年龄";
					var reg = /^[1-9]\d?$|^1[01]\d$|^120$/;
						Age.onchange = function(){
						var AgeVal = Age.value;
						
						if (reg.test(AgeVal)) {
							vm.popText2 = textT;
							return bool2 = true;				
						} else{
							vm.popText2 = textF;
							return bool2 = false;							
						}
						
					}
				},
				
				
			}
		})
	vm.userNameReg();
	vm.AgeReg();
	
	
};
