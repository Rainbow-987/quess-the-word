

function addUser(){
    //player1_name_input
     user_name1 = document.getElementById("player1_name_input").value;

    //player2_name_input
    user_name2 = document.getElementById("player2_name_input").value;

    //local storage - player1
    localStorage.setItem("user_1",user_name1);
    

    // local storage - player2
   localStorage.setItem("user_2",user_name2);

   //navigate to game_page.html
    window.location = "game_page.html";
}