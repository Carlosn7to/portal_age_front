<script>
import { ref } from 'vue';
import { mapGetters, mapMutations } from "vuex";

export default {
    setup() {
        const isExpanded = ref(false);

        function toggleSidebar() {
            isExpanded.value = !isExpanded.value;
        }

        return { isExpanded, toggleSidebar };
    },
    methods: {
        ...mapMutations(["SAVE_SYSTEM"]),
    },
    computed: {
        ...mapGetters(["system"]),
    },
};
</script>

<template>
    <div :class="['sidebar', { 'sidebar-expanded': isExpanded }]">
        <div class="logo">
            <img src="@/assets/img/identifyBusiness/logo_age_orange.png" alt="logo_age" />
            <div class="logo-title">
                <svg width="68" height="29" viewBox="0 0 68 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M46.0038 10C46.0038 4.15488 51.3149 0 57.0419 0C62.7689 0 67.9998 4.23267 67.9998 10C67.9998 10 68.0113 10.8593 67.8434 11.6938C66.8438 11.6938 50.9982 11.7008 50.9982 11.7008C52.1658 14.8232 54.8404 15.8487 57.0419 15.8487C58.343 15.8487 59.5296 15.4243 60.0713 15.0919C60.0713 15.0919 62.2156 14.1584 63.2229 15.8734C64.2302 17.5919 62.395 18.7235 62.395 18.7235C61.4792 19.1337 59.6745 20 57.0381 20C51.3111 20 46 15.8416 46 10H46.0038ZM62.8299 7.87129C61.7005 5.27228 59.1556 4.15134 57.0457 4.15134C54.9358 4.15134 52.3031 5.22277 51.1737 7.87129H62.8299Z"
                        fill="#263570" />
                    <path
                        d="M11.082 0C5.33877 0 0 4.15334 0 10.1907C0 16.2281 6.14016 20.141 10.6394 19.9961C10.6394 19.9961 12.8489 19.9961 12.91 17.9212C12.971 15.8463 10.6394 15.8463 10.6394 15.8463C7.9948 15.8463 4.93808 13.3897 4.93808 9.95034C4.93808 6.74431 7.78491 4.15687 11.2003 4.15687C14.6158 4.15687 17.4626 6.75138 17.4626 9.95034L17.4779 17.9212C17.4779 17.9212 17.5924 19.9961 19.7294 19.9961C21.8664 19.9961 22 17.9212 22 17.9212V10.1554C22 4.04023 16.8253 0.00353551 11.082 0.00353551V0Z"
                        fill="#263570" />
                    <path
                        d="M34.0343 0.00362168C28.5725 0.00362168 23 3.97002 23 10.2474C23 16.5249 28.6106 20.4913 33.9962 20.4913C37.6044 20.4913 40.2552 19.2561 40.2552 17.3C40.2552 18.0897 40.2399 18.5932 40.2399 19.1474C40.2399 22.6248 36.6089 24.7474 34.1259 24.7474C30.346 24.7474 28.8967 22.3531 28.5114 21.6504C28.5114 21.6504 27.371 19.8682 25.4296 20.705C23.4844 21.5381 24.3006 23.5811 24.3006 23.5811C25.8301 26.3521 29.3658 29 34.0038 29C38.6418 29 45 25.8885 45 18.441V10.4032C45 4.10042 39.5076 0 34.0458 0L34.0343 0.00362168ZM33.9924 16.2387C30.5368 16.2387 27.7334 13.4785 27.7334 10.2003C27.7334 6.92218 30.5329 4.26343 33.9924 4.26343C37.4518 4.26343 40.2514 6.92218 40.2514 10.2003C40.2514 13.4785 37.4518 16.2387 33.9924 16.2387Z"
                        fill="#263570" />
                </svg>

            </div>
        </div>
        <center>
            <div class="menu-divisor">
            </div>
        </center>
        <div class="menu-container">
            <div class="menu-toggle" @click="toggleSidebar">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                    viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                    <path
                        d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                </svg>
            </div>
        </div>
        <div class="items-menu">
            <router-link to="/inicio" @click="SAVE_SYSTEM({ module: 'Página inicial' })"
                :class="{ routed: system.module === 'Página inicial' }">
                <div class="item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                    </svg>
                    <div class="module-title">
                        <span>Tela Inicial</span>
                    </div>
                    <div class="tool-tip">
                        <span> Página inicial </span>
                    </div>
                </div>
            </router-link>
            <router-link to="/rv/inicio" :class="{ routed: system.module === 'Age Remuneração Variável' }"
                @click="SAVE_SYSTEM({ module: 'Age Remuneração Variável' })">
                <div class="item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
                    </svg>
                    <div class="module-title">
                        <span>Remuneração</span>
                    </div>
                    <div class="tool-tip">
                        <span> Age Remuneração Variável </span>
                    </div>
                </div>
            </router-link>
            <router-link to="/dashboards/inicio" :class="{ routed: system.module === 'Age Dashboards' }"
                @click="SAVE_SYSTEM({ module: 'Age Dashboards' })">
                <div class="item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                    </svg>
                    <div class="module-title">
                        <span>Gráficos</span>
                    </div>
                    <div class="tool-tip">
                        <span> Age Dashboards </span>
                    </div>
                </div>
            </router-link>
            <router-link to="/relatorios/inicio" :class="{ routed: system.module === 'Age Relatórios' }"
                @click="SAVE_SYSTEM({ module: 'Age Relatórios' })">
                <div class="item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                    </svg>
                    <div class="module-title">
                        <span>Relatórios</span>
                    </div>
                    <div class="tool-tip">
                        <span> Age Relatórios </span>
                    </div>
                </div>
            </router-link>
            <router-link to="/ferramentas/inicio" :class="{ routed: system.module === 'Age Ferramentas e utilitários' }"
                @click="SAVE_SYSTEM({ module: 'Age Ferramentas e utilitários' })">
                <div class="item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                    </svg>
                    <div class="module-title">
                        <span>Ferramentas</span>
                    </div>
                    <div class="tool-tip">
                        <span> Age Ferramentas e utilitários </span>
                    </div>
                </div>
            </router-link>
            <router-link to="/comunica/inicio" :class="{ routed: system.module === 'Age Comunica' }"
                @click="SAVE_SYSTEM({ module: 'Age Comunica' })">
                <div class="item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                    </svg>
                    <div class="module-title">
                        <span>Comunicações</span>
                    </div>
                    <div class="tool-tip">
                        <span> Age Comunica </span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
  
<style lang="scss">
.sidebar {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    transition: width 0.5s ease;
    background-color: #ffffff;
    border-right: 2px solid #00000020;
    /* outros estilos */
}

.logo {
    padding: 2vh 0;
    display: flex;
    flex-direction: row;
    align-items: end;

    .logo-title {
        height: auto;
        margin-left: .6vw;
        overflow: hidden; // Esconde o texto que excede o max-width
        opacity: 0; // Inicia com o texto invisível
        transition: opacity .3s ease; // Transição suave da opacidade

        svg {
            width: 3.5vw;
            height: 100%;
        }
    }

    img {
        display: block;
        height: auto;
        width: 100%;
        max-width: 2.5vw;
        margin-left: 1.2vw;
    }
}

.profile-icon {
    text-align: center;
    margin-top: auto;
    /* Isso alinhará o ícone na parte inferior da barra de navegação */
    padding: 10px;
    /* Ajuste o espaçamento conforme necessário */
}

.menu-container {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: -13px;
    right: -15px;
}

.menu-divisor {
    height: 2px;
    background-color: #E5E5E5;
    width: 75%;
    transition: width 0.5s ease;
}

.menu-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    height: 24px;
    width: 24px;
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    position: relative;

    transition: .5s ease;

    svg {
        width: 1vw;
    }

}

.items-menu {
    @include flex(column, flex-start, initial, 4vh);
    padding: 2vh 1vw;

    .item {
        margin-left: .5vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        padding: 10px 5px;
        transition: background-color ease-in-out 0.4s;

        .module-title {
            white-space: nowrap; // Impede que o texto quebre em linhas
            overflow: hidden; // Esconde o texto que excede o max-width
            opacity: 0; // Inicia com o texto invisível
            transition: opacity .3s ease; // Transição suave da opacidade
            margin-left: 2rem; // Espaço entre o SVG e o texto
            color: #373737;
            font-size: 1.5rem;
            font-weight: 600;
        }

        svg {
            flex-shrink: 0;
            fill: #373737;
            width: 1.2vw;
            height: auto;
            cursor: pointer;
            transition: fill ease-in-out 0.1s;
        }

        &:hover {
            .tool-tip {
                visibility: visible;
            }
        }

        .tool-tip {
            position: absolute;
            right: -30vw;
            top: .5vh;
            width: 30vw;
            @include flex(row, flex-start, initial, 0);
            visibility: hidden;

            span {
                background-color: #333;
                border-radius: 3px;
                padding: 10px 15px;
                color: #fff;
                font-size: 1rem;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }
        }
    }
}

.sidebar-expanded {
    width: 15vw;
    /* Estilos adicionais para o estado expandido */

    .menu-divisor {
        width: 95%;
    }

    .logo {
        padding: 2vh 0;

        .logo-title {
            opacity: 1; // Texto totalmente visível

        }

        img {
            margin-left: 1.2vw;
        }
    }

    .menu-toggle {
        transform: rotate(-180deg);
    }

    .item {

        .module-title {
            opacity: 1; // Texto totalmente visível
            color: #373737;
            font-size: 1.5rem;
            font-weight: 600;
            position: relative;
            margin-left: 2rem;
            max-width: 200px;
            display: block;
        }

        &:hover {
            .tool-tip {
                visibility: hidden;
            }
        }
    }
}
</style>
  