<template>
  <div class="form-item">
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'vue-property-decorator'
import Schema from 'async-validator'
@Component
export default class FormItem extends Vue {
  @Prop({ default: '' }) label!: string
  @Prop() prop!: string
  public error = ''
  @Inject('form') form: any
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  }
  validate() {
    console.log(this.form)
    //规则
    const rules = this.form.rules[this.prop]
    //当前值
    const value = this.form.model[this.prop]
    //检验描述对象
    const docs = { [this.prop]: rules }

    const schema = new Schema(docs)
    return schema.validate({ [this.prop]: value }, (errors) => {
      if (errors) {
        this.error = errors[0].massage
      } else {
        //校验通过
        this.error = ''
      }
    })
  }
}
</script>

<style lang="sass" scoped>

</style>