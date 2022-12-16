document.querySelector("#reg-btn").addEventListener("click", () => {
  const userName = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  axios.get("http://localhost:9000/get-data").then((res) => {
    console.log(res.data.data);
    if (res.data.data.find((item) => item.email == email)) {
      swal({
        title: "Unsuccessful!",
        text: "Such email already exists!",
        icon: "error",
        button: "OK!",
      });
      return;
    } else {
      if (
        userName.trim() == "" ||
        password.trim() == "" ||
        email.trim() == ""
      ) {
        swal({
          title: "Unsuccessful!",
          text: "Fill in the blanks",
          icon: "error",
          button: "OK!",
        });
        document.querySelector("#email").style.border = " 1px red solid";
        document.querySelector("#password").style.border = " 1px red solid";
        document.querySelector("#username").style.border = " 1px red solid";
      } else {
        axios
          .post("http://localhost:9000/create-data", {
            userName,
            password,
            email,
          })
          .then((res) => {
            if (res.status == 201) {
              swal({
                title: "Success!",
                text: "Registration successfully completed!",
                icon: "success",
                button: "OK!",
              });
              setTimeout(() => {
                window.open("login.html", "_self");
              }, 2000);
            }
          });
        document.querySelector("#email").style.border = " 1px blue solid";
        document.querySelector("#password").style.border = " 1px blue solid";
        document.querySelector("#username").style.border = " 1px blue solid";
      }
    }
  });
});
