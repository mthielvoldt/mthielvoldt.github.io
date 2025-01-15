
<template>
  <div class="col-md-4">
    <div class="card mb-4 shadow">
      <div class="card-img">
        <img :src="imgsrc" class="mb-2" width="88" height="88" focusable="false"
          aria-label="Placeholder: Thumbnail">
      </div>
      <h3 class="my-0">{{name}}</h3>
      <div class="my-3">
        <span class="badge badge-pill badge-primary">{{ comp1 }}</span>
        <span class="badge badge-pill badge-primary">{{ comp2 }}</span>
        <span class="badge badge-pill badge-primary">{{ comp3 }}</span>
      </div>
      <div class="card-body text-left">
        <p class="card-text">{{ desc }}</p>
        <div class="btn-group">
          <a :href="demolink" class="btn btn-sm btn-outline-secondary">Demo</a>
          <a :href="codelink" class="btn btn-sm btn-outline-secondary">Code</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgsrc: { type: String, required: true },
    name: { type: String, required: true },
    comp1: { type: String, required: true },
    comp2: { type: String, required: true },
    comp3: { type: String, required: true },
    desc: { type: String, required: true },
    codelink: { type: String, required: true },
    demolink: { type: String, required: true }
  }
};
</script>

<style lang="css" scoped>
.col-md-4 { 
  flex: 0 0 33.33%;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: .25rem;
}

.card-img {
  position: relative;
  height: 150px;
  display: flex;
  flex-direction: column-reverse;
  flex-shrink: 0;
  margin: 0 auto;
}

.card-body {
  text-align: left;
  padding: 1.25rem;
  border-top: solid 1px rgb(190, 190, 190);
  background-color: var(--vp-c-default-3);
}

.shadow {
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
}

.badge {
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.badge-pill {
  padding: 0 .6em;
  border-radius: 10rem;
  color: white;
  background-color: #007bff;
}

.btn {
  margin: 0 0.3em;
}
</style>