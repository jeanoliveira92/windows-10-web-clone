var currentTime = 0;
var currentDate = 0;
var currentFullDate = "";
var dayName = new Array("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
var monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")

$(document).ready(() => {
    // RELOGIO
    const startTime = () => {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();

        var curDay = today.getDate();
        var curMonth = today.getMonth() + 1;
        var curYear = today.getFullYear();

        currentTime = `${h < 10 ? 0 : ''}${h}:${m < 10 ? 0 : ''}${m}:${s < 10 ? 0 : ''}${s}`;
        currentDate = `${curDay < 10 ? 0 : ''}${curDay}/${curMonth < 10 ? 0 : ''}${curMonth}/${curYear}`;
        currentFullDate = `${dayName[today.getDay()]}, ${curDay < 10 ? 0 : ''}${curDay} de ${monName[curMonth]} de ${curYear}`;

        document.getElementById('taskbarclock').innerHTML = `${currentTime.substr(0, 5)}<br>${currentDate}`;

        if ($('.clock-menu').hasClass('open')) {
            document.getElementById('fullclock').innerHTML = `<h1>${currentTime}</h1><h8>${currentFullDate}</h8>`;
        }

        // LOOP INFINITO PARA CONTAR O TEMPO
        setTimeout(startTime, 500);
    };

    // INICIA O CONTADOR
    startTime();

    // FECHAR A TELA DE LOADING INICIAL
    setTimeout(() => {
        $(".full").hide()
    }, 2000);
});

// START MENU
$("#fa-windows").click(() => {
    if ($('.start-menu').hasClass('open')) {
        $('.start-menu').removeClass('open');

    } else {
        $(".start-menu").addClass('open');

        $(".start-menu").focusout(() => {
            $('.start-menu').removeClass('open');
        });

        $(".start-menu").mouseout(() => {
            $('.start-menu').removeClass('open');
        });
    }
});

// MENU DO RELOGIO
const clockmenu = () => {
    if ($('.clock-menu').hasClass('open')) {
        $('.clock-menu').removeClass('open');

    } else {
        $(".clock-menu").addClass('open');

        $(".clock-menu").focusout(() => {
            $('.clock-menu').removeClass('open');
        });
    }
};



// DEFINIR OS OBJETOS QUE PODEM SE MOVER NA TELA 
SET_DHTML(CURSOR_MOVE, RESIZABLE, NO_ALT, SCROLL, "reltab", "computador", "user", "lixeira");