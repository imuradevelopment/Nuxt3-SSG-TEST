<?php
// CORSヘッダーを追加
// フロントエンドからのリクエストを許可するための設定
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// OPTIONSリクエストへの対応
// ブラウザからのプリフライトリクエストに応答する
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    echo "CORS preflight OK";
    exit;
}

// デバッグ情報を出力
// ログにリクエストメソッドとリクエストボディを記録する
error_log("Request method: " . $_SERVER['REQUEST_METHOD']);
error_log("Request body: " . file_get_contents('php://input'));

// フォームデータの取得
// JSON形式のリクエストボディをデコードして変数に格納する
$input = json_decode(file_get_contents('php://input'), true);
$companyName = isset($input['companyName']) ? $input['companyName'] : '未記入';
$lastName = $input['lastName'];
$kanaName = isset($input['kanaName']) ? $input['kanaName'] : '未記入';
$email = $input['email'];
$phone = isset($input['phone']) ? $input['phone'] : '未記入';
$inquiryType = $input['inquiryType'];
$employmentType = isset($input['employmentType']) ? $input['employmentType'] : '未記入';
$inquiryContent = $input['inquiryContent'];

// デバッグ情報を出力
// ログに取得したフォームデータを記録する
error_log("Company name: " . $companyName);
error_log("Last name: " . $lastName);
error_log("Kana name: " . $kanaName);
error_log("Email: " . $email);
error_log("Phone: " . $phone);
error_log("Inquiry type: " . $inquiryType);
error_log("Employment type: " . $employmentType);
error_log("Inquiry content: " . $inquiryContent);

// お問い合わせ区分に応じた送信先メールアドレスの設定
// お問い合わせの種類に応じて適切なメールアドレスに振り分ける
switch ($inquiryType) {
    case '個人情報に関するお問い合わせ':
        $to = 'privacy-v@vaile.co.jp';
        break;
    case '採用に関するお問い合わせ':
        $to = 'recruit-v@vaile.co.jp';
        break;
    default:
        $to = 'business-v@vaile.co.jp';
        break;
}

// メールの件名とヘッダーの設定
$subject = "お問い合わせフォームからのメッセージ";
$headers = "From: noreply@vaile.co.jp" . "\r\n" .
           "Reply-To: " . $email . "\r\n" .
           "Content-Type: text/plain; charset=UTF-8";

// メールの本文
// フォームの入力内容をメール本文にまとめる
$body = "会社名／学校名: $companyName\n";
$body .= "氏名: $lastName\n";
$body .= "氏名（フリガナ）: $kanaName\n";
$body .= "メールアドレス: $email\n";
$body .= "電話番号: $phone\n";
$body .= "お問い合わせ区分: $inquiryType\n";
if ($inquiryType === '採用に関するお問い合わせ') {
    $body .= "採用区分: $employmentType\n";
}
$body .= "お問い合わせ内容:\n$inquiryContent\n";

// デバッグ情報を出力
// ログに送信先、件名、本文を記録する
error_log("送信先: $to\n件名: $subject\n本文: $body\n");

// メール送信
// メール送信が成功したかどうかを確認し、HTTPステータスコードを設定する
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "メールが送信されました。";
} else {
    http_response_code(500);
    echo "メールの送信に失敗しました。";
}
?>
