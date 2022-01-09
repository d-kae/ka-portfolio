<template>
  <main class="px-4 py-14 lg:p-10">
    <h2 class="text-3xl lg:text-5xl tracking-widest mb-6">Contact</h2>
    <dl class="list-input mb-4">
      <div class="border border-red-700 px-4 py-2 text-red-700 bg-red-100 my-4" v-if="isAlert">入力内容に問題があります。確認して再度お試しください。</div>
      <div class="border border-green-700 px-4 py-2 text-green-700 bg-green-100 my-4" v-if="isSucceed">送信に成功しました。</div>
      <div :class="{ 'form-group__error': $v.form.name.$error }">
        <dt class="mb-2">
          <label class="block text-sm">お名前 *</label>
        </dt>
        <dd class="mb-8 relative">
          <input
            type="text"
            size="40"
            v-model="form.name"
            name="name"
            @blur="$v.form.name.$touch()"
            class="text-black p-2 w-full max-w-xs rounded"
            placeholder="お名前"
          >
          <div class="error" v-if="$v.form.name.$error">{{ formErrorMessage.name.required }}</div>
        </dd>
      </div>
      <div :class="{ 'form-group__error': $v.form.company.$error }">
        <dt class="mb-2">
          <label class="block text-sm">会社名</label>
        </dt>
        <dd class="mb-8 relative">
          <input
            type="text"
            size="40"
            v-model="form.company"
            name="company"
            class="text-black p-2 w-full max-w-xs rounded"
            placeholder="会社名"
          >
        </dd>
      </div>
      <div>
        <dt class="mb-2">
          <label class="block text-sm">部署名</label>
        </dt>
        <dd class="mb-8 relative">
          <input
            type="text"
            size="40"
            v-model="form.department"
            name="department"
            class="text-black p-2 w-full max-w-xs rounded"
            placeholder="部署名"
          >
        </dd>
      </div>
      <div :class="{ 'form-group__error': $v.form.email.$error }">
        <dt class="mb-2">
          <label class="block text-sm">メールアドレス *</label>
        </dt>
        <dd class="mb-8 relative">
          <input
            type="text"
            size="40"
            v-model="form.email"
            name="email"
            @blur="$v.form.email.$touch()"
            class="text-black p-2 w-full max-w-xs rounded"
            placeholder="hoge@fuga.com"
          >
          <div class="error" v-if="$v.form.email.$error">
            <span v-if="!$v.form.email.required">{{ formErrorMessage.email.required }}</span>
            <span v-if="!$v.form.email.email">{{ formErrorMessage.email.other }}</span>
          </div>
        </dd>
      </div>
      <div :class="{ 'form-group__error': $v.form.subject.$error }">
        <dt class="mb-2">
          <label class="block text-sm">件名 *</label>
        </dt>
        <dd class="mb-8 relative">
          <select
            name="subject"
            v-model="form.subject"
            @blur="$v.form.subject.$touch()"
            class="text-black px-1 py-2 w-full max-w-xs rounded"
          >
            <option value="">選択してください</option>
            <option value="Web制作について">Web制作について</option>
            <option value="Webアプリケーション開発について">Webアプリケーション開発について</option>
            <option value="ビジネスの提案・協力">ビジネスの提案・協力</option>
            <option value="その他">その他</option>
          </select>
          <div class="error" v-if="$v.form.subject.$error">{{ formErrorMessage.subject.required }}</div>
        </dd>
      </div>
      <div :class="{ 'form-group__error': $v.form.message.$error }">
        <dt class="mb-2">
          <label class="block text-sm">お問い合わせ内容 *</label>
        </dt>
        <dd class="mb-12 relative">
          <textarea
            rows="10"
            v-model="form.message"
            name="message"
            @input="$v.form.message.$touch()"
            class="text-black p-2 w-full max-w-2xl rounded"
            placeholder="お問い合わせ内容"
          ></textarea>
          <div class="error" v-if="$v.form.message.$error">{{ formErrorMessage.message.required }}</div>
        </dd>
      </div>
    </dl>
    <p class="link_button_arrow-03_wrap">
      <input
        type="submit"
        value="Submit"
        @click="submit"
        class="inline-block bg-transparent hover:bg-white text-white font-semibold hover:text-gray-800 py-2 px-4 border border-gray-100 hover:border-transparent rounded"
      >
    </p>
  </main>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import Meta from '~/assets/mixins/meta'

export default {
  name: 'ContactPage',
  mixins: [Meta],

  data() {
    return {
      meta: {
        title: 'Contact',
      },
      form: {
        name: '',
        company: '',
        department: '',
        email: '',
        subject: '',
        message: ''
      },
      formErrorMessage: {
        name: {
          required: 'お名前が入力されていません。'
        },
        email: {
          required: 'メールアドレスが入力されていません。',
          other: 'メールアドレスの形式が正しくありません。',
        },
        subject: {
          required: '件名が選択されていません。'
        },
        message: {
          required: 'お問い合わせ内容が入力されていません。'
        }
      },
      isAlert: false,
      isSucceed: false
    }
  },
  validations: {
    form: {
      name: { required },
      company: {},
      department: {},
      email: { required, email },
      subject: { required },
      message: { required }
    }
  },
  methods: {
    async submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.isAlert = true
        window.scrollTo(0,0)
      } else {
        this.isSucceed = true
        window.scrollTo(0,0)
        const contactUrl = this.$config.contactUrl;
        const options = {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form),
        }
        await fetch(contactUrl, options)
      }
    }
  },
}
</script>

<style scoped>
.error {
  position: absolute;
  bottom: -24px;
  color: #f87171;
  font-size: 0.85rem;
}
.list-input .form-group__error input,
.list-input .form-group__error select,
.list-input .form-group__error textarea {
  border: 2px solid #f87171;
}
</style>
