
<template>
  <div class="contact">
    <form action="https://formspree.io/f/xyzzvzbw" method="POST" class="email_form">
      <div>
        <fieldset>
          <label>
            <div>E-mail:</div>
            <input name="email" placeholder="@" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <div>Message:</div>
            <textarea name="message" placeholder="message"></textarea>
          </label>
        </fieldset>
        <fieldset class="button_send">
          <button type="submit">Send Message</button>
        </fieldset>
      </div>
    </form>
  </div>
</template>

<style scoped>
.email_form {
  display: flex;
  align-items: center;
  justify-content: left;
}

.email_form input,
.email_form textarea,
.button_send,
button,
.tip,
.warning {
  width: 300px;
}

fieldset {
  border: 0px solid white;
}

button {
  font-weight: bold;
  color: gray;
  background-color: black;
  padding: 5px;
  border: 1px solid white;
}

input, textarea {
  color: white;
  background-color: black;
  padding: 1px;
  border: 1px solid white;
}

label div {
  white-space: pre-line;
  color: gray;
  padding: 0px;
}
</style>