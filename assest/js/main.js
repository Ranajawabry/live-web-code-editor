const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const result = document.getElementsByTagName('iframe')[0];

console.log(result.contentWindow.document)

html.value =
`<div>

</div>
`
html.value =
`<script>

</script>
`

html.onkeydown =()=>{

    showResult();

}
css.onkeyup = ()=>{

    showResult();

}
js.addEventListener('keyup',()=>{
    console.log(js.value);
    showResult();
})



const showResult = ()=>{
    const htmlCode = html.value;
    const cssCode = '<style>'+css.value+'</style>';
    const jsCode = js.value ;

    result.contentWindow.document.open();
    result.contentWindow.document.write(htmlCode + cssCode + jsCode);
    result.contentWindow.document.close();
   
}
    

const show=(x)=>{
    html.style.display='none';
    css.style.display='none';
    js.style.display='none';
    result.style.display='none';
    document.getElementById(x).style.display='block';
}


if(window.innerWidth <= 991){
    document.getElementById("html").style.display='block';
    document.getElementById("css").style.display = "none";
     document.getElementById("js").style.display = "none";
     document.getElementById("result").style.display = "none";
    

}
if(window.innerWidth > 991){
    document.getElementById("html").style.display='block';
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
    
    
}

const showArea= ()=>{
    console.log('kkkk');
    if(window.innerWidth <= 991){
        document.getElementById("html").style.display='block';
        document.getElementById("css").style.display = "none";
         document.getElementById("js").style.display = "none";
         document.getElementById("result").style.display = "none";
        

    }
    if(window.innerWidth > 991){
        document.getElementById("html").style.display='block';
        document.getElementById("css").style.display = "block";
        document.getElementById("js").style.display = "block";
        document.getElementById("result").style.display = "block";
        
        
    }

}
 



 











   


