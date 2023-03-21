var project = document.getElementById("project")
var sidemenu = document.getElementById("side-header")
var aboutus = document.getElementById("about-us")
var contact = document.getElementById("contact")
var header = document.getElementById("header")
var debuggeer = true
const ProjectClick = () =>{
    project.scrollIntoView({behavior:"smooth", block:"center", inline:"nearest"})
    if(debuggeer){
        sidemenu.style.display ='block'
        debuggeer=false
    }else{
        sidemenu.style.display = 'none'
        debuggeer=true
    }
}

const aboutusClick = () =>{
    aboutus.scrollIntoView({behavior:"smooth", block:"center"})
    if(debuggeer){
        sidemenu.style.display ='block'
        debuggeer=false
    }else{
        sidemenu.style.display = 'none'
        debuggeer=true
    }
}
const contactClick = () =>{
    contact.scrollIntoView({behavior:"smooth", block:'end'})
    if(debuggeer){
        sidemenu.style.display ='block'
        debuggeer=false
    }else{
        sidemenu.style.display = 'none'
        debuggeer=true
    }
}

const menuClick = (e) =>{
    if(debuggeer){
        sidemenu.style.display ='block'
        debuggeer=false
    }else{
        sidemenu.style.display = 'none'
        debuggeer=true
    }
}

const arrowClick = () =>{
    header.scrollIntoView({behavior:"smooth", block:"center"})
}