'use strict';



self.addEventListener('push', function(event) {
    /*console.log('Received a push message', event);*/

    var title = 'JPM Notification';
    var body = 'A New Apply Notification';
    var subtitle = 'www.naukri.com';
    var icon = './img/icon-jpm-192.png';
    var tag = 'simple-push-demo-notification-tag';
    
    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
            tag: tag,
            subtitle: subtitle
        })
    );
});


/*self.addEventListener('notificationclick', function(event) {
    console.log('On notification click: ', event.notification.tag);
    // Android doesn’t close the notification when you click on it
    // See: http://crbug.com/463146
    event.notification.close();

    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(clients.matchAll({
        type: "window"
    }).then(function(clientList) {
        if (clients.openWindow)
            return clients.openWindow('http://localhost/hackathon/#/jobPosting');
    }));

});
*/