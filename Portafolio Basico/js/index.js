let open = false;

const menu = () =>{ 
    const barra = document.getElementById("menu")
    if(open){
        console.log('again')
        barra.style.transform = 'rotate(180deg)'
        open = false
    }else{
        console.log('clicked')
        open = true
        barra.style.transform = 'rotate(90deg)'
    }
}