
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
            <textarea name="message" placeholder="message" rows="7"></textarea>
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
  border: 0;
}

button {
  font-weight: bold;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-default-3);
  padding: 5px;
  border: 1px solid var(--vp-c-default-1);
}
button:hover {
  background-color: var(--vp-c-default-2);
}

input, textarea {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-default-soft);
  padding: 1px;
  border: 1px solid var(--vp-c-default-1);
}

label div {
  white-space: pre-line;
  color: var(--vp-c-text-2);
  padding: 0px;
}
</style>