//your JS code here. If required.
  let age = document.getElementById("age");
  let name = document.getElementById("name");
      function handleSubmit(event) {
        event.preventDefault();
        // console.log(name.value.trim());
        name=name.value.trim();
        if (age.value == "" || name == "") {
    
            alert("Please enter valid details");
          return;
        }
        let promise = new Promise((resolve, reject) => {
          if (age.value >= 18) {
            setTimeout(() => {
              resolve(`Welcome, ${name}. You can vote.`);
            }, 4000);
          } else {
            setTimeout(() => {
              reject(`Oh sorry ${name}. You aren't old enough.`);
            }, 4000);
          }
        });
        promise
          .then((message) => {
            alert(message);
          })
          .catch((err) => {
            alert(err);
          });
      }