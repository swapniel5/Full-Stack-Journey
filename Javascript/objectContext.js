// var user= {
//     login : "",
//     password : "",
//     firstName : "",
//     lastName : "",
//     getFullName: function(){
//       return this.firstName+ "  "+ this.lastName;
//     }
//   };
/*
  user
  {login: "", password: "", firstName: "", lastName: "", getFullName: ƒ}
  user.firstName = "Swapnil";
  "Swapnil"
  user.lastName = "jejurkar"
  "jejurkar"
  user.getFullName();
  "Swapnil  jejurkar"*/

let user = {
  name: "Swapnil",
  age: 26,
  email: "Swpnil@gmail.com",
  location: "Pune",
  blogs: ["This is bllog one", "This is blog two"],
  login: function () {
    console.log("The user logged in");
  },
  logout: function () {
    console.log("User logged out");
  },
  logBlogs() {
    console.log('This is blogs we have ->');
    this.blogs.array.forEach(blog => {
      console.log(blog);
    });
    console.log(this.blogs);
  },
};

user.logBlogs();
//console.log(this);
