# react-native-webview-clearcache-bugreport
Filing a bug with react-native-webview

Instructions:
expo start
Press 'Load' button to make a HTTPS request to get the current time. The response has a 15 second max-age
Press 'Load' again quickly and see that the date does not change. This is the intended behavior, as it has successfully been cached.
Wait 15+ seconds and press 'Load' again and see the date does change. The cache successfully expired as greater than max-age

The bug:
Press 'Load' to make a fresh HTTPS request with the current time.
Press 'Clear Cache'
Press 'Load'
The date stays the same, as the cache has not been cleared.

Intended behavior is the cache is cleared.
