function toggleMode() {
    const html = document.documentElement
    
    
    if (html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
        
   
    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')) {

        img.setAttribute("src", "./assets/avatar.png")
    } else {
        img.setAttribute("src", "./assets/avatar2.png")
       }

    }
        
//   faz o mesmo html.classList.toggle('light')