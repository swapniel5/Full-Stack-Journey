var user= {
    login : "",
    password : "",
    firstName : "",
    lastName : "",
    getFullName: function(){
      return this.firstName+ "  "+ this.lastName;
    } 
  };
  /*
  user
  {login: "", password: "", firstName: "", lastName: "", getFullName: ƒ}
  user.firstName = "Swapnil";
  "Swapnil"
  user.lastName = "jejurkar"
  "jejurkar"
  user.getFullName();
  "Swapnil  jejurkar"*/