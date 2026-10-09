<?php
// Relays the public, read-only Policies API over HTTPS.
// jivecam.live is served over HTTPS, so browsers block direct calls to the plain-HTTP API (mixed content).
//   /policy-proxy.php              -> GET /api/policies
//   /policy-proxy.php?slug=<slug>  -> GET /api/policies/<slug>
// Remove this file once the API is reachable over HTTPS and point VITE_API_URL at it instead.

const API_BASE = 'http://13.201.80.158/api/policies';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => true, 'detail' => 'Method not allowed']);
    exit;
}

$url = API_BASE;
if (isset($_GET['slug'])) {
    $slug = (string) $_GET['slug'];
    // Same rule as the API's PolicyCreate schema; also prevents requesting any other path.
    if (strlen($slug) > 100 || !preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $slug)) {
        http_response_code(404);
        echo json_encode(['error' => true, 'detail' => 'Policy not found']);
        exit;
    }
    $url .= '/' . $slug;
}

$status = 502;
$body = false;

if (function_exists('curl_init')) {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_HTTPHEADER => ['Accept: application/json'],
    ]);
    $body = curl_exec($ch);
    if ($body !== false) {
        $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    }
    curl_close($ch);
} else {
    $context = stream_context_create(['http' => ['timeout' => 15, 'ignore_errors' => true]]);
    $body = @file_get_contents($url, false, $context);
    if ($body !== false && isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $m)) {
        $status = (int) $m[1];
    }
}

if ($body === false) {
    http_response_code(502);
    echo json_encode(['error' => true, 'detail' => 'Policies service unavailable']);
    exit;
}

http_response_code($status);
if ($status === 200) {
    header('Cache-Control: public, max-age=60');
}
echo $body;
