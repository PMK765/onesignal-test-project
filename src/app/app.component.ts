import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onesig';
  ngOnInit() {
    const OneSignal = window['OneSignal'] || [];
    console.log('Init OneSignal');
    OneSignal.push(['init', {
      appId: '9409dc0d-f527-4e7f-a2c5-f0d7011c943f',
      autoRegister: false,
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: false
      }
    }]);
    console.log('OneSignal Initialized');
    OneSignal.push(function() {
      console.log('Register For Push');
      OneSignal.push(['registerForPushNotifications']);
    });
    OneSignal.push(function() {
      // Occurs when the user's subscription changes to a new value.
      OneSignal.on('subscriptionChange', function(isSubscribed) {
        console.log('The user\'s subscription state is now:', isSubscribed);
        OneSignal.getUserId().then(function(userId) {
          console.log('User ID is', userId);
        });
      });
    });
    }
}

