function adduser(){
    player_1 = document.getElementById("player1_name").value;
    player_2 = document.getElementById("player2_name").value;
    localStorage.setItem("player-1",player_1);
    localStorage.setItem("player-2",player_2);
    
    window.location = "quiz_page.html";
}