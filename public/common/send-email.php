<?php
header('Content-Type: application/json');

// フォームデータを取得
$data = json_decode(file_get_contents('php://input'), true);

// バリデーション
$errors = [];
if (empty($data['name'])) {
    $errors[] = '名前を入力してください';
} elseif (strlen($data['name']) > 60) {
    $errors[] = '名前は60文字以内で入力してください';
}

if (empty($data['email'])) {
    $errors[] = 'メールアドレスを入力してください';
} elseif (strlen($data['email']) > 254) {
    $errors[] = 'メールアドレスは254文字以内で入力してください';
} elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'メールアドレスは正しい形式で入力してください';
}

if (empty($data['inquiryContent'])) {
    $errors[] = 'お問い合わせ内容を入力してください';
}

if (!empty($errors)) {
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// メール送信
$to = 'yutan030@gmail.com'; // 送信先のメールアドレス
$subject = 'お問い合わせフォームからのメッセージ';
$message = "名前: {$data['name']}\n";
$message .= "メールアドレス: {$data['email']}\n";
$message .= "お問い合わせ内容:\n{$data['inquiryContent']}\n";
$headers = "From: noreply@example.com";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'errors' => ['メール送信に失敗しました']]);
}
?>
