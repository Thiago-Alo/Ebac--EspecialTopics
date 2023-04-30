function getNotifications(){
    if(!("Notification" in window)){
        console.log("Navegador não suporta Notificações");
    }else if(Notification.permission === "granted"){
        const notify = new Notification('Bem vindo de volta!');
    } else if (Notification.permission !== "denied"){
        Notification.requestPermission(function(permission){
            if(permission === "granted"){
            const notify = new Notification('Bem vindo');

            }
        })
    }
}