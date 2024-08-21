<template>
  <!-- お問い合わせセクション -->
  <section class="py-12 mb-6 flex flex-col justify-center items-center bg-cover bg-[url('/images/contact/001.png')]">
    <!-- お問い合わせセクションのタイトル -->
    <h1 id="contact01" class="linkScroll m-4 text-4xl font-bold text-white">お問い合わせ</h1>
    <div class="mr-10 text-lg font-bold text-white">Contact</div>
  </section>

  <!-- お問い合わせフォームセクション -->
  <section class="mb-4">
    <!-- フォームタイトル -->
    <div class="flex justify-center items-center">
      <div class="mb-4 w-4/6 flex justify-center items-center">
        <h2 class="linkScroll text-4xl font-bold">お問い合わせフォーム</h2>
      </div>
    </div>

    <!-- ステップインジケーター -->
    <el-steps class="mb-4" style="max-width: 1280px" :active="active" align-center>
      <el-step title="フォーム入力" />
      <el-step title="フォームの内容確認" />
      <el-step title="完了" />
    </el-steps>

    <!-- フォーム内容 -->
    <div class="flex justify-center items-center">
      <div class="w-4/6 flex justify-center items-center">
        <!-- ステップ1: フォーム入力 -->
        <form v-if="active == 1" class="mb-4 w-full">
          <div class="w-full flex flex-col">
            <!-- 会社名／学校名入力フィールド -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="companyName">
                会社名／学校名 <span class="bg-gray-500 text-white px-2 py-1 rounded">任意</span>
              </label>
              <input v-model="form.companyName"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="companyName" type="text" />
            </div>

            <!-- 氏名入力フィールド -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">
                氏名 <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
                <span v-if="errors.lastName" class="text-red-500 text-xs italic">{{ errors.lastName }}</span>
              </label>
              <input v-model="form.lastName" @blur="validateField('lastName')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName" type="text" required />
            </div>

            <!-- 氏名（フリガナ）入力フィールド -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="kanaName">
                氏名（フリガナ）
                <span v-if="errors.kanaName" class="text-red-500 text-xs italic">{{ errors.kanaName }}</span>
              </label>
              <input v-model="form.kanaName" @blur="validateField('kanaName')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="kanaName" type="text" />
            </div>

            <!-- メールアドレス入力フィールド -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                メールアドレス <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
                <span v-if="errors.email" class="text-red-500 text-xs italic">{{ errors.email }}</span>
              </label>
              <input v-model="form.email" @blur="validateField('email')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" required />
            </div>

            <!-- 電話番号入力フィールド -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                電話番号（ハイフン無しで入力） <span class="bg-gray-500 text-white px-2 py-1 rounded">任意</span>
                <span v-if="optionalErrors.phone" class="text-red-500 text-xs italic">{{ optionalErrors.phone }}</span>
              </label>
              <input v-model="form.phone" @blur="validateField('phone')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="tel" />
            </div>

            <!-- お問い合わせ区分選択フィールド -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="inquiryType">
                お問い合わせ区分 <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
                <span v-if="errors.inquiryType" class="text-red-500 text-xs italic">{{ errors.inquiryType }}</span>
              </label>
              <select v-model="form.inquiryType" @change="handleInquiryTypeChange"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="inquiryType" required>
                <option value="" disabled>選択してください</option>
                <option value="個人情報に関するお問い合わせ">個人情報に関するお問い合わせ</option>
                <option value="採用に関するお問い合わせ">採用に関するお問い合わせ</option>
                <option value="その他">その他</option>
              </select>
            </div>

            <!-- 採用区分選択フィールド（採用に関するお問い合わせの場合のみ表示） -->
            <div class="mb-4" v-if="form.inquiryType === '採用に関するお問い合わせ'">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="employmentType">
                採用区分 <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
                <span v-if="errors.employmentType" class="text-red-500 text-xs italic">{{ errors.employmentType
                  }}</span>
              </label>
              <select v-model="form.employmentType" @change="validateField('employmentType')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employmentType" required>
                <option value="" disabled selected>選択してください</option>
                <option value="新卒採用">新卒採用</option>
                <option value="キャリア採用">キャリア採用</option>
                <option value="契約社員採用">契約社員採用</option>
              </select>
            </div>

            <!-- お問い合わせ内容入力フィールド -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="inquiryContent">
                お問い合わせ内容 <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
                <span v-if="errors.inquiryContent" class="text-red-500 text-xs italic">{{ errors.inquiryContent
                  }}</span>
              </label>
              <textarea v-model="form.inquiryContent" @blur="validateField('inquiryContent')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="inquiryContent" required></textarea>
            </div>

            <!-- 同意チェックボックス -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="agree">
                <input v-model="form.agree" @change="validateField('agree')" class="mr-2 leading-tight" type="checkbox"
                  id="agree" required />
                <a href="/policy" target="_blank" class="text-blue-500 underline">個人情報の取り扱いに同意する</a> <span
                  class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
                <span v-if="errors.agree" class="text-red-500 text-xs italic">{{ errors.agree }}</span>
              </label>
            </div>

            <!-- 確認ボタン -->
            <div class="flex items-center justify-center">
              <CustomArrowButton color-type="blue-bg-white" arrowType="none" @click="validateForm">
                <template #buttonText>
                  この内容で確認する
                </template>
              </CustomArrowButton>
            </div>
          </div>
        </form>

        <!-- ステップ2: フォームの内容確認 -->
        <div v-if="active == 2" class="mb-4 w-full">
          <div class="w-full flex flex-col">
            <h3 class="mb-4 text-2xl font-bold">フォームの内容確認</h3>
            <!-- 確認用フィールド（すべての入力内容を表示） -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="companyName">
                会社名／学校名 <span class="bg-gray-500 text-white px-2 py-1 rounded">任意</span>
              </label>
              <input v-model="form.companyName"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="companyName" type="text" disabled />
            </div>

            <!-- 氏名確認フィールド -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">
                氏名 <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
              </label>
              <input v-model="form.lastName"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName" type="text" disabled />
            </div>

            <!-- 氏名（フリガナ）確認フィールド -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="kanaName">
                氏名（フリガナ）
              </label>
              <input v-model="form.kanaName"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="kanaName" type="text" disabled />
            </div>

            <!-- メールアドレス確認フィールド -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                メールアドレス <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
              </label>
              <input v-model="form.email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" disabled />
            </div>

            <!-- 電話番号確認フィールド -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                電話番号（ハイフン無しで入力） <span class="bg-gray-500 text-white px-2 py-1 rounded">任意</span>
              </label>
              <input v-model="form.phone"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="tel" disabled />
            </div>

            <!-- お問い合わせ区分確認フィールド -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="inquiryType">
                お問い合わせ区分 <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
              </label>
              <select v-model="form.inquiryType"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="inquiryType" disabled>
                <option value="" disabled>選択してください</option>
                <option value="個人情報に関するお問い合わせ">個人情報に関するお問い合わせ</option>
                <option value="採用に関するお問い合わせ">採用に関するお問い合わせ</option>
                <option value="その他">その他</option>
              </select>
            </div>

            <!-- 採用区分確認フィールド（採用に関するお問い合わせの場合のみ表示） -->
            <div class="mb-4" v-if="form.inquiryType === '採用に関するお問い合わせ'">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="employmentType">
                採用区分 <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
              </label>
              <select v-model="form.employmentType"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employmentType" disabled>
                <option value="" disabled>選択してください</option>
                <option value="新卒採用">新卒採用</option>
                <option value="キャリア採用">キャリア採用</option>
                <option value="契約社員採用">契約社員採用</option>
              </select>
            </div>

            <!-- お問い合わせ内容確認フィールド -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="inquiryContent">
                お問い合わせ内容 <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
              </label>
              <textarea v-model="form.inquiryContent"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="inquiryContent" disabled></textarea>
            </div>

            <!-- 同意チェックボックス（確認用） -->
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="agree">
                <input v-model="form.agree" class="mr-2 leading-tight" type="checkbox" id="agree" disabled />
                <a href="/policy" target="_blank" class="text-blue-500 underline">個人情報の取り扱いに同意する</a> <span
                  class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
              </label>
            </div>

            <!-- 修正ボタンと送信ボタン -->
            <div class="flex w-full justify-center items-center gap-4">
              <CustomArrowButton color-type="yellow" arrowType="none" @click="prevStep">
                <template #buttonText>
                  修正する
                </template>
              </CustomArrowButton>
              <CustomArrowButton color-type="blue-bg-white" arrowType="none" @click="submitForm">
                <template #buttonText>
                  お問い合わせする
                </template>
              </CustomArrowButton>
            </div>
          </div>
        </div>

        <!-- ステップ3: 完了メッセージ -->
        <div v-if="active == 3" class="mb-4 w-full">
          <div class="w-full flex flex-col">
            <h3 class="mb-4 text-2xl font-bold">完了</h3>
            <p class="mb-4 text-xl font-bold">お問い合わせいただきありがとうございます。<br />担当者が確認次第、ご連絡いたします。</p>
            <div class="flex w-full justify-center items-center">
              <CustomArrowButton color-type="blue-bg-white" arrowType="none" to="/">
                <template #buttonText>
                  Topに戻る
                </template>
              </CustomArrowButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import CustomArrowButton from '~/components/CustomArrowButton.vue'
import { useRoute } from 'vue-router'

// フォームのステップ管理に使用する変数
const active = ref(1) // 現在のアクティブなステップ
const startIndex = 1 // 最初のステップのインデックス
const finalIndex = 3 // 最後のステップのインデックス

// 次のステップに進む関数
const nextStep = () => {
  if (active.value < finalIndex) active.value++
}

// 前のステップに戻る関数
const prevStep = () => {
  if (active.value > startIndex) active.value--
}

// フォームのデータを管理するリアクティブオブジェクト
const form = reactive({
  companyName: '',
  lastName: '',
  kanaName: '',
  email: '',
  phone: '',
  inquiryType: '',
  employmentType: '',
  inquiryContent: '',
  agree: false,
})


const route = useRoute();

const updateInquiryTypeFromURL = () => {
  const inquiryType = route.query.inquiryType;
  if (inquiryType === 'recruitment') {
    form.inquiryType = '採用に関するお問い合わせ';
  } else if (inquiryType === 'other') {
    form.inquiryType = 'その他';
  } else {
    form.inquiryType = '';
  }
};

// 初期ロード時
onMounted(() => {
  updateInquiryTypeFromURL();
});

// URLパラメータの変化を監視
watch(() => route.query.inquiryType, () => {
  updateInquiryTypeFromURL();
});


// 必須項目のバリデーションエラーを管理するリアクティブオブジェクト
const errors = reactive({})

// 任意項目のバリデーションエラーを管理するリアクティブオブジェクト
const optionalErrors = reactive({})

// フィールドのバリデーションを行う関数
const validateField = (field) => {
  switch (field) {
    case 'lastName':
      if (!form.lastName) {
        errors.lastName = '氏名を入力してください'
      } else if (form.lastName.length > 60) {
        errors.lastName = '氏名は60文字以内で入力してください'
      } else {
        delete errors.lastName
      }
      break
    case 'kanaName':
      if (form.kanaName.length > 180) {
        errors.kanaName = '氏名（フリガナ）は180文字以内で入力してください'
      } else if (form.kanaName && !/^[ァ-ヶー]+$/.test(form.kanaName)) {
        errors.kanaName = '氏名（フリガナ）はカタカナのみで入力してください'
      } else {
        delete errors.kanaName
      }
      break
    case 'email':
      if (!form.email) {
        errors.email = 'メールアドレスを入力してください'
      } else if (form.email.length > 254) {
        errors.email = 'メールアドレスは254文字以内で入力してください'
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = 'メールアドレスは正しい形式で入力してください'
      } else {
        delete errors.email
      }
      break
    case 'phone':
      if (!/^\d+$/.test(form.phone)) {
        optionalErrors.phone = '電話番号は数字のみで入力してください';
      } else {
        delete optionalErrors.phone;
      }
      break
    case 'inquiryType':
      if (!form.inquiryType) {
        errors.inquiryType = 'お問い合わせ区分を選択してください'
      } else {
        delete errors.inquiryType
      }
      break
    case 'employmentType':
      if (form.inquiryType === '採用に関するお問い合わせ' && !form.employmentType) {
        errors.employmentType = '採用区分を選択してください'
      } else if (form.inquiryType !== '採用に関するお問い合わせ') {
        form.employmentType = ''
      } else {
        delete errors.employmentType
      }
      break
    case 'inquiryContent':
      if (!form.inquiryContent) {
        errors.inquiryContent = 'お問い合わせ内容を入力してください'
      } else {
        delete errors.inquiryContent
      }
      break
    case 'agree':
      if (!form.agree) {
        errors.agree = '個人情報の取り扱いに同意する必要があります'
      } else {
        delete errors.agree
      }
      break
    default:
      break
  }
}

// フォーム全体のバリデーションを行い、次のステップに進むかどうかを判断する関数
const validateForm = () => {
  Object.keys(form).forEach((field) => validateField(field));

  if (Object.keys(errors).length === 0) {
    nextStep();
  }
}

// フォームの送信処理を行う関数
const submitForm = async () => {
  Object.keys(form).forEach((field) => validateField(field));

  if (Object.keys(errors).length === 0) {
    try {
      const response = await fetch('/common/sendemail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form),
        mode: 'cors'
      });

      if (response.ok) {
        active.value = 3;
      } else {
        alert('メール送信に失敗しました');
      }
    } catch (error) {
      console.error(error);
      alert('エラーが発生しました: ' + error.message);
    }
  }
};

// お問い合わせ区分が変更されたときに実行される関数
const handleInquiryTypeChange = () => {
  if (form.inquiryType !== '採用に関するお問い合わせ') {
    form.employmentType = ''
  }
  validateField('inquiryType')
}

// フォームがバリデーションエラーなしであるかどうかを判断する計算プロパティ
const isFormValid = computed(() => Object.keys(errors).length === 0)

</script>

<style scoped>
.form-checkbox {
  height: 20px;
  width: 20px;
}
</style>
