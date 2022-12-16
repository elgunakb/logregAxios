document.querySelector("#log-btn").addEventListener("click", () => {
  const email = document.querySelector("#emaill").value;
  const password = document.querySelector("#passwordd").value;
  if (email.trim() == "" || password.trim() == "") {
    swal({
      title: "Login failed!",
      text: "Fill in the blanks",
      icon: "error",
      button: "OK!",
    });
    document.querySelector("#emaill").style.border = " 1px red solid";
    document.querySelector("#passwordd").style.border = " 1px red solid";
  } else {
    axios.get("http://localhost:9000/get-data").then((res) => {
      console.log(res.data.data);
      if (
        res.data.data.find(
          (item) => item.email == email && item.password == password
        )
      ) {
        swal({
          title: "Success!",
          text: "You logged in!",
          icon: "success",
          button: "OK!",
        });

        setTimeout(() => {
          window.open("profil.html", "_self");
        }, 2000);
      } else {
        swal({
          title: "Login failed!",
          text: "Incorrect mail or password!",
          icon: "error",
          button: "OK!",
        });
      }
    });
    document.querySelector("#emaill").style.border = " 1px blue solid";
    document.querySelector("#passwordd").style.border = " 1px blue solid";
  }
});
