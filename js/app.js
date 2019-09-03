

if ('serviceWorker' in navigator) navigator.serviceWorker.register('./js/sw.js');

var button = document.getElementById("notifications");
button.addEventListener('click', (e) => {
    Notification.requestPermission().then((result) => {
        if (result === 'granted') randomNotification();
    });
});

var randomNotification = () => {
    var randomItem = Math.floor(Math.random() * games.length);
    var notifTitle = games[randomItem].name;
    var notifBody = 'Created by ' + games[randomItem].author + '.';
    var notifImg = 'data/img/' + games[randomItem].slug + '.jpg';
    var options = {
        body: notifBody,
        icon: notifImg
    }
    var notif = new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
}