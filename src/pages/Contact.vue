<template>
  <div class="contact">
    <div class="contact-form">
      <div class="flex-column">
        <h2>Kontakt</h2>
        <input
          v-model="formValues.name"
          type="email"
          class="contact-form__name"
          placeholder="Namn"
        />
        <input
          v-model="formValues.subject"
          type="text"
          class="contact-form__subject"
          placeholder="Ämne"
        />
        <textarea
          v-model="formValues.body"
          class="contact-form__body"
          placeholder="Meddelande"
        />
        <button @click="sendMail" type="button" class="contact-form__button">
          Skicka
        </button>
      </div>
      <div class="flex-column">
        <span class="flex">
          <img class="svg" src="../assets/mail.svg" />
          <span>
            <a href="mailto:jl.7804@gmail.com" target="_blank">
              jl.7804@gmail.com
            </a>
          </span>
          <img class="svg" src="../assets/phone.svg" />
          <span>
            <a href="tel:0706444922" target="_blank">0706444922</a>
          </span>
        </span>
        <span class="flex">
          <img class="svg" src="../assets/linkedin.svg" />
          <span>
            <a href="https://www.linkedin.com/in/jonlarsson/" target="_blank">
              jonlarsson
            </a>
          </span>
          <img class="svg" src="../assets/github.svg" />
          <span>
            <a href="https://github.com/JonasLarsson78" target="_blank"
              >JonasLarsson78
            </a>
          </span>
        </span>
      </div>
      <div class="contact-form__message">{{ message }}</div>
    </div>
    <BackImg />
  </div>
</template>

<script>
import BackImg from '../components/BackImg'
export default {
  name: 'Contact',
  components: {
    BackImg,
  },
  data() {
    return {
      formValues: {
        name: null,
        subject: null,
        body: null,
      },
      message: '',
    }
  },
  mounted() {
    document.title = 'MyPage - Kontakt'
  },
  methods: {
    sendMail() {
      const { name, subject, body } = this.formValues
      if (!name || !subject || !body) {
        this.message = 'Måste fylla i alla fält'
        return
      }
      window.open(`mailto:jl.7804@gmail.com?subject=${subject}&body=${body}`)
      this.message = ''
      this.formValues = {
        name: null,
        subject: null,
        body: null,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: calc(100vh - 40px);
  text-align: center;

  a {
    color: $meny-color-primary;

    &:hover {
      opacity: 0.7;
    }
  }

  &-form {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    top: 100px;
    width: 650px;
    height: 650px;
    background-color: white;
    border-radius: 10px;
    border: 3px solid $meny-color-primary;
    opacity: 0.8;
    z-index: 100;

    h2 {
      margin-top: 10px;
      color: $meny-color-primary;
    }

    &__name {
      width: 400px;
      height: 30px;
      border: 3px solid $meny-color-primary;
      border-radius: 5px;
      margin-top: 30px;
      font-size: 18px;
      padding: 5px;
    }

    &__subject {
      width: 400px;
      height: 30px;
      border: 3px solid $meny-color-primary;
      border-radius: 5px;
      margin-top: 10px;
      font-size: 18px;
      padding: 5px;
    }

    &__body {
      width: 400px;
      height: 200px;
      border: 3px solid $meny-color-primary;
      border-radius: 5px;
      margin-top: 10px;
      font-size: 18px;
      padding: 5px;
    }

    &__button {
      margin-top: 10px;
      width: 200px;
      height: 40px;
      border-radius: 10px;
      border: none;
      background-color: $meny-color-primary;
      color: $meny-color-secondary;
      cursor: pointer;
      font-size: 18px;
      margin-bottom: 40px;
      padding: 5px;

      &:hover {
        opacity: 0.7;
      }
    }

    &__message {
      color: $meny-color-primary;
      font-weight: 600;
    }
  }
}

.flex {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: $meny-color-primary;
}

.flex-column {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.svg {
  width: 30px;
  margin-right: 10px;
  margin-left: 10px;
}
</style>
