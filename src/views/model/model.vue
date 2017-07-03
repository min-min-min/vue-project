<template>
  <div>
    <transition name="modal">
      <div class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- 模态框的头部  -->
            <div class="modal-header">
              <button type="button" class="close"><span aria-hidden="true" @click="$emit('close')">&times;</span></button>
              <slot name="header" class="modal-title">
                default header
              </slot>
            </div>
            <!-- 模态框的主内容  -->
            <div class="modal-body">
              <slot name="body">
                defaultaskhdfkjsdfhsd
                sdfs
                fdsf
                sdf
                sdf
                sd
                fs
                df
                sdf
              </slot>
            </div>
            <!-- 模态框的尾部  -->
            <div class="modal-footer">
              <slot name="footer">
                <button type="button" class="btn btn-default" @click="$emit('close')">Close</button>
                <button type="button" class="btn btn-primary" @click="$emit('close')">Save changes</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default{
    name: "modal-template"
  }
</script>
<style>
  .modal{
    background-color: rgba(0, 0, 0, .5);
    display: block;
  }
  /**
  修改模态框的大小请修改这里的width属性
   */
  .modal-dialog{
    width:1000px
  }
</style>
