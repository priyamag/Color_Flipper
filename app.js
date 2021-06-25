var colors = ["black","green","red","orange","pink","yellow","purple","blue"];
let btn = document.getElementById("btn");
btn.addEventListener("click",function( ){
          const randomnumber = getrandomnumber( );
          document.body.style.backgroundColor = colors[randomnumber];

})
function getrandomnumber( ){
          return Math.floor(Math.random( ) * colors.length);
}