//Função que muda tem light mode para dark mode e vice versa
function mudarTema(){
    //Aqui pego o body e a classe dele para poder comparar
    let layout = document.getElementById('tema');
    let temaLayout = layout.getAttribute('class');
// Aqui faço a comparação e mudo no if para dark mode e no else para light mode
    if(temaLayout == "body"){
        layout.classList.add('dark')

        //Mudando o ícone para Dark
        let icone = document.getElementById('icone');
        icone.classList.remove('mdi-weather-night');
        icone.classList.add('mdi-white-balance-sunny');

        //Mudando o header para Dark
        let header = document.getElementById('header');
        header.classList.add('dark');
    }else{
        //Removendo modo Dark do body
        layout.classList.remove('dark')

        //Alternando o botão do Dark Mode
        icone.classList.remove('mdi-white-balance-sunny');
        icone.classList.add('mdi-weather-night');

        //Removendo modo Dark do header
        header.classList.remove('dark');
    }

}

//Seção do Menu responsivo

function abrirMenu(){
    //Pega o id do body para remover e deixar o menu sem barra de rolagem
    const content = document.getElementById('mainID')
    //Pegando o menu e a classe para comparar
    const menu = document.getElementById('menu');
    const classMenu = menu.getAttribute('class');

    menu.addEventListener('click',function(event){
        if(classMenu == 'menu clicado'){
            menu.classList.remove('clicado');
            content.classList.remove('hide')

        }
    })

    //Comparando a classe com a classe atual
    if(classMenu == 'menu'){
        menu.classList.add('clicado');
        content.classList.add('hide')
    }else{
        menu.classList.remove('clicado');
        content.classList.remove('hide')

    }
}

