<template>
    <!--    单个插槽-->
    <div >
        <slot>

        </slot>
    </div>
</template>

<script>
export default {
    props: ['isShow']
}
</script>

<style scoped lang="scss">
div {
    background: #f0f0f0;
    transition: all 1s ease-in-out;
    width: 500px;
    height: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>