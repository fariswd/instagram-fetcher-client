<template lang="html">
  <div class="main-home">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form class="form-horizontal">
          <fieldset>
            <legend>Legend</legend>
            <div class="form-group">
              <label for="inputLinkInstagram" class="col-md-4 control-label">Instagram Link</label>
              <div class="col-md-8">
                <input v-model="ig.iLink" class="form-control" id="inputLinkInstagram" placeholder="https://instagram.com/xsxsxxx/" type="text">
              </div>
              <div class="checkbox">
                <label>
                  <input v-model="ig.isVideo" type="checkbox"> Video?
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-8 col-md-offset-4">
                <button @click="clear" type="reset" class="btn btn-default">Cancel</button>
                <button @click="sendIlink" type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
        <div class="your-link">
          Here is your link:
          <p>{{ instagramLink }}</p>
          <p>{{ instagramConverted }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data: function () {
    return {
      ig: {
        iLink: '',
        isVideo: false
      },
      isloading: true
    }
  },
  computed: {
    ...mapState([
      'instagramLink',
      'instagramConverted'
    ])
  },
  methods: {
    ...mapActions([
      'getInstagramLink',
      'convertInstagramLink',
      'clearData'
    ]),
    sendIlink: function () {
      this.getInstagramLink(this.ig)
      this.convertInstagramLink(this.ig)
    },
    clear: function () {
      this.clearData()
      this.iLink = ''
    }
  }
}
</script>

<style lang="css">
.main-home {

}
</style>
