<template>
    <div class="iframe">
        <!-- Substitua 'your-streamlit-app-url' pela URL do seu aplicativo Streamlit -->
        <iframe :src="streamlitUrl" width="100%" height="800px" frameborder="0"></iframe>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            streamlitUrl: 'http://192.168.69.133:8501/'
        };
    }
};
</script>


<style lang="scss">
.iframe {
    height: 89vh;

    iframe {
        height: 100%;
    }
}
</style>