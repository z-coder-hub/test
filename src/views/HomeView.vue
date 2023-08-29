<template>
    <model v-show="isShow">
        <!--        这里的内容，会通过插槽的方式发送到slot标签中-->
        单个插槽
    </model>
    <button @click="isShow = !isShow">控制单个插槽的按钮</button>

    <br>
    <model2 v-show="isShow2">
        <template v-slot:head>
            <div>
                <h2>

                    组件的样式要在组件内设置
                </h2>
                <p class="content">

                    插槽可以在当前添加样式
                </p>
            </div>
        </template>
        <template #body>
            <div>
                插槽内可以加任何标签和内容
            </div>
        </template>

        <template #footer>
            底部
            #footer这种是简单写法，v-slot:footer效果一样
        </template>
    </model2>
    <button @click="isShow2 = !isShow2">控制多个插槽的按钮</button>

</template>

<script>
import Model from "@/components/model.vue";
import Model2 from "@/components/model2.vue";

export default {
    components: {
        Model,
        Model2
    },
    data() {
        return {
            isShow: false,
            isShow2: false
        }
    },
}
</script>

<style lang="scss" scoped>
.content {
    color: red;
}
</style>