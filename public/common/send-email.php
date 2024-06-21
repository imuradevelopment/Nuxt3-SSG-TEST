<?php
header('Content-Type: application/json');

// フォームデータを取得
$data = json_decode(file_get_contents('php://input'), true);

// バリデーション
$errors = [];
if (empty($data['lastName'])) {
    $errors[] = '氏名を入力してください';
} elseif (strlen($data['lastName']) > 60) {
    $errors[] = '氏名は60文字以内で入力してください';
}

if (strlen($data['kanaName']) > 180) {
    $errors[] = '氏名（フリガナ）は180文字以内で入力してください';
} elseif (!empty($data['kanaName']) && !preg_match('/^[ァ-ヶー]+$/u', $data['kanaName'])) {
    $errors[] = '氏名（フリガナ）はカタカナのみで入力してください';
}

if (empty($data['email'])) {
    $errors[] = 'メールアドレスを入力してください';
} elseif (strlen($data['email']) > 254) {
    $errors[] = 'メールアドレスは254文字以内で入力してください';
} elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'メールアドレスは正しい形式で入力してください';
}

if (empty($data['phone'])) {
    $errors[] = '電話番号を入力してください';
} elseif (strlen($data['phone']) > 13) {
    $errors[] = '電話番号は13文字以内で入力してください';
} elseif (!preg_match('/^\d{2,4}-\d{2,4}-\d{4}$/', $data['phone'])) {
    $errors[] = '電話番号は正しい形式で入力してください';
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
$message = "氏名: {$data['lastName']}\n";
$message .= "氏名（フリガナ）: {$data['kanaName']}\n";
$message .= "メールアドレス: {$data['email']}\n";
$message .= "電話番号: {$data['phone']}\n";
$message .= "お問い合わせ内容:\n{$data['inquiryContent']}\n";
$headers = "From: noreply@example.com";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'errors' => ['メール送信に失敗しました']]);
}
?>
