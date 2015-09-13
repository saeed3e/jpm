<?php
// API access key from Google API's Console
define( 'API_ACCESS_KEY', 'AIzaSyD-skpImNEgpye3Jf_FSbTwg9t6wj_tX0Y' );

// echo($_GET['regId']);
$registrationIds = array($_GET['regId']);


// prep the bundle
$msg = array
(
    'message'       => 'Hello guys',
    'title'         => 'JPM',
    'subtitle'      => 'You have got apply',
    'tickerText'    => 'Ticker text here...Ticker text here...Ticker text here',
    'vibrate'   => 1,
    'sound'     => 1
);

$fields = array
(
    'registration_ids'  => $registrationIds,
    'data'              => $msg
);

$headers = array
(
    'Authorization: key=' . API_ACCESS_KEY,
    'Content-Type: application/json',
);

$ch = curl_init();
curl_setopt( $ch,CURLOPT_URL, 'https://gcm-http.googleapis.com/gcm/send' );
curl_setopt( $ch,CURLOPT_POST, true );
curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
$result = curl_exec($ch );
curl_close( $ch );

echo $result;

?>