const kiemTraDangNhap = () =>{
    var loginEmail =  document.getElementById("emailLogin").value;
    var loginPassword = document.getElementById("passwordLogin").value;
    const checkLogin = localStorage.getItem("userData");
    if(checkLogin) 
    {
        const userData = JSON.parse(checkLogin);
        if(userData.email === loginEmail && userData.password === loginPassword){

            alert("Đăng nhập thành công");
        }
        else{
            alert("Email or password error!");
        }    
    }
    else
        alert("Error! Not member!");
}