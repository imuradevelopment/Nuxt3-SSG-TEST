<template>
    <div>
        <main class="lower policy">
            <section class="kv kv--center">
                <h1 class="lower__ttl lower__ttl--w">個人情報保護方針</h1>
                <h2 class="lower__catch lower__catch--w"><span class="font-serif">Privacy Policy</span></h2>
            </section>
            <section class="wrap">
                <h3 class="lower__s-ttl">株式会社ベイル（以下、「当社」といいます。）は、個人情報の重要性を認識し、その保護を徹底するため、以下のとおり個人情報保護方針を定めます。</h3>
                <div class="policy-content">
                    <dl>
                        <dt>１．個人情報の取得、利用及び提供</dt>
                        <dd>当社は、個人情報の取得、利用及び提供において、適正にこれを行い、特定した利用目的の達成に必要な範囲を超えて取扱うことはありません。また、そのための措置を講じます。</dd>
                        <dt>２．個人情報の安全対策</dt>
                        <dd>当社は、個人情報の正確性及び安全性を確保するために、情報セキュリティ対策を実施し、個人情報への不正アクセス、個人情報の紛失、破壊、改ざん及び漏洩等の予防並びに是正に努めます。</dd>
                        <dt>３．法令、規範の遵守</dt>
                        <dd>当社は、個人情報の取扱いにおいて、個人情報の保護に関する法令及びその他の規範を遵守します。</dd>
                        <dt>４．個人情報保護マネジメントシステムの継続的改善</dt>
                        <dd>当社は、個人情報を適正に保護するために、個人情報保護マネジメントシステムを確立し、実施し、これを維持し、継続的に改善します。</dd>
                    </dl>
                </div>
            </section>
            <section class="sec wrap contact">
                <div class="contact-box">
                    <dl>
                        <dt>【個人情報に関するお問い合わせ先】</dt>
                        <dd>
                            <dl class="contact__info">
                                <dd>株式会社ベイル</dd>
                                <dd>個人情報保護管理者 管理部長</dd>
                                <dd>〒153-0043 東京都目黒区東山１－６－２ ＴＰＲ中目黒ビル７階</dd>
                                <dd>TEL : <a href="tel:0357255921">03-5725-5921</a></dd>
                                <dd>FAX : 03-5725-5922</dd>
                                <dd>E-Mail : <a href="mailto:privacy-v@vaile.co.jp">privacy-v@vaile.co.jp</a></dd>
                            </dl>
                        </dd>
                    </dl>
                </div>
            </section>
            <section class="sec wrap policy-table-area">
                <div class="policy-mark">
                    <a href="http://privacymark.jp/" target="_blank">
                        <img src="/image/footer.png" alt="">
                    </a>
                </div>
                <div class="policy-table">
                    <h4 class="table-ttl">（個人情報に関する苦情・問合せ窓口）</h4>
                    <table class="table">
                        <tr>
                            <th colspan="2" class="table__head">株式会社ベイル 個人情報保護管理者 管理部長</th>
                        </tr>
                        <tr>
                            <th class="table__head">電話</th>
                            <td class="table__detail"><span class="pc-i-on">TEL: 03-5725-5921</span><span
                                    class="sp-i-on">TEL: <a href="tel:0357255921">03-5725-5921</a></span></td>
                        </tr>
                        <tr>
                            <th class="table__head">FAX</th>
                            <td class="table__detail">FAX: 03-5725-5922</td>
                        </tr>
                        <tr>
                            <th class="table__head">メール</th>
                            <td class="table__detail"><a href="mailto:privacy-v@vaile.co.jp">privacy-v@vaile.co.jp</a></td>
                        </tr>
                    </table>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
</script>

<style>

body {
    font-family: 'Roboto', sans-serif;
    color: #333;
}

.header {
    background-color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
}

.logo img {
    height: 40px;
}

.toggle-menu {
    display: none;
}

.nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.nav li {
    margin: 0 15px;
}

.nav a {
    text-decoration: none;
    color: #333;
    font-weight: 700;
}

.lower {
    background-color: #f9f9f9;
    padding: 20px;
}

.kv {
    background: url('/img/common/kv-bg.jpg') no-repeat center center;
    background-size: cover;
    text-align: center;
    padding: 50px 0;
}

.lower__ttl {
    font-size: 2.5rem;
    color: #fff;
}

.lower__catch {
    font-size: 1.5rem;
    color: #fff;
}

.wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.policy-content dl {
    margin: 20px 0;
}

.policy-content dt {
    font-weight: bold;
    margin-top: 20px;
}

.policy-content dd {
    margin-left: 20px;
}

.contact-box {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    margin-top: 20px;
}

.policy-table-area {
    text-align: center;
    margin-top: 40px;
}

.policy-mark img {
    max-width: 100px;
}

.policy-table {
    margin-top: 20px;
    text-align: left;
}

.table {
    width: 100%;
    border-collapse: collapse;
}

.table th,
.table td {
    border: 1px solid #ddd;
    padding: 10px;
}

.footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    position: relative;
}

.footer__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer__inner .copy {
    margin: 0;
}

.footer__inner #pagetop {
    position: absolute;
    right: 20px;
    top: 20px;
}

.footer__inner #pagetop img {
    width: 30px;
    height: 30px;
}

.footer .policy {
    color: #fff;
    text-decoration: underline;
}
</style>
