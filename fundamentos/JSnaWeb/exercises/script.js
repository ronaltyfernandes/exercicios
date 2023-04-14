const header = document.getElementById('header-container');
header.style.backgroundColor = '#880808';

const urgenteEimportante = document.getElementById("urgente-e-importante");
urgenteEimportante.innerHTML = "exemplo de texto dentro do html";   

const urgenteMasNaoimportante = document.querySelector("#urgenteEnaoImporntante");
let novoelemento = document.createElement('div');
urgenteMasNaoimportante.innerHTML = "essa são as ações que são urgentes, mas que não são imporntantes para a nossa vida, os famosos incendios"