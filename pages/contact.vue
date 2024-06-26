<template>
  <section class="py-12 mb-6 flex flex-col justify-center items-center bg-cover bg-[url('/images/contact/001.png')]">
    <h1 id="contact01" class="linkScroll m-4 text-4xl font-bold text-white">お問い合わせ</h1>
    <div class="mr-10 text-lg font-bold text-white">Contact</div>
  </section>

  <section class="mb-4">
    <div class="flex justify-center items-center">
      <div class="mb-4 w-4/6 flex justify-center items-center">
        <h2 class="linkScroll text-4xl font-bold">お問い合わせフォーム</h2>
      </div>
    </div>
    <el-steps class="mb-4" style="max-width: 1280px" :active="active" align-center>
      <el-step title="Step 1" />
      <el-step title="Step 2" />
      <el-step title="Step 3" />
    </el-steps>

    <div class="flex justify-center items-center">
      <div class="w-4/6 flex justify-center items-center">
        <form v-if="active == 1" class="mb-4 w-full" @submit.prevent="submitForm">
          <div class="w-full flex flex-col">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">
                氏名 <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
                <span v-if="errors.lastName" class="text-red-500 text-xs italic">{{ errors.lastName }}</span>
              </label>
              <input v-model="form.lastName" @blur="validateField('lastName')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName" type="text" required />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="kanaName">
                氏名（フリガナ）
                <span v-if="errors.kanaName" class="text-red-500 text-xs italic">{{ errors.kanaName }}</span>
              </label>
              <input v-model="form.kanaName" @blur="validateField('kanaName')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="kanaName" type="text" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                メールアドレス <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
                <span v-if="errors.email" class="text-red-500 text-xs italic">{{ errors.email }}</span>
              </label>
              <input v-model="form.email" @blur="validateField('email')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" required />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                電話番号 <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
                <span v-if="errors.phone" class="text-red-500 text-xs italic">{{ errors.phone }}</span>
              </label>
              <input v-model="form.phone" @blur="validateField('phone')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="tel" required />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="inquiryType">
                お問い合わせ区分 <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
                <span v-if="errors.inquiryType" class="text-red-500 text-xs italic">{{ errors.inquiryType }}</span>
              </label>
              <select v-model="form.inquiryType" @change="validateField('inquiryType')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="inquiryType" required>
                <option value="" disabled selected>選択してください</option>
                <option value="個人情報に関するお問い合わせ">個人情報に関するお問い合わせ</option>
                <option value="採用に関するお問い合わせ">採用に関するお問い合わせ</option>
                <option value="その他">その他</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2"
                :class="{ 'text-gray-400': form.inquiryType !== '採用に関するお問い合わせ' }"
                for="employmentType">
                採用区分 <span
                  :class="{ 'bg-red-500 text-white px-2 py-1 rounded': form.inquiryType === '採用に関するお問い合わせ', 'bg-gray-400 text-white px-2 py-1 rounded': form.inquiryType !== '採用に関するお問い合わせ' }">必須</span>
                <span v-if="errors.employmentType && form.inquiryType === '採用に関するお問い合わせ'"
                  class="text-red-500 text-xs italic">{{ errors.employmentType }}</span>
              </label>
              <select v-model="form.employmentType"
                :disabled="form.inquiryType !== '採用に関するお問い合わせ'"
                @change="validateField('employmentType')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="employmentType" required>
                <option value="" disabled selected>選択してください</option>
                <option value="新卒採用">新卒採用</option>
                <option value="キャリア採用">キャリア採用</option>
                <option value="契約社員採用">契約社員採用</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="inquiryContent">
                お問い合わせ内容 <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
                <span v-if="errors.inquiryContent" class="text-red-500 text-xs italic">{{ errors.inquiryContent }}</span>
              </label>
              <textarea v-model="form.inquiryContent" @blur="validateField('inquiryContent')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="inquiryContent" required></textarea>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="agree">
                <input v-model="form.agree" @change="validateField('agree')"
                  class="mr-2 leading-tight" type="checkbox" id="agree" required />
                個人情報の取り扱いに同意する <span class="bg-red-500 text-white px-2 py-1 rounded">必須</span>
                <span v-if="errors.agree" class="text-red-500 text-xs italic">{{ errors.agree }}</span>
              </label>
            </div>
            <div class="flex items-center justify-between">
              <div v-if="Object.keys(errors).length > 0" class="errors">
                <div v-for="(error, field) in errors" :key="field" class="error">
                  <span>{{ error }}</span>
                </div>
              </div>
              <button :disabled="!isFormValid"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                 送信
              </button>
            </div>
          </div>
          <div class="flex w-full justify-center items-center">
            <CustomArrowButton color-type="blue-bg-white" arrowType="none" :on-click="next">
              <template #buttonText>
                この内容で確認する
              </template>
            </CustomArrowButton>
          </div>
        </form>
        <form v-if="active == 2" class="mb-4 w-full">
          <div class="w-full flex flex-col">
            <div class="flex w-full">
              ステップ2
            </div>
            <div class="flex w-full justify-center items-center">
              <CustomArrowButton color-type="yellow" arrowType="none" :on-click="prev">
                <template #buttonText>
                  修正する
                </template>
              </CustomArrowButton>
              <CustomArrowButton color-type="blue-bg-white" arrowType="none" :on-click="next">
                <template #buttonText>
                  問い合わせする
                </template>
              </CustomArrowButton>
            </div>
          </div>
        </form>
        <form v-if="active == 3" class="mb-4 w-full">
          <div class="w-full flex flex-col">
            <div class="flex w-full">
              ステップ3
            </div>
            <div class="flex w-full justify-center items-center">
              <CustomArrowButton color-type="blue-bg-white" arrowType="none" to="/">
                <template #buttonText>
                  Topに戻る
                </template>
              </CustomArrowButton>
            </div>
          </div>
        </form>
        <div v-if="active == 1">
        </div>
        <div v-if="active == 2" class="flex justify-center items-center gap-10">
        </div>
        <div v-if="active == 3">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import emailjs from 'emailjs-com'
import CustomArrowButton from '~/components/CustomArrowButton.vue'

const active = ref(1)
const startIndex = 1
const finalIndex = 3

const next = () => {
  if (active.value++ >= finalIndex) active.value = startIndex
}

const prev = () => {
  if (active.value-- <= startIndex) active.value = finalIndex
}

const form = reactive({
  lastName: '',
  kanaName: '',
  email: '',
  phone: '',
  inquiryType: '',
  employmentType: '',
  inquiryContent: '',
  agree: false,
})

const errors = reactive({})

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
      if (!form.phone) {
        errors.phone = '電話番号を入力してください'
      } else if (form.phone.length > 13) {
        errors.phone = '電話番号は13文字以内で入力してください'
      } else if (!/^\d{2,4}-\d{2,4}-\d{4}$/.test(form.phone)) {
        errors.phone = '電話番号は正しい形式で入力してください'
      } else {
        delete errors.phone
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

const submitForm = async () => {
  Object.keys(form).forEach((field) => validateField(field))

  if (Object.keys(errors).length === 0) {
    try {
      const result = await emailjs.send(
        'GmailTEST',
        'GmailTemplateTEST',
        {
          from_name: form.lastName,
          kana_name: form.kanaName,
          reply_to: form.email,
          phone: form.phone,
          inquiry_type: form.inquiryType,
          employment_type: form.employmentType,
          message: form.inquiryContent,
          to_name: "【TEST】"  // これはテンプレートで受け取る名前です。変更可能です。
        },
        'UT32c97BFl2Tqs76R'
      )

      if (result.status === 200) {
        alert('メールが送信されました')
        form.lastName = ''
        form.kanaName = ''
        form.email = ''
        form.phone = ''
        form.inquiryType = ''
        form.employmentType = ''
        form.inquiryContent = ''
        form.agree = false
      } else {
        alert(`メール送信に失敗しました: ${result.text}`)
      }
    } catch (error) {
      console.error(error)
      alert('エラーが発生しました: ' + error.message)
    }
  }
}

const isFormValid = computed(() => Object.keys(errors).length === 0)
</script>

<style scoped>
.form-checkbox {
  height: 20px;
  width: 20px;
}
</style>
