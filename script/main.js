$('#buscador').hide();
$('#resultados').hide();
//Funcion que esconde la imagen de transicion al clickar una portada de una canción
function hidesandshows(){
$('#pause5').hide();
$('#pause6').hide();
$('#pause7').hide();
$('#pause8').hide();
$('#pause9').hide();
$('#pause10').hide();
$('#pause11').hide();
$('#pause12').hide();
$('#pause13').hide();
$('#pause14').hide();
$('#audio1').hide();
$('#audio2').hide();
$('#audio3').hide();
$('#audio4').hide();
$('#audio5').hide();
$('#audio6').hide();
$('#audio7').hide();
$('#audio8').hide();
$('#audio9').hide();
$('#audio10').hide();
$('#imagen1').show();
$('#imagen2').show();
$('#imagen3').show();
$('#imagen4').show();
$('#imagen5').show();
$('#imagen6').show();
$('#imagen7').show();
$('#imagen8').show();
$('#imagen9').show();
$('#imagen10').show();

$('#imagen11').show();
$('#imagen12').show();
$('#imagen13').show();
$('#imagen14').show();
$('#imagen15').show();
}

hidesandshows()
canciones = ["hey","en que estrella estara","break your heart","payphone","soldadito marinero","givenchy","moonlight","danza kuduro","this is the life","thriller"]
artistas = ["Imagine Dragons","Nena Daconte","TAIO","MAROON 5","FITO & FITIPALDIS","DUKI","XXXTENTACION","DON OMAR","AMY Macdonald","MICHAEL JACKSON"]
canciones_de_artistas = [["hey"],["en que estrella estara"],["break your heart"],
["payphone"],["soldadito marinero"],["givenchy"],["moonlight"],["danza kuduro"]
,["this is the life"],["thriller"]

]

//Funcion que se ocupa de ir a la pagina del artista
function goArtista(artista){
  window.open("artista.html")
  setCookie("artista",artista)
}

//Onload de la pagina del artista
function actualizarArtista() {
  
 
  usuario = getCookieValue("usuario");
  foto = getCookieValue("foto" + usuario);
  artista = getCookieValue("artista")
  
  $("#containerArtistas").append(`
    <h1>LOS MEJORES TEMAS DE ${artista} </h1>

    `);
  
  document.getElementById('divfotoperfil2').innerHTML= `
    <img id = "fotoperfil" src = ${foto} alt = "ic" heigt = 120; width = 100; onclick = menu()>
    `
  name = getCookieValue("usuario")
  
  //Buscamos el indice del arrtista
  a = 0
 
  for (let i = 0; i< artistas.length;i++){
    
    if (artista == artistas[i]){
      a = i
    }
  }
  for (let i = 0; i < canciones_de_artistas[a].length;i++){
  if (canciones_de_artistas[a][i] == "hey"){
    
    $("#containerArtistas").append(`
    <div class = "cancion" >
      <div>
        <img id = pause5 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica6() class= "imagen" id = "imagen6" src="ej_images/imagin.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta1()" >
      </div>
         
        
    <div class = "description">  
        <audio controls id ="audio1">
        <source src="ej_images/hey.mp3" type="audio/mpeg">
        </audio>
        Imagine dragons - Hey</div>
        
    </div>
    `);
  }
  
  if (canciones_de_artistas[a][i] == "en que estrella estara"){
   
    $("#containerArtistas").append(`
    <div class = "cancion" >
      <div >
        <img id = pause6 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica7() class= "imagen" id = "imagen7" src="ej_images/estrellafoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta2()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio2">
        <source src="ej_images/estrella.mp3" type="audio/mpeg">
        </audio>
        Nena Daconte - En que Estrella estará</div>
    </div>
    `);
  }
   
    if (canciones_de_artistas[a][i] == "break your heart"){
   
      $("#containerArtistas").append(`
      <div class = "cancion" >
      <div >
        <img id = pause7 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica8() class= "imagen" id = "imagen8" src="ej_images/heart.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta3()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio3">
        <source src="ej_images/breakmusica.mp3" type="audio/mpeg">
        </audio>
        Taio Cruz - Break Your Heart</div>
    </div>
      `);
      
    }
      if (canciones_de_artistas[a][i] == "payphone"){
   
        $("#containerArtistas").append(`
        <div class = "cancion" >
      <div >
        <img id = pause8 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica9() class= "imagen" id = "imagen9" src="ej_images/payphone.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta4()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio4">
        <source src="ej_images/payphonemusica.mp3" type="audio/mpeg">
        </audio>
        Maroon 5 - Payphone</div>
    </div>
        `); 

  }
  if (canciones_de_artistas[a][i] == "soldadito marinero"){
   
    $("#containerArtistas").append(`
    <div class = "cancion" >
      <div >
        <img id = pause9 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica10() class= "imagen" id = "imagen10" src="ej_images/fito.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta5()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio5">
        <source src="ej_images/soldadito.mp3" type="audio/mpeg">
        </audio>
        Fito y Fitipaldis - Soldadito Marinero</div>
  </div>
    
    `); 

}
if (canciones_de_artistas[a][i] == "givenchy"){
   
  $("#containerArtistas").append(`
  <div class = "cancion" >
      <div>
        <img id = pause10 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica11() class= "imagen" id = "imagen11" src="ej_images/givenchyfoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta6()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio6">
        <source src="ej_images/givenchy.mp3" type="audio/mpeg">
        </audio>
        Duki - Givenchy</div>
    </div>
  `); 

}
if (canciones_de_artistas[a][i] == "moonlight"){
   
  $("#containerArtistas").append(`
  <div class = "cancion" >
      <div >
        <img id = pause11 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica12() class= "imagen" id = "imagen12" src="ej_images/x.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta7()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio7">
        <source src="ej_images/moonlight.mp3" type="audio/mpeg">
        </audio>
        XXXTENTACION - Moonlight</div>
    </div>
  `); 

}
if (canciones_de_artistas[a][i] == "danza kuduro"){
   
  $("#containerArtistas").append(`
  <div class = "cancion" >
      <div >
        <img id = pause12 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica13() class= "imagen" id = "imagen13" src="ej_images/danza.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta8()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio8">
        <source src="ej_images/danza.mp3" type="audio/mpeg">
        </audio>
        Don Omar - Danza Kuduro</div>
  </div>
  
  `); 

}
if (canciones_de_artistas[a][i] == "this is the life"){
   
  $("#containerArtistas").append(`
  <div class = "cancion" >
      <div >
        <img id = pause13 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica14() class= "imagen" id = "imagen14" src="ej_images/thisisthelife.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta9()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio9">
        <source src="ej_images/life.mp3" type="audio/mpeg">
        </audio>
        Amy Macdonald - This Is The Life</div>
    </div>
  `); 

}
if (canciones_de_artistas[a][i] == "thriller"){
   
  $("#containerArtistas").append(`
  <div class = "cancion" >
      <div >
        <img id = pause14 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica15() class= "imagen" id = "imagen15" src="ej_images/thrillerfoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta10()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio10">
        <source src="ej_images/thriller.mp3" type="audio/mpeg">
        </audio>
      Michael Jackson - Thriller</div>
  </div>
  `); 
}
hidesandshows()
  }
  
}

function musica6 (){
  escuchar('hey')
  $('#imagen6').hide();
  $('#pause5').show();
  $('#audio1').show();
 
}
function musica7 (){
  escuchar('en que estrella estara')
  $('#imagen7').hide();
  $('#pause6').show();
  $('#audio2').show();
  
}
function musica8 (){
  escuchar('break your heart')
  $('#imagen8').hide();
  $('#pause7').show();
  $('#audio3').show();
  
}
function musica9 (){
  escuchar('payphone')
  $('#imagen9').hide();
  $('#pause8').show();
  $('#audio4').show();
}
function musica10 (){
  escuchar('soldadito marinero')
  $('#imagen10').hide();
  $('#pause9').show();
  $('#audio5').show();
}
function musica11 (){
  escuchar('givenchy')
  $('#imagen11').hide();
  $('#pause10').show();
  $('#audio6').show();
}
function musica12 (){
  escuchar('moonlight')
  $('#imagen12').hide();
  $('#pause11').show();
  $('#audio7').show();
}
function musica13 (){
  escuchar('danza kuduro')
  $('#imagen13').hide();
  $('#pause12').show();
  $('#audio8').show();
}
function musica14 (){
  escuchar('this is the life')
  $('#imagen14').hide();
  $('#pause13').show();
  $('#audio9').show();
}
function musica15 (){
  escuchar('thriller')
  $('#imagen15').hide();
  $('#pause14').show();
  $('#audio10').show();
}
function stop (){

  hidesandshows()
}
function escuchar (cancion){
  usuario = getCookieValue("usuario")
  cookie = getCookieValue(usuario+cancion)

  
  if (cancion == "hey"){
    cookie = cookie + 1

    setCookie(usuario+cancion,cookie)
    artista = getCookieValue(usuario + "Imagine Dragons")
    /*Dependiendo de la cancion generamos unas cookies distintas,cada reproduccion es un 1
    pro lo que se lo vamos añadiendo */
    if (artista == ""){
      setCookie(usuario+"Imagine Dragons","1")
    }
    else{
      artista = artista + 1
      setCookie(usuario+"Imagine Dragons",artista)
    }
  }
  if (cancion == "en que estrella estara"){
    cookie = cookie + 1

    setCookie(usuario+cancion,cookie)
    artista = getCookieValue(usuario + "Nena Daconte")
    
    if (artista == ""){
      setCookie(usuario+"Nena Daconte","1")
    }
    else{
      artista = artista + 1
      setCookie(usuario+"Nena Daconte",artista)
    }


  }
    if (cancion == "break your heart"){
    cookie = cookie + 1

    setCookie(usuario+cancion,cookie)
    artista = getCookieValue(usuario + "TAIO")
    
    if (artista == ""){
      setCookie(usuario+"TAIO","1")
    }
    else{
      artista = artista + 1
      setCookie(usuario+"TAIO",artista)
    }
  }


    if (cancion == "payphone"){
    cookie = cookie + 1

    setCookie(usuario+cancion,cookie)
    artista = getCookieValue(usuario + "MAROON 5")
    
    if (artista == ""){
      setCookie(usuario+"MAROON 5","1")
    }
    else{
      artista = artista + 1
      setCookie(usuario+"MAROON 5",artista)
    }

  }
    if (cancion == "soldadito marinero"){
    cookie = cookie + 1

    setCookie(usuario+cancion,cookie)
    artista = getCookieValue(usuario + "FITO & FITIPALDIS")
    
    if (artista == ""){
      setCookie(usuario+"FITO & FITIPALDIS","1")
    }
    else{
      artista = artista + 1
      setCookie(usuario+"FITO & FITIPALDIS",artista)
    }


  }
    if (cancion == "givenchy"){
    cookie = cookie + 1

    setCookie(usuario+cancion,cookie)
    artista = getCookieValue(usuario + "DUKI")
    
    if (artista == ""){
      setCookie(usuario+"DUKI","1")
    }
    else{
      artista = artista + 1
      setCookie(usuario+"DUKI",artista)
    }
  }
    if (cancion == "moonlight"){
    cookie = cookie + 1

    setCookie(usuario+cancion,cookie)
    artista = getCookieValue(usuario + "XXXTENTACION")
    
    if (artista == ""){
      setCookie(usuario+"XXXTENTACION","1")
    }
    else{
      artista = artista + 1
      setCookie(usuario+"XXXTENTACION",artista)
    }

  }
    if (cancion == "danza kuduro"){
    cookie = cookie + 1

    setCookie(usuario+cancion,cookie)
    artista = getCookieValue(usuario + "DON OMAR")
    
    if (artista == ""){
      setCookie(usuario+"DON OMAR","1")
    }
    else{
      artista = artista + 1
      setCookie(usuario+"DON OMAR",artista)
    }

  }
    if (cancion == "this is the life"){
    cookie = cookie + 1

    setCookie(usuario+cancion,cookie)
    artista = getCookieValue(usuario + "AMY Macdonald")
    
    if (artista == ""){
      setCookie(usuario+"AMY Macdonald","1")
    }
    else{
      artista = artista + 1
      setCookie(usuario+"AMY Macdonald",artista)
    }


  }
    if (cancion == "thriller"){
    cookie = cookie + 1

    setCookie(usuario+cancion,cookie)
    artista = getCookieValue(usuario + "MICHAEL JACKSON")
    
    if (artista == ""){
      setCookie(usuario+"MICHAEL JACKSON","1")
    }
    else{
      artista = artista + 1
      setCookie(usuario+"MICHAEL JACKSON",artista)
    }

  }
}



function borrarCancion(numero){
  
  usuario = getCookieValue("usuario");
  perfil = getCookieValue("perfil");
  /*Evitamos que borren canciones gente que no ha iniciado sesion ya que la cookie perfil nos dice el perfil en el que estamos
  y la cookie usuario nos dice que perfil esta "logeado" */
  if (usuario != perfil){
    return
  }
  playlist = getCookieValue("playlist")
  
  listaCanciones = getCookieValue("playlist"+playlist+usuario)
  //El nombre de la playlist siempre va en la primera posicion
  listaCanciones = listaCanciones.split(',')

  //En nuestrta cookie el nombre siempre va a ir el primero
  vacio = listaCanciones[0]
  for (let i = 1; i< listaCanciones.length ;i++){
    if (i!=numero){
    vacio = vacio+ "," + listaCanciones[i] 
  }



  }
  numPlaylist = getCookieValue("playlist")

  setCookie("playlist"+numPlaylist+usuario,vacio)
  location.reload()
}
function borrarplaylist(numero){
  usuario = getCookieValue("usuario")
  perfil = getCookieValue("perfil");
  auxperf = getCookieValue("perfilaux");
  if (usuario != perfil || usuario != auxperf){
    return
  }
  setCookie("playlist"+(numero)+usuario,"null")
  location.reload()
}
function dirigirPlaylist(i){
  
  setCookie("playlist",i)
  window.open("playlist.html")

}
function añadirCancion(){
  
  usuario = getCookieValue("usuario");
  perfil = getCookieValue("perfil");
  
  if (usuario != perfil){
    return
  }
 
  busqueda = document.getElementById("busca");
  busqueda = busqueda.value;
  
  let encontrado = false
  numPlaylist = getCookieValue("playlist")
  busqueda = busqueda.toLowerCase(busqueda) 
  for (let i =0 ; i<10; i++){
    if (busqueda == canciones[i]){
      encontrado = true
      cont = getCookieValue("playlist"+numPlaylist+usuario)
      
      if (busqueda == canciones[0]){
        cont = cont +","+canciones[0]
        setCookie("playlist"+numPlaylist+usuario,cont)
        
      }
       
      if (busqueda == canciones[1]){
        cont = cont +","+canciones[1]
        setCookie("playlist"+numPlaylist+usuario,cont)
    
      }
       
        if (busqueda == canciones[2]){
          cont = cont +","+canciones[2]
        setCookie("playlist"+numPlaylist+usuario,cont)
          
          
        }
          if (busqueda == canciones[3]){
            cont = cont +","+canciones[3]
        setCookie("playlist"+numPlaylist+usuario,cont)
         
    
      }
      if (busqueda == canciones[4]){
        cont = cont +","+canciones[4]
        setCookie("playlist"+numPlaylist+usuario,cont)
        
    
    }
    if (busqueda == canciones[5]){
      cont = cont +","+canciones[5]
      setCookie("playlist"+numPlaylist+usuario,cont)
     
    
    }
    if (busqueda == canciones[6]){
      cont = cont +","+canciones[6]
      setCookie("playlist"+numPlaylist+usuario,cont)
      
    
    }
    if (busqueda == canciones[7]){
       
      cont = cont +","+canciones[7]
        setCookie("playlist"+numPlaylist+usuario,cont)
    
    }
    if (busqueda == canciones[8]){
       
      cont = cont +","+canciones[8]
        setCookie("playlist"+numPlaylist+usuario,cont)
    
    }
    if (busqueda == canciones[9]){
      cont = cont +","+canciones[9]
      setCookie("playlist"+numPlaylist+usuario,cont)
      
    
    }
     }
    
  }
  
    if (encontrado == false){
    alert("CANCION NO ENCONTRADA")
    
  }
  location.reload()
}
function actualizarPlaylist(){
 
  $('#footer').hide();
  
  usuario = getCookieValue("perfil");
  foto = getCookieValue("foto" + usuario);

  
  
  $("#containerPlaylist").sortable()
  playlist = getCookieValue("playlist")
  perfil = getCookieValue("perfilaux")
  listaCanciones = getCookieValue("playlist"+playlist+perfil)
  //El nombre de la playlist siempre va en la primera posicion
  listaCanciones = listaCanciones.split(',')
  
  document.getElementById('usuario').innerHTML= `
  <p>PERFIL DE "${usuario}"</p>
  `
  $("#tituloPlaylist").append(`
  <h1> Playlist "${listaCanciones[0]}"<h1>
  
  `); 
 

  for (let i = 1; i< listaCanciones.length ;i++){
    
    if (listaCanciones[i] == canciones[0]){
        
      $("#containerPlaylist").append(`
      <div class = "cancion" >
    <div>
      <img id = pause5 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
      <img onclick=musica6() class= "imagen" id = "imagen6" src="ej_images/imagin.jpg"  alt="fallo" width="100" height="100">
      <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarCancion('${i}')" ></img>
    </div>
       
      
  <div class = "description">  
      <audio controls id ="audio1">
      <source src="ej_images/hey.mp3" type="audio/mpeg">
      </audio>
      Imagine dragons - Hey</div>
      
  </div>
      `);
    }
    if (listaCanciones[i] == canciones[1]){
      hidesandshows()
      $("#containerPlaylist").append(`
      <div class = "cancion" >
      <div >
        <img id = pause6 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica7() class= "imagen" id = "imagen7" src="ej_images/estrellafoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarCancion('${i}')" ></img>
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio2">
        <source src="ej_images/estrella.mp3" type="audio/mpeg">
        </audio>
        Nena Daconte - En que Estrella estará</div>
    </div>
      `);
    }
     
      if (listaCanciones[i] == canciones[2]){
     
        $("#containerPlaylist").append(`
        <div class = "cancion" >
      <div >
        <img id = pause7 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica8() class= "imagen" id = "imagen8" src="ej_images/heart.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarCancion('${i}')" ></img>
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio3">
        <source src="ej_images/breakmusica.mp3" type="audio/mpeg">
        </audio>
        Taio Cruz - Break Your Heart</div>
    </div>
        `);
        
      }
        if (listaCanciones[i] == canciones[3]){
     
          $("#containerPlaylist").append(`
          <div class = "cancion" >
      <div >
        <img id = pause8 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica9() class= "imagen" id = "imagen9" src="ej_images/payphone.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarCancion('${i}')" ></img>
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio4">
        <source src="ej_images/payphonemusica.mp3" type="audio/mpeg">
        </audio>
        Maroon 5 - Payphone</div>
    </div>
          `); 
  
    }
    if (listaCanciones[i] == canciones[4]){
     
      $("#containerPlaylist").append(`
      <div class = "cancion" >
      <div >
        <img id = pause9 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica10() class= "imagen" id = "imagen10" src="ej_images/fito.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarCancion('${i}')" ></img>
      </div>
      <div class = "description">  
        <audio controls id ="audio5">
        <source src="ej_images/soldadito.mp3" type="audio/mpeg">
        </audio>
        Fito y Fitipaldis - Soldadito Marinero</div>
  </div>
      `); 
  
  }
  if (listaCanciones[i] == canciones[5]){
     
    $("#containerPlaylist").append(`
    <div class = "cancion" >
      <div>
        <img id = pause10 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica11() class= "imagen" id = "imagen11" src="ej_images/givenchyfoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarCancion('${i}')" ></img>
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio6">
        <source src="ej_images/givenchy.mp3" type="audio/mpeg">
        </audio>
        Duki - Givenchy</div>
    </div>
    `); 
  
  }
  if (listaCanciones[i] == canciones[6]){
     
    $("#containerPlaylist").append(`
    <div class = "cancion" >
      <div >
        <img id = pause11 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica12() class= "imagen" id = "imagen12" src="ej_images/x.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarCancion('${i}')" ></img>

      <div class = "description">  
        <audio controls id ="audio7">
        <source src="ej_images/moonlight.mp3" type="audio/mpeg">
        </audio>
        XXXTENTACION - Moonlight</div>
    </div>
    `); 
  
  }
  if (listaCanciones[i] == canciones[7]){
     
    $("#containerPlaylist").append(`
    <div class = "cancion" >
      <div >
        <img id = pause12 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica13() class= "imagen" id = "imagen13" src="ej_images/danza.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarCancion('${i}')" ></img>
      </div>
      <div class = "description">  
        <audio controls id ="audio8">
        <source src="ej_images/danza.mp3" type="audio/mpeg">
        </audio>
        Don Omar - Danza Kuduro</div>
    </div>
    `); 
  
  }
  if (listaCanciones[i] == canciones[8]){
     
    $("#containerPlaylist").append(`
    <div class = "cancion" >
      <div >
        <img id = pause13 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica14() class= "imagen" id = "imagen14" src="ej_images/thisisthelife.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarCancion('${i}')" ></img>
      </div>
      <div class = "description">  
        <audio controls id ="audio9">
        <source src="ej_images/life.mp3" type="audio/mpeg">
        </audio>
        Amy Macdonald - This Is The Life</div>
    </div>
    `); 
  
  }
  if (listaCanciones[i] == canciones[9]){
     
    $("#containerPlaylist").append(`
    <div class = "cancion" >
      <div >
        <img id = pause14 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica15() class= "imagen" id = "imagen15" src="ej_images/thrillerfoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarCancion('${i}')" ></img>
      </div>
      <div class = "description">  
        <audio controls id ="audio10">
        <source src="ej_images/thriller.mp3" type="audio/mpeg">
        </audio>
      Michael Jackson - Thriller</div>
  </div>
    `); 
  
  }
  hidesandshows()
    }
  }

function dirigirSoloPlaylist(){
  usuario = getCookieValue("usuario");
  if (usuario == "!" || usuario == ""){
    return
  }
  window.open("soloplaylist.html")
}

function actualizarsoloplaylist(){

  usuario = getCookieValue("usuario");
  if (usuario == "!" || usuario == ""){
    return
  }
  
  foto = getCookieValue("foto" + usuario);
  $('#footer').hide();
  document.getElementById('usuario').innerHTML= `
  <p>PERFIL DE "${usuario}"</p>
  `
  document.getElementById('divfotoperfil2').innerHTML= `
    <img id = "fotoperfil" src = ${foto} alt = "ic" heigt = 120; width = 100; onclick = menu()>
    `
  for (let i = 0;i<3; i++){
    playlist = getCookieValue("playlist"+(i+1)+usuario)
    playlist = playlist.split(',')
    if (playlist != "null" && playlist != ""){

      $("#containerPlaylist").append(`
  <div class = "cancion">
  <div>
    
    <img class= "imagen" src="ej_images/playlist.png" alt="fallo" width="100" height="100">
    <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarplaylist('${i+1}')">
  </div>
  <div class = "description" onclick = dirigirPlaylist(${i+1})>${playlist[0]}</div>
  </div>
  
  `); 
    }
  }
    }
function crearPlaylist(){
  
  perfil = getCookieValue("perfil")
  aux = getCookieValue("playlist1"+perfil)
  usuario = getCookieValue("usuario")
  perfil = getCookieValue("perfil");
  auxperf = getCookieValue("perfilaux");
  if (usuario != perfil || usuario != auxperf){
    return
  }
  if (aux == "" || aux == "null"){
    if (name != null){
    name = prompt("¿Como desea llamar a la playlist?")
    setCookie("playlist1"+perfil,name)
  }
  //Actualizamos para que cargue el onload de la pagina donde sale la playlist
  location.reload()
  return
  }
  aux = getCookieValue("playlist2"+perfil)
  if (aux == "" || aux == "null"){
    name = prompt("¿Como desea llamar a la playlist?")
    if (name != null){
    setCookie("playlist2"+perfil,name)
  }
    location.reload()
    return
  }
  aux = getCookieValue("playlist3"+perfil)
  if (aux == "" || aux == "null"){
    if (name != null){
    name = prompt("¿Como desea llamar a la playlist?")
    setCookie("playlist3"+perfil,name)
  }
    location.reload()
    return
  }
  alert("El máximo numero de playlist son 3")
}
function buscarCancion(){
  busqueda = document.getElementById("busca");
  busqueda = busqueda.value;
  let encontrado = false
  busqueda = busqueda.toLowerCase(busqueda) 
  for (let i =0 ; i<10; i++){
    if (busqueda == canciones[i]){
      encontrado = true
      $('.container').hide();
      $('#resultados').show();
      if (busqueda == canciones[0]){
        $("#resultados").append(`
        <div class = "cancion" >
        <div>
          <img id = pause5 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
          <img onclick=musica6() class= "imagen" id = "imagen6" src="ej_images/imagin.jpg"  alt="fallo" width="100" height="100">
          <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta1()" >
        </div>
      <div class = "description">  
          <audio controls id ="audio1">
          <source src="ej_images/hey.mp3" type="audio/mpeg">
          </audio>
          Imagine dragons - Hey</div>
          
      </div>
        
        `);
      }
       
      if (busqueda == canciones[1]){
        hidesandshows()
        $("#resultados").append(`
        <div class = "cancion" >
      <div >
        <img id = pause6 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica7() class= "imagen" id = "imagen7" src="ej_images/estrellafoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta2()" >
      </div>
      <div class = "description">  
        <audio controls id ="audio2">
        <source src="ej_images/estrella.mp3" type="audio/mpeg">
        </audio>
        Nena Daconte - En que Estrella estará</div>
    </div>
        `);
      }
       
        if (busqueda == canciones[2]){
          $("#resultados").append(`
          <div class = "cancion">
          <div>
            <audio controls>
              <source src="ej_images/breakmusica.mp3" type="audio/mpeg">
          </audio>
            <img class= "imagen" src="ej_images/heart.jpg" alt="fallo" width="100" height="100">
            <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta3()">
          </div>
            <div class = "description">Taio Cruz - Break Your Heart</div>
        </div>
          `);
          
        }
          if (busqueda == canciones[3]){
       
            $("#resultados").append(`
            <div class = "cancion" >
      <div >
        <img id = pause8 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica9() class= "imagen" id = "imagen9" src="ej_images/payphone.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta4()" >
      </div>
      <div class = "description">  
        <audio controls id ="audio4">
        <source src="ej_images/payphonemusica.mp3" type="audio/mpeg">
        </audio>
        Maroon 5 - Payphone</div>
    </div>
            `); 
    
      }
      if (busqueda == canciones[4]){
       
        $("#resultados").append(`
        <div class = "cancion" >
      <div >
        <img id = pause9 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica10() class= "imagen" id = "imagen10" src="ej_images/fito.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta5()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio5">
        <source src="ej_images/soldadito.mp3" type="audio/mpeg">
        </audio>
        Fito y Fitipaldis - Soldadito Marinero</div>
  </div>
        
        `); 
    
    }
    if (busqueda == canciones[5]){
       
      $("#resultados").append(`
      <div class = "cancion" >
      <div>
        <img id = pause10 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica11() class= "imagen" id = "imagen11" src="ej_images/givenchyfoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta6()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio6">
        <source src="ej_images/givenchy.mp3" type="audio/mpeg">
        </audio>
        Duki - Givenchy</div>
    </div>
      
      `); 
    }
    if (busqueda == canciones[6]){
      $("#resultados").append(`
      <div class = "cancion" >
      <div >
        <img id = pause11 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica12() class= "imagen" id = "imagen12" src="ej_images/x.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta7()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio7">
        <source src="ej_images/moonlight.mp3" type="audio/mpeg">
        </audio>
        XXXTENTACION - Moonlight</div>
    </div>
      
      `); 
    
    }
    if (busqueda == canciones[7]){
      $("#resultados").append(`
      <div class = "cancion" >
      <div >
        <img id = pause12 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica13() class= "imagen" id = "imagen13" src="ej_images/danza.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta8()" >
      </div>
      <div class = "description">  
        <audio controls id ="audio8">
        <source src="ej_images/danza.mp3" type="audio/mpeg">
        </audio>
        Don Omar - Danza Kuduro</div>
    </div>
      `); 
    }
    if (busqueda == canciones[8]){
       
      $("#resultados").append(`
      <div class = "cancion" >
      <div >
        <img id = pause13 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica14() class= "imagen" id = "imagen14" src="ej_images/thisisthelife.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta9()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio9">
        <source src="ej_images/life.mp3" type="audio/mpeg">
        </audio>
        Amy Macdonald - This Is The Life</div>
    </div>
      
      `); 
    
    }
    if (busqueda == canciones[9]){
       
      $("#resultados").append(`
      <div class = "cancion" >
      <div >
        <img id = pause14 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica15() class= "imagen" id = "imagen15" src="ej_images/thrillerfoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta10()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio10">
        <source src="ej_images/thriller.mp3" type="audio/mpeg">
        </audio>
      Michael Jackson - Thriller</div>
  </div>
      
      `); 
    }
     }
     hidesandshows()
  }
    if (encontrado == false){
    alert("CANCION NO ENCONTRADA")
  }
}
function final(){
    nombre = document.getElementById("name");
    nombre = nombre.value;
    contraseña = document.getElementById("password");
    contraseña = contraseña.value;
    nombre2 = document.getElementById("name2");
    nombre2 = nombre2.value;
    apellidos = document.getElementById("surnames");
    apellidos = apellidos.value;
    email_ = document.getElementById("email");
    if(!email_.validity.valid ){
      alert("El correo no sigue el formato correcto")
    }
    email = email_.value;
    fecha= document.getElementById("birthdate");
    fecha = fecha.value;
    casilla = null;
    
    foto = document.getElementById("foto");
    foto = foto.value
    
    //quitamos el fakepath
    
    if( document.getElementById('micheckbox').checked) {
      casilla = "seleccionado"
  }
  
  //En caso de no haber recibido un parametro no podremos registrar al usuario
    if (nombre == "" || nombre == null || contraseña == "" || contraseña == null|| nombre2 == "" || nombre2 == null
       || apellidos == "" || apellidos == null|| email == "" || email == null|| fecha == "" || fecha == null||casilla == null||foto == "" ||foto == "!"
       ){
        if (casilla == null){
          alert("Acepte las condiciones de uso")
        }
        else{alert("Creedenciales no válidas");}
       
    }
    else{
      registroUsuario();
    }
    
}

function borrar(){
    nombre = document.getElementById("name");
    nombre.value = "";
    contraseña = document.getElementById("password");
    contraseña.value = "";
    nombre2 = document.getElementById("name2");
    nombre2.value = "";
    apellidos = document.getElementById("surnames");
    apellidos.value = "";
    email = document.getElementById("email");
    email.value = "";
    fecha = document.getElementById("birthdate");
    fecha.value = "";
    foto = document.getElementById("profilepicture");
    foto.value = "";
  }
//Creamos cookies
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// Obtenemos cookies
function getCookie(cname,cvalue,user) {
  let name = cname + user + "=" + cvalue;
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c == name) {
      return "!";
      
    }
  }
  return "";
}

//Funcion que actualiza la pagina main
function actualizarWeb() {
  let name = "usuario=";
  usuario = getCookieValue("usuario");
  foto = getCookieValue("foto" + usuario);
  document.getElementById('divfotoperfil').innerHTML= `
    <img id = "fotoperfil" src = "${foto}" alt = "ic" heigt = 120; width = 100; onclick = menu()>
    `
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c=="usuario=!"){
      return
    }
    if (c.indexOf(name) == 0) {
      log = getCookieValue("incio")
      $('#lanzamientos').hide();
      $('#footer').hide();
      $('#divfotoperfil').show();
      $('#sign').hide();
      $('#buscador').show();
      return ;
    }
  }
  return "";
}
//Esta funcion registra usuario
function registroUsuario() {
  /*quitamos la cookie foto, para quitar la eleccion de otro usuario registrado, nosotros cuando una foto se
  clicka se crea una cookie en la que se expresa que opcion ha escogido el usuario*/
  foto = getCookieValue("foto");
  const correo = document.getElementById("name");
  const contraseña = document.getElementById("password"); 
  const correazo=correo.value;
  const password=contraseña.value;
  let nameelement = document.getElementById("name2");
  let name = nameelement.value;
  apellido = document.getElementById("surnames");
  apellidos = apellido.value;
  email = document.getElementById("email");
  email = email.value;
  fecha = document.getElementById("birthdate");
  fecha = fecha.value;
  foto = document.getElementById("foto");
  foto = foto.value
  foto = foto.substring(12);
  aux = "ej_images/"
  foto = aux + foto
  let check = checkPass(password);
  if (check == "!"){
    alert("La contraseña debe ser menor a 8 dígitos y contener dígitos especiales");
    return
  }
  let user = getCookie("correo",correazo,correazo);

  if (user != "") {
    
    alert("Usuario ya registrado " + correazo);
    
    iniciado=true;
    window.close();

  } else {
    user = correazo;
    pass= password;
    if (user != "" && user != null && pass !="" && pass !=null) {
      iniciado=true
      id = "correo"+user;
      setCookie(id, user, 365);
      id2 = "contraseña" + user;
      setCookie(id2, pass, 365);
      id3 = "name" + user;
      setCookie(id3, name,365);
      id4 = "apellido"+user; 
      setCookie(id4, apellidos,365);
      id5 = "email"+user; 
      setCookie(id5, email,365);
      id6 = "fecha"+user; 
      setCookie(id6, fecha,365);
      id7= "foto"+user;
      setCookie(id7, foto,365);
      setCookie("seguidos"+user, "",365);
      alert("Registrado! "+ user);
      window.close();
        };
        
      
    }
    
    
}
function inicio(){
  alert("")
location.reload();
}
function getCookieValue(cookie){

  let name = cookie+"=";
  
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
      
    }
    if (c.indexOf(name) == 0) {
       return (c.substring(name.length));
    }
  }
  return "";
}


function loginButton(){

  nombre = document.getElementById("namein");
  nombre = nombre.value;
  contraseña = document.getElementById("passwordin");
  contraseña = contraseña.value;
  let checkeo = login("correo",nombre,contraseña); 
  
  if (checkeo == "!"){
    alert("Sesión iniciada");
    setCookie("usuario",nombre);
    setCookie("inicio","true");
    setCookie("perfilaux",nombre)
    setCookie("perfil",nombre)
    window.open("web.html")
    window.close();
    
  }
  else{
    alert("Error al iniciar sesión");
      
  }
}

function login(cname,cvalue,contra) {
  
  let name = cname + cvalue + "=" + cvalue;
  let contraseña = "contraseña"+cvalue+"=" + contra;
  let encontrado = getCookie("contraseña",contra,cvalue);
  if (encontrado == "!"){
    return "!";
  }
  
}

function editCookie(cname,cvalue,user){
  document.cookie = cname+user+"="+cvalue +";" + ";path=/";Version = 1;
}
function sign(){

  
}
//Funcion para ver las cookies
function verTodas(){
  alert(document.cookie);
}
function checkPass(password){
  if (password.length > 8){
    return "!";
  }
  for(let i = 0; i < password.length; i++) {
    let ascii = password[i].charCodeAt(0);
    if ((ascii > 47 && ascii < 58) || (ascii > 64 && ascii <123)){
      return ""
    }
    else{
      return "!"
    }
  }
  return "";
}

function reload(){

  location.reload()

}
function cerrarsesion(){
   //Borramos lo que habia guardado en la cookie usuario ya que ya no hay ningun perfil guardado
    document.cookie = "usuario=!" +";" + ";path=/";Version = 1;
    $('#modal').hide();
    window.open("web.html")
    window.close()
    
   
  }



function cargarperfil(){
  let name = getCookieValue("usuario"); 
  let contraseña_ = getCookieValue("contraseña" + name);
  let name_ = getCookieValue("name" + name);
  let surnames_ = getCookieValue("apellido" + name);
  let email_ = getCookieValue("email" + name);
  let fecha_ = getCookieValue("fecha" + name);
  let foto = getCookieValue("foto" + name);
  //Vemos que foto tiene
  
  url = foto
  //Codigo html de la pagina, con el nombre del usuario y la imagen de perfil que tenia el usuario
  document.getElementById('containerPerfil').innerHTML= `
  <img id = "fotoperfil" src = ${url} alt = "ic" heigt = 120; width = 100;>
  <h1 id = "titulo"> ¡HOLA ${name}! </h1>
  <section id = "agregargente">
    ¡Agrega gente aqui!
    <input type="text" placeholder="Usuario" name="" id = "añadir">
    <button type="submit" onclick=añadir()>Añadir</button>
  </section>
  <div id="cont">
		<nav>
			<a id = "perfil1" href="#">Artistas mas escuchados</a>
      <br>
			<a id = "perfil2" href="#">Canciones mas escuchadas</a>
      <br>
			<a id = "perfil3" href="seguidos.html">Usuarios agregados</a>
      <br>
      <a id = "perfil4" href="megusta.html" >Canciones gustadas</a>
      <br>
      </nav>
    </div>
  `


    nombre2 = document.getElementById("name2");
    nombre2.value = name_;
    
    apellidos = document.getElementById("surnames");
    apellidos.value = surnames_;
    email = document.getElementById("email");
    email.value = email_;
    fecha = document.getElementById("birthdate");
    fecha.value = fecha_;
    
}
function cargarcuenta(){
   
  let name = getCookieValue("usuario");
  let name_ = getCookieValue("name" + name);
  let surnames_ = getCookieValue("apellido" + name);
  let email_ = getCookieValue("email" + name);
  let fecha_ = getCookieValue("fecha" + name);
   
  let contraseña_ = getCookieValue("contraseña" + name);
  let foto_ = getCookieValue("foto" + name);

  
  
  nombre2 = document.getElementById("name2");
  nombre2.value = name_;
  
  apellidos = document.getElementById("surnames");
  apellidos.value = surnames_;
  email = document.getElementById("email");
  email.value = email_;
  fecha = document.getElementById("birthdate");
  fecha.value = fecha_;

    nombre = document.getElementById("name");
    nombre.value = name;
    contraseña = document.getElementById("password");
    contraseña.value = contraseña_;
    foto = document.getElementById("foto");
    foto.value = foto_;
    
}
function menu(){

  $('#menu-derecha').show();
  $('#label').hide();
}
function menuCerrar(){
  $('#menu-derecha').hide();
  $('#label').show();
}

function final3(){

  
  nombre2 = document.getElementById("name2");
  
  nombre2 = nombre2.value;
  
  apellidos = document.getElementById("surnames");
  apellidos = apellidos.value;
  
  email = document.getElementById("email");
  email = email.value;
  
  fecha= document.getElementById("birthdate");
  fecha = fecha.value;
  
  casilla = null;
  contraseña_ = document.getElementById("password");
  contraseña_ = contraseña_.value;

  foto = document.getElementById("foto");
  foto = foto.value;
  if (foto != ""){
  foto = foto.substring(12)
  foto = "ej_images/" + foto
}
  let check = checkPass(contraseña_);
  if (check == "!"){
    alert("La contraseña debe ser menor a 8 dígitos y contener dígitos especiales");
    return
  }

  
  casilla = null;
  

  
  if( document.getElementById('micheckbox').checked) {
    casilla = "seleccionado"
}

  if ( nombre2 == "" || nombre2 == null
  || apellidos == "" || apellidos == null|| email == "" || email == null|| fecha == "" || fecha == null||casilla == null 
  || casilla == null || contraseña_ == null || contraseña_ == "" 
     ){
      if (casilla == null){
        alert("Acepte las condiciones de uso")
      }
      else{alert("Creedenciales no válidas");}
       
  }
  else{
      user = getCookieValue("usuario")
   
      id3 = "contraseña" + user;
      setCookie(id3, contraseña_,365);
      
      user = getCookieValue("usuario")
      id3 = "name" + user;
      setCookie(id3, nombre2,365);
      id4 = "apellido"+user; 
      setCookie(id4, apellidos,365);
      id5 = "email"+user; 
      setCookie(id5, email,365);
      id6 = "fecha"+user; 
      setCookie(id6, fecha,365);
      id7 = "foto"+user; 
      if (foto != ""){
      setCookie(id7, foto,365);
      }
      alert("Datos cambiados");
  }
}
function mensajeModal(){
  $('#menu-derecha').hide();
  $('#modal').show();
  $('#fotoperfil').hide();
}
function nocerrar(){
  $('#modal').hide();
  menuCerrar();
  location.reload();
  
}
$('#divfotoperfil').hide();
$('#menu-derecha').hide();
$('#modal').hide();

function megusta1(){
  name = getCookieValue ("usuario") 

  if(name == "!" || name == ""){
    alert("Tienes que iniciar sesion para usar esta funcion")
    return
  }
  setCookie("megusta1" + name,"ok")
}
function megusta2(){
  name = getCookieValue ("usuario") 

  if(name == "!" || name == ""){
    alert("Tienes que iniciar sesion para usar esta funcion")
    return
  }
  setCookie("megusta2" + name,"ok")
}
function megusta3(){
  name = getCookieValue ("usuario") 

  if(name == "!" || name == ""){
    alert("Tienes que iniciar sesion para usar esta funcion")
    return
  }
  setCookie("megusta3" + name,"ok")
}
function megusta4(){
  name = getCookieValue ("usuario") 

  if(name == "!" || name == ""){
    alert("Tienes que iniciar sesion para usar esta funcion")
    return
  }
  setCookie("megusta4" + name,"ok")
}
function megusta5(){
  name = getCookieValue ("usuario") 

  if(name == "!" || name == ""){
    alert("Tienes que iniciar sesion para usar esta funcion")
    return
  }
  setCookie("megusta5" + name,"ok")
}
function megusta6(){
  name = getCookieValue ("usuario") 

  if(name == "!" || name == ""){
    alert("Tienes que iniciar sesion para usar esta funcion")
    return
  }
  setCookie("megusta6" + name,"ok")
}
function megusta7(){
  name = getCookieValue ("usuario") 

  if(name == "!" || name == ""){
    alert("Tienes que iniciar sesion para usar esta funcion")
    return
  }
  setCookie("megusta7" + name,"ok")
}
function megusta8(){
  name = getCookieValue ("usuario") 

  if(name == "!" || name == ""){
    alert("Tienes que iniciar sesion para usar esta funcion")
    return
  }
  setCookie("megusta8" + name,"ok")
}
function megusta9(){
  name = getCookieValue ("usuario") 

  if(name == "!" || name == ""){
    alert("Tienes que iniciar sesion para usar esta funcion")
    return
  }
  setCookie("megusta9" + name,"ok")
}
function megusta10(){
  name = getCookieValue ("usuario") 

  if(name == "!" || name == ""){
    alert("Tienes que iniciar sesion para usar esta funcion")
    return
  }
  setCookie("megusta10" + name,"ok")
}
function actualizarMegusta() {
  
  let name = "usuario=";
  usuario = getCookieValue("usuario");
  foto = getCookieValue("foto" + usuario);
  
  
  document.getElementById('divfotoperfil2').innerHTML= `
  <img id = "fotoperfil" src = ${foto} alt = "ic" heigt = 120; width = 100; onclick = menu()>
  `
  name = getCookieValue("usuario")

  megusta1 = getCookieValue("megusta1"+name)
  megusta2 = getCookieValue("megusta2"+name)
  megusta3 = getCookieValue("megusta3"+name)
  megusta4 = getCookieValue("megusta4"+name)
  megusta5 = getCookieValue("megusta5"+name)
  megusta6 = getCookieValue("megusta6"+name)
  megusta7 = getCookieValue("megusta7"+name)
  megusta8 = getCookieValue("megusta8"+name)
  megusta9 = getCookieValue("megusta9"+name)
  megusta10 = getCookieValue("megusta10"+name)

  if (megusta1 != "ok" && megusta2 != "ok" && megusta3 != "ok" && megusta4 != "ok" && megusta5 != "ok" &&
  megusta6 != "ok" && megusta7 != "ok" && megusta8 != "ok" && megusta9 != "ok" && megusta10 != "ok" ){

    document.getElementById("containerMegusta").innerHTML = ` <h1>NO TIENES CANCIONES MARCADAS COMO ME GUSTA </h1>`
  }
  if (megusta1 == "ok"){
   
    $("#containerMegusta").append(`
    <div class = "cancion" draggable = true>
    <div>
      <audio controls>
        <source src="ej_images/hey.mp3" type="audio/mpeg">
    </audio>
      <img class= "imagen" src="ej_images/imagin.jpg"  alt="fallo" width="100" height="100">
      <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('1')" >
    </div>
      <div class = "description">Imagine dragons - Hey</div>
      
  </div>
    
    
    `);
  }
   
  if (megusta2 == "ok"){

    $("#containerMegusta").append(`
    <div class = "cancion">
    <div>
      <audio controls>
        <source src="ej_images/estrella.mp3" type="audio/mpeg">
    </audio>
      <img class= "imagen" src="ej_images/estrellafoto.jpg" alt="fallo" width="100" height="100">
      <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('2')">
    </div>
      <div class = "description">Nena Daconte - En que Estrella estará</div>
  </div>
    
    
    `);
  }
   
    if (megusta3 == "ok"){
   
      $("#containerMegusta").append(`
      <div class = "cancion">
      <div>
        <audio controls>
          <source src="ej_images/breakmusica.mp3" type="audio/mpeg">
      </audio>
        <img class= "imagen" src="ej_images/heart.jpg" alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('3')">
      </div>
        <div class = "description">Taio Cruz - Break Your Heart</div>
    </div>
      
      `);
      
    }
      if (megusta4 == "ok"){
   
        $("#containerMegusta").append(`
        <div class = "cancion">
      <div>
        <audio controls>
          <source src="ej_images/payphonemusica.mp3" type="audio/mpeg">
      </audio>
        <img class= "imagen" src="ej_images/payphone.jpg" alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="borrarMG('4')">
      </div>
        <div class = "description">Maroon 5 - Payphone</div>
    </div>
        
        `); 

  }
  if (megusta5 == "ok"){
   
    $("#containerMegusta").append(`
    <div class = "cancion">
    <div>
      <audio controls>
        <source src="ej_images/soldadito.mp3" type="audio/mpeg">
    </audio>
      <img class= "imagen" src="ej_images/fito.jpg" alt="fallo" width="100" height="100">
      <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('5')">
    </div>
      <div class = "description">Fito y Fitipaldis - Soldadito Marinero</div>
</div>
    
    `); 

}
if (megusta6 == "ok"){
   
  $("#containerMegusta").append(`
  <div class = "cancion">
  <div>
    <audio controls>
      <source src="ej_images/givenchy.mp3" type="audio/mpeg">
  </audio>
    <img class= "imagen" src="ej_images/givenchyfoto.jpg" alt="fallo" width="100" height="100">
    <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('6')">
  </div>
    <div class = "description">Duki - Givenchy</div>
</div>
  
  `); 

}
if (megusta7 == "ok"){
   
  $("#containerMegusta").append(`
  <div class = "cancion">
  <div>
    <audio controls>
      <source src="ej_images/moonlight.mp3" type="audio/mpeg">
  </audio>
    <img class= "imagen" src="ej_images/x.jpg" alt="fallo" width="100" height="100">
    <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('7')">
  </div>
    <div class = "description">XXXTENTACION - Moonlight</div>
</div>
  
  `); 

}
if (megusta8 == "ok"){
   
  $("#containerMegusta").append(`
  <div class = "cancion">
  <div>
    <audio controls>
      <source src="ej_images/danza.mp3" type="audio/mpeg">
  </audio>
    <img class= "imagen" src="ej_images/danza.jpg" alt="fallo" width="100" height="100">
    <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('8')">
  </div>
    <div class = "description">Don Omar - Danza Kuduro</div>
</div>
  
  `); 

}
if (megusta9 == "ok"){
   
  $("#containerMegusta").append(`
  <div class = "cancion">
  <div>
    <audio controls>
      <source src="ej_images/life.mp3" type="audio/mpeg">
  </audio>
    <img class= "imagen" src="ej_images/thisisthelife.jpg" alt="fallo" width="100" height="100">
    <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('9')">
  </div>
    <div class = "description">Amy Macdonald - This Is The Life</div>
</div>
  
  `); 

}
if (megusta10 == "ok"){
   
  $("#containerMegusta").append(`
  <div class = "cancion">
  <div>
    <audio controls>
      <source src="ej_images/thriller.mp3" type="audio/mpeg">
  </audio>
    <img class= "imagen" src="ej_images/thrillerfoto.jpg" alt="fallo" width="100" height="100">
    <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('10')">
  </div>
<div class = "description">Michael Jackson - Thriller</div>
</div>
  
  `); 

}

  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
   

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
      
    }
    if (c=="usuario=!"){
      return
    }
    
    if (c.indexOf(name) == 0) {
      log = getCookieValue("incio")
    
      $('#footer').hide();
      $('#divfotoperfil').show();
      $('#sign').hide();

      return ;
      
    }
  }
  
  return "";

}

function borrarMG(numero){
  usuario = getCookieValue("usuario")
  perfil = getCookieValue("perfil");
  auxperf = getCookieValue("perfilaux");
  if (usuario != perfil || usuario != auxperf){
    return
  }
    name = getCookieValue("usuario")
    cookie = ("megusta"+numero+name)
    setCookie(cookie,"!")
    location.reload()
}   
function taparLanzamientos(){
  usuario = getCookieValue("usuario")
  if (usuario == "!" || usuario == ""){
  $('#lanzamientos').hide();
}
}
function mostrarLanzamientos(){
  usuario = getCookieValue("usuario")
  if (usuario == "!" || usuario == ""){
  $('#lanzamientos').show();
}
}
function añadir(){
  
  target = document.getElementById("añadir");
  target = target.value;
  
  usuario = getCookieValue("usuario")
  perfil = getCookieValue("perfil");
  auxperf = getCookieValue("perfilaux");
  if (usuario != perfil || usuario != auxperf){
    return
  }
  usuario = getCookieValue("usuario")
  perfil = getCookieValue("perfil");
  if (usuario == target){
    alert("USUARIO NO VALIDO")
    return
  }
  
  user = getCookieValue("correo"+target)
  num = getCookieValue("seguidos"+usuario)
  existe = getCookieValue(usuario+"follow"+target,"ok")
  if (user == ""){
    alert("El usuario no existe")
    return
  }
  if (existe == "ok"){
    alert ("Ya sigues a "+target)
    return
  }
  
  setCookie(usuario+"follow"+target,target)
  alert("Has agregado a "+target+"!")
  location.reload()
  num = num +1
  setCookie("seguidos"+usuario,num)
}

function updateSeguidos(){
  user = getCookieValue("usuario")
  num = getCookieValue("seguidos" + user)
  if (num == 0){

  }

  for (let i=0 ; i< num ; i++){
   
   
    $("#containerMegusta").append(`
    <div class = "cancion">
    <div>
      <audio controls>
        <source src="ej_images/thriller.mp3" type="audio/mpeg">
    </audio>
      <img class= "imagen" src="ej_images/thrillerfoto.jpg" alt="fallo" width="100" height="100">
      <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('10')">
    </div>
  <div class = "description">Michael Jackson - Thriller</div>
  </div>
    
    `); 
  }
}

function actualizarPerfilYSeguidos() {
  $('#footer').hide();

  let name = "usuario=";
  usuario = getCookieValue("perfil");
  foto = getCookieValue("foto" + usuario);
  
  document.getElementById('usuario').innerHTML= `
  <p>PERFIL DE "${usuario}"</p>
  `

  for (let i = 0;i<3; i++){
    playlist = getCookieValue("playlist"+(i+1)+usuario)
    playlist = playlist.split(',')
    if (playlist != "null" && playlist != ""){

      $("#containerPlaylist").append(`
  <div class = "cancion">
  <div>
    
    <img class= "imagen" src="ej_images/playlist.png" alt="fallo" width="100" height="100">
    <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarplaylist('${i+1}')">
  </div>
  <div class = "descriptionArtist" onclick = dirigirPlaylist(${i+1})>${playlist[0]}</div>
  </div>
  
  `); 




    }
  }







  
  document.getElementById('divfotoperfil2').innerHTML= `
    <img id = "fotoperfil" src = ${foto} alt = "ic" heigt = 120; width = 100; onclick = menu()>
    `
  num = getCookieValue("seguidos" + usuario)

  if (num == ""){

    document.getElementById("containerSeguidos").innerHTML = ` <h1>"${usuario}" NO HA SEGUDIO A NADIE TODAVÍA </h1>`
    
  }
  
  let ca = document.cookie.split(';');
  name = usuario + "follow"
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
   

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
      
    }
    if (c=="usuario=!"){
      return
    }
    
    if (c.indexOf(name) == 0) {
      stringFinal = ""
      llegamosigual = false
      /*Buscamos la forma usuariofollowtarget en cookies, para ello iremos cookie a cookie y luego cogeremos 
      su valor final */
      for (let i = 0; i< c.length;i++){
        if (llegamosigual == true){
          stringFinal = stringFinal + c[i]
        }
        if (c[i] == "="){
          llegamosigual = true
          

        }
        
      }
      if (stringFinal != "!"){
      foto = getCookieValue("foto" +stringFinal )

     
      url = foto
      $("#containerSeguidos").append(`
      <div class = "cancion">
 
      <div>
        
        <img class= "imagen" src=${url} alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarSegudido('${stringFinal}')">
      </div>
    <div class = "descriptionArtist" onclick = "visitarPerfil ('${stringFinal}')">${stringFinal}</div>
    </div>
      
      `); 
    }
    

  }
}

  name = "usuario=";
  usuario = getCookieValue("perfil");
  foto = getCookieValue("foto" + usuario);
 
  name = getCookieValue("perfil")

  megusta1 = getCookieValue("megusta1"+name)
  megusta2 = getCookieValue("megusta2"+name)
  megusta3 = getCookieValue("megusta3"+name)
  megusta4 = getCookieValue("megusta4"+name)
  megusta5 = getCookieValue("megusta5"+name)
  megusta6 = getCookieValue("megusta6"+name)
  megusta7 = getCookieValue("megusta7"+name)
  megusta8 = getCookieValue("megusta8"+name)
  megusta9 = getCookieValue("megusta9"+name)
  megusta10 = getCookieValue("megusta10"+name)

  if (megusta1 != "ok" && megusta2 != "ok" && megusta3 != "ok" && megusta4 != "ok" && megusta5 != "ok" &&
  megusta6 != "ok" && megusta7 != "ok" && megusta8 != "ok" && megusta9 != "ok" && megusta10 != "ok" ){

    document.getElementById("containerMegusta").innerHTML = ` <h1>"${usuario}"NO TIENE CANCIONES MARCADAS COMO ME GUSTA </h1>`
  }
  if (megusta1 == "ok"){
    
    $("#containerMegusta").append(`
    <div class = "cancion" >
      <div>
        <img id = pause5 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica6() class= "imagen" id = "imagen6" src="ej_images/imagin.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('1')" >
      </div>
         
        
    <div class = "description">  
        <audio controls id ="audio1">
        <source src="ej_images/hey.mp3" type="audio/mpeg">
        </audio>
        Imagine dragons - Hey</div>
        
    </div>
    `);
  }
   
  if (megusta2 == "ok"){
   
    $("#containerMegusta").append(`
    <div class = "cancion" >
      <div >
        <img id = pause6 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica7() class= "imagen" id = "imagen7" src="ej_images/estrellafoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('2')" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio2">
        <source src="ej_images/estrella.mp3" type="audio/mpeg">
        </audio>
        Nena Daconte - En que Estrella estará</div>
    </div>
    `);
  }
   
    if (megusta3 == "ok"){
   
      $("#containerMegusta").append(`
      <div class = "cancion" >
      <div >
        <img id = pause7 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica8() class= "imagen" id = "imagen8" src="ej_images/heart.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('3')" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio3">
        <source src="ej_images/breakmusica.mp3" type="audio/mpeg">
        </audio>
        Taio Cruz - Break Your Heart</div>
    </div>
      `);
      
    }
      if (megusta4 == "ok"){
   
        $("#containerMegusta").append(`
        <div class = "cancion" >
      <div >
        <img id = pause8 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica9() class= "imagen" id = "imagen9" src="ej_images/payphone.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('4')" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio4">
        <source src="ej_images/payphonemusica.mp3" type="audio/mpeg">
        </audio>
        Maroon 5 - Payphone</div>
    </div>
        `); 

  }
  if (megusta5 == "ok"){
   
    $("#containerMegusta").append(`
    <div class = "cancion" >
      <div >
        <img id = pause9 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica10() class= "imagen" id = "imagen10" src="ej_images/fito.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('5')" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio5">
        <source src="ej_images/soldadito.mp3" type="audio/mpeg">
        </audio>
        Fito y Fitipaldis - Soldadito Marinero</div>
  </div>
    `); 

}
if (megusta6 == "ok"){
   
  $("#containerMegusta").append(`
  <div class = "cancion" >
      <div>
        <img id = pause10 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica11() class= "imagen" id = "imagen11" src="ej_images/givenchyfoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('6')" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio6">
        <source src="ej_images/givenchy.mp3" type="audio/mpeg">
        </audio>
        Duki - Givenchy</div>
    </div>
  `); 

}
if (megusta7 == "ok"){
   
  $("#containerMegusta").append(`
  <div class = "cancion" >
  <div >
    <img id = pause11 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
    <img onclick=musica12() class= "imagen" id = "imagen12" src="ej_images/x.jpg"  alt="fallo" width="100" height="100">
    <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('7')" >
  </div>
     
    
  <div class = "description">  
    <audio controls id ="audio7">
    <source src="ej_images/moonlight.mp3" type="audio/mpeg">
    </audio>
    XXXTENTACION - Moonlight</div>
</div>
  `); 

}
if (megusta8 == "ok"){
   
  $("#containerMegusta").append(`
  <div class = "cancion" >
      <div >
        <img id = pause12 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica13() class= "imagen" id = "imagen13" src="ej_images/danza.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('8')" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio8">
        <source src="ej_images/danza.mp3" type="audio/mpeg">
        </audio>
        Don Omar - Danza Kuduro</div>
    </div>
  `); 

}
if (megusta9 == "ok"){
   
  $("#containerMegusta").append(`
  <div class = "cancion" >
      <div >
        <img id = pause13 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica14() class= "imagen" id = "imagen14" src="ej_images/thisisthelife.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('9')" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio9">
        <source src="ej_images/life.mp3" type="audio/mpeg">
        </audio>
        Amy Macdonald - This Is The Life</div>
    </div>
  `); 

}
if (megusta10 == "ok"){
   
  $("#containerMegusta").append(`
  <div class = "cancion" >
      <div >
        <img id = pause14 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica15() class= "imagen" id = "imagen15" src="ej_images/thrillerfoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/cross.png"  alt="fallo" width="10" height="10" onclick="borrarMG('10')" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio10">
        <source src="ej_images/thriller.mp3" type="audio/mpeg">
        </audio>
      Michael Jackson - Thriller</div>
  </div>
  `); 

}
//Actualizamos la parte de canciones mas escuchadas
hidesandshows()

usuario = getCookieValue("perfil")
lista = []
listaArtistas = []
/*Como en las cookies nos viene como una cadena de 1's las veces que se ha reproducido la cancion lo 
convertimos a enteros */
for (let i= 0; i< canciones.length;i++){
  cookie = getCookieValue(usuario+canciones[i])
  if (cookie == ""){
    lista.push(0)
  }
  else{
    lista.push(cookie.length)
  }
  
}
for (let i= 0; i< artistas.length;i++){
  cookie = getCookieValue(usuario+artistas[i])
  if (cookie == ""){
    listaArtistas.push(0)
  }
  else{
    listaArtistas.push(cookie.length)
  }
  
}

//Ordenamos la lista y creamos una lista de indices
indices = []
indicesArtistas = []
/*Creamos una lista con los indices de las canciones mas reproducidas*/
for (let i= 0; i< canciones.length;i++){
  
  maxLista = Math.max.apply(null,lista)
  
  indiceElemento = lista.indexOf(maxLista)
 
  indices.push(indiceElemento)

  lista[indiceElemento] = -1
 

}
for (let i= 0; i< artistas.length;i++){
  
  maxLista = Math.max.apply(null,listaArtistas)
  
  indiceElemento = listaArtistas.indexOf(maxLista)
 
  indicesArtistas.push(indiceElemento)

  listaArtistas[indiceElemento] = -1
 

}



//Escogemos finalmente las canciones mas escuchadas y artistas, en caso de que sea no se haya escuchado ninguna se escogen las 5 primeras

for (let i= 0; i< 5;i++){
  
    if (indices[i] == 0){
     
      $("#containerEscuchadas").append(`
      <div class = "cancion" >
      <div>
        <img id = pause5 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica6() class= "imagen" id = "imagen6" src="ej_images/imagin.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta1()" >
        </div>
         
        
    <div class = "description">  
        <audio controls id ="audio1">
        <source src="ej_images/hey.mp3" type="audio/mpeg">
        </audio>
        Imagine dragons - Hey</div>
        
    </div>
      `);
    }
    if (indices[i] == 1){
       
      $("#containerEscuchadas").append(`
      <div class = "cancion" >
      <div >
        <img id = pause6 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica7() class= "imagen" id = "imagen7" src="ej_images/estrellafoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta2()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio2">
        <source src="ej_images/estrella.mp3" type="audio/mpeg">
        </audio>
        Nena Daconte - En que Estrella estará</div>
    </div>
      `);
    }
     
      if (indices[i] == 2){
     
        $("#containerEscuchadas").append(`
        <div class = "cancion" >
      <div >
        <img id = pause7 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica8() class= "imagen" id = "imagen8" src="ej_images/heart.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta3()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio3">
        <source src="ej_images/breakmusica.mp3" type="audio/mpeg">
        </audio>
        Taio Cruz - Break Your Heart</div>
    </div>
        `);
        
      }
        if (indices[i] == 3){
     
          $("#containerEscuchadas").append(`
          <div class = "cancion" >
      <div >
        <img id = pause8 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica9() class= "imagen" id = "imagen9" src="ej_images/payphone.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta4()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio4">
        <source src="ej_images/payphonemusica.mp3" type="audio/mpeg">
        </audio>
        Maroon 5 - Payphone</div>
    </div>
          `); 
  
    }
    if (indices[i] == 4){
     
      $("#containerEscuchadas").append(`
      <div class = "cancion" >
      <div >
        <img id = pause9 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica10() class= "imagen" id = "imagen10" src="ej_images/fito.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta5()" >

      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio5">
        <source src="ej_images/soldadito.mp3" type="audio/mpeg">
        </audio>
        Fito y Fitipaldis - Soldadito Marinero</div>
  </div>
      `); 
  
  }
  if (indices[i] == 5){
     
    $("#containerEscuchadas").append(`
    <div class = "cancion" >
      <div>
        <img id = pause10 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica11() class= "imagen" id = "imagen11" src="ej_images/givenchyfoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta6()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio6">
        <source src="ej_images/givenchy.mp3" type="audio/mpeg">
        </audio>
        Duki - Givenchy</div>
    </div>
    `); 
  
  }
  if (indices[i] == 6){
     
    $("#containerEscuchadas").append(`
    <div class = "cancion" >
      <div >
        <img id = pause11 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica12() class= "imagen" id = "imagen12" src="ej_images/x.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta7()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio7">
        <source src="ej_images/moonlight.mp3" type="audio/mpeg">
        </audio>
        XXXTENTACION - Moonlight</div>
    </div>
    `); 
  
  }
  if (indices[i] == 7){
     
    $("#containerEscuchadas").append(`
    <div class = "cancion" >
      <div >
        <img id = pause12 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica13() class= "imagen" id = "imagen13" src="ej_images/danza.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta8()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio8">
        <source src="ej_images/danza.mp3" type="audio/mpeg">
        </audio>
        Don Omar - Danza Kuduro</div>
    </div>
    `); 
  
  }
  if (indices[i] == 8){
     
    $("#containerEscuchadas").append(`
    <div class = "cancion" >
      <div >
        <img id = pause13 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica14() class= "imagen" id = "imagen14" src="ej_images/thisisthelife.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta9()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio9">
        <source src="ej_images/life.mp3" type="audio/mpeg">
        </audio>
        Amy Macdonald - This Is The Life</div>
    </div>
    `); 
  
  }
  if (indices[i] == 9){
     
    $("#containerEscuchadas").append(`
    <div class = "cancion" >
      <div >
        <img id = pause14 src="ej_images/pause.png" alt="fallo" width="100" height="100" onclick = stop()>
        <img onclick=musica15() class= "imagen" id = "imagen15" src="ej_images/thrillerfoto.jpg"  alt="fallo" width="100" height="100">
        <img id = "corazon"  src="ej_images/61046.png"  alt="fallo" width="10" height="10" onclick="megusta10()" >
      </div>
         
        
      <div class = "description">  
        <audio controls id ="audio10">
        <source src="ej_images/thriller.mp3" type="audio/mpeg">
        </audio>
      Michael Jackson - Thriller</div>
  </div>
    `); 
  
  }


}

for (let i= 0; i< 5;i++){

  if (indicesArtistas[i] == 0){
    
    $("#containerArtistas").append(`
    <div class = "cancion">
    <div>
      
      <img class= "imagen" src="ej_images/dragons.jpg"  alt="fallo" width="100" height="100">
     
    </div>
    <div class = "descriptionArtist"onclick = "goArtista('Imagine Dragons')">Imagine Dragons</div>
      
  </div>
    
    
    `);
  }
  if (indicesArtistas[i] == 1){
     
    $("#containerArtistas").append(`
    <div class = "cancion">
    <div>
      
      <img class= "imagen" src="ej_images/nenaartista.jpg" alt="fallo" width="100" height="100">
      
    </div>
    <div class = "descriptionArtist"onclick = "goArtista('Nena Daconte')">Nena Daconte</div>
  </div>
    
    
    `);
  }
   
    if (indicesArtistas[i] == 2){
   
      $("#containerArtistas").append(`
      <div class = "cancion">
      <div>
        
        <img class= "imagen" src="ej_images/taioartist.jpeg" alt="fallo" width="100" height="100">
      </div>
        <div class = "descriptionArtist"onclick = "goArtista('TAIO')">Taio Cruz</div>
    </div>
      
      `);
      
    }
      if (indicesArtistas[i] == 3){
   
        $("#containerArtistas").append(`
        <div class = "cancion">
      <div>
        
        <img class= "imagen" src="ej_images/maroon5.jpg" alt="fallo" width="100" height="100">
      
      </div>
      <div class = "descriptionArtist"onclick = "goArtista('MAROON 5')">Maroon 5</div>
    </div>
        
        `); 

  }
  if (indicesArtistas[i] == 4){
   
    $("#containerArtistas").append(`
    <div class = "cancion">
    <div>
      
      <img class= "imagen" src="ej_images/fitoartist.jpg" alt="fallo" width="100" height="100">
      
    </div>
    <div class = "descriptionArtist"onclick = "goArtista('FITO & FITIPALDIS')">Fito y Fitipaldis</div>
</div>
    
    `); 

}
if (indicesArtistas[i] == 5){
   
  $("#containerArtistas").append(`
  <div class = "cancion">
  <div>
    
    <img class= "imagen" src="ej_images/dukiartist.webp" alt="fallo" width="100" height="100">
   
  </div>
  <div class = "descriptionArtist" onclick = "goArtista('DUKI')">Duki</div>
</div>
  
  `); 

}
if (indicesArtistas[i] == 6){
   
  $("#containerArtistas").append(`
  <div class = "cancion">
  <div>
  
    <img class= "imagen" src="ej_images/xartista.jpg" alt="fallo" width="100" height="100">
   
  </div>
  <div class = "descriptionArtist" onclick = "goArtista('XXXTENTACION')">XXXTENTACION</div>
</div>
  
  `); 

}
if (indicesArtistas[i] == 7){
   
  $("#containerArtistas").append(`
  <div class = "cancion" >
    <div>
      <img class= "imagen" id = "imagen11" src="ej_images/dono.jpg" alt="fallo" width="100" height="100">
    </div>
      <div class = "descriptionArtist" onclick = "goArtista('DON OMAR')">Don Omar</div>
  </div>
  `); 

}
if (indicesArtistas[i] == 8){
   
  $("#containerArtistas").append(`
  <div class = "cancion">
  <div>
    <img class= "imagen" src="ej_images/amy.jpg" alt="fallo" width="100" height="100">
    
  </div>
  <div class = "descriptionArtist"onclick = "goArtista('AMY Macdonald')">Amy Macdonald</div>
</div>
  
  `); 

}
if (indicesArtistas[i] == 9){
   
  $("#containerArtistas").append(`
  <div class = "cancion">
  <div>
    <img class= "imagen" src="ej_images/iñaki.webp" alt="fallo" width="100" height="100">
  </div>
    <div class = "descriptionArtist" onclick = "goArtista('MICHAEL JACKSON')" >Michael Jackson</div>
</div>
  
  `); 

}
}
hidesandshows()
perfil = getCookieValue("perfil")
setCookie("perfilaux",perfil)
setCookie("perfil",usuario)
  return "";
  
}



function borrarSegudido (seguido){
  usuario = getCookieValue("usuario")
  perfil = getCookieValue("perfil");
  auxperf = getCookieValue("perfilaux");
  if (usuario != perfil || usuario != auxperf){
    return
  }
  setCookie(usuario + "follow" + seguido,"!")
  num = getCookieValue("seguidos" + usuario)
  num = num.substring(0,num.length-1)
  setCookie("seguidos" + usuario,num)
  location.reload()

}
function cookiePerfil(){
 
  user = getCookieValue("usuario")
  setCookie("perfil",usuario)

}
function visitarPerfil(perfil){
  setCookie("perfil",perfil)
  location.reload()
}

//Contadores

const dia_lanzamiento = new Date('12/24/2022 0:00 AM');
const dias = document.querySelector('span#days');
const horas = document.querySelector('span#hours');
const minutos = document.querySelector('span#minutes');
const segundos = document.querySelector('span#seconds');

const dia_lanzamiento2 = new Date('01/01/2023 10:30 AM');
const dias2 = document.querySelector('span#days2');
const horas2 = document.querySelector('span#hours2');
const minutos2 = document.querySelector('span#minutes2');
const segundos2 = document.querySelector('span#seconds2');

const dia_lanzamiento3 = new Date('01/01/2023 08:15 AM');
const dias3 = document.querySelector('span#days3');
const horas3 = document.querySelector('span#hours3');
const minutos3 = document.querySelector('span#minutes3');
const segundos3 = document.querySelector('span#seconds3');

const dia_lanzamiento4 = new Date('02/01/2023 08:45 AM');
const dias4 = document.querySelector('span#days4');
const horas4 = document.querySelector('span#hours4');
const minutos4 = document.querySelector('span#minutes4');
const segundos4 = document.querySelector('span#seconds4');

const milisegundos_segundos = 1000;
const milisegundos_minutos = milisegundos_segundos * 60;
const milisegundos_horas = milisegundos_minutos * 60;
const milisegundos_dias = milisegundos_horas * 24


function updateContador() {
    const now = new Date()

    const intervalo_tiempo = dia_lanzamiento - now;
    const dias_restantes = Math.floor(intervalo_tiempo / milisegundos_dias);
    const horas_restantes = Math.floor((intervalo_tiempo % milisegundos_dias) / milisegundos_horas);
    const minutos_restantes = Math.floor((intervalo_tiempo % milisegundos_horas) / milisegundos_minutos);
    const segundos_restantes = Math.floor((intervalo_tiempo % milisegundos_minutos) / milisegundos_segundos);

    const intervalo_tiempo2 = dia_lanzamiento2 - now;
    const dias_restantes2 = Math.floor(intervalo_tiempo2 / milisegundos_dias);
    const horas_restantes2 = Math.floor((intervalo_tiempo2 % milisegundos_dias) / milisegundos_horas);
    const minutos_restantes2 = Math.floor((intervalo_tiempo2 % milisegundos_horas) / milisegundos_minutos);
    const segundos_restantes2 = Math.floor((intervalo_tiempo2 % milisegundos_minutos) / milisegundos_segundos);

    const intervalo_tiempo3 = dia_lanzamiento3 - now;
    const dias_restantes3 = Math.floor(intervalo_tiempo3 / milisegundos_dias);
    const horas_restantes3 = Math.floor((intervalo_tiempo3 % milisegundos_dias) / milisegundos_horas);
    const minutos_restantes3 = Math.floor((intervalo_tiempo3 % milisegundos_horas) / milisegundos_minutos);
    const segundos_restantes3 = Math.floor((intervalo_tiempo3 % milisegundos_minutos) / milisegundos_segundos);

    const intervalo_tiempo4 = dia_lanzamiento4 - now;
    const dias_restantes4 = Math.floor(intervalo_tiempo4 / milisegundos_dias);
    const horas_restantes4 = Math.floor((intervalo_tiempo4 % milisegundos_dias) / milisegundos_horas);
    const minutos_restantes4 = Math.floor((intervalo_tiempo4 % milisegundos_horas) / milisegundos_minutos);
    const segundos_restantes4 = Math.floor((intervalo_tiempo4 % milisegundos_minutos) / milisegundos_segundos);
    
    dias.textContent = dias_restantes;
    horas.textContent = horas_restantes;
    minutos.textContent = minutos_restantes;
    segundos.textContent = segundos_restantes;

    dias2.textContent = dias_restantes2;
    horas2.textContent = horas_restantes2;
    minutos2.textContent = minutos_restantes2;
    segundos2.textContent = segundos_restantes2;

    dias3.textContent = dias_restantes3;
    horas3.textContent = horas_restantes3;
    minutos3.textContent = minutos_restantes3;
    segundos3.textContent = segundos_restantes3;

    dias4.textContent = dias_restantes4;
    horas4.textContent = horas_restantes4;
    minutos4.textContent = minutos_restantes4;
    segundos4.textContent = segundos_restantes4;

}
updateContador();
// Refresca cada segundo
setInterval(updateContador, milisegundos_segundos);




