<script>
export default {
    name: "attendantCommission",
    data() {
        return {
            value: '1.820,66',
            isObfuscated: true,
            isDropdownOpen: false,
            months: [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro'
            ],
            selectedMonth: 'mm/yyyy',
        }
    },
    methods: {
        toggleObfuscation() {
            this.isObfuscated = !this.isObfuscated;
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectMonth(month) {
            this.selectedMonth = month;
            this.isDropdownOpen = false;
        },
    },
}
</script>

<template>
    <div class="container-commission">
        <div class="title-container">
            <h1>Minha carteira</h1>
            <h2>Encontre todos os valores das suas cobranças</h2>
        </div>
        <div class="wallet-container">
            <div class="value-container">
                <div class="title-row">
                    <span>Cobranças</span>
                    <div class="visible-icon">
                        <svg v-if="isObfuscated" xmlns="http://www.w3.org/2000/svg" @click="toggleObfuscation" width="26"
                            height="20" viewBox="0 0 26 20" fill="none">
                            <path
                                d="M12.9977 0C9.35084 0 6.43061 1.64286 4.30475 3.59821C2.19243 5.53571 0.779707 7.85714 0.111709 9.45089C-0.0372364 9.80357 -0.0372364 10.1964 0.111709 10.5491C0.779707 12.1429 2.19243 14.4643 4.30475 16.4018C6.43061 18.3571 9.35084 20 12.9977 20C16.6446 20 19.5649 18.3571 21.6907 16.4018C23.8031 14.4598 25.2158 12.1429 25.8883 10.5491C26.0372 10.1964 26.0372 9.80357 25.8883 9.45089C25.2158 7.85714 23.8031 5.53571 21.6907 3.59821C19.5649 1.64286 16.6446 0 12.9977 0ZM6.49831 10C6.49831 8.29504 7.18307 6.6599 8.40195 5.45431C9.62083 4.24872 11.274 3.57143 12.9977 3.57143C14.7215 3.57143 16.3747 4.24872 17.5935 5.45431C18.8124 6.6599 19.4972 8.29504 19.4972 10C19.4972 11.705 18.8124 13.3401 17.5935 14.5457C16.3747 15.7513 14.7215 16.4286 12.9977 16.4286C11.274 16.4286 9.62083 15.7513 8.40195 14.5457C7.18307 13.3401 6.49831 11.705 6.49831 10ZM12.9977 7.14286C12.9977 8.71875 11.7024 10 10.1091 10C9.78865 10 9.48173 9.94643 9.19287 9.85268C8.94462 9.77232 8.65576 9.92411 8.66479 10.183C8.67833 10.4911 8.72346 10.7991 8.80922 11.1071C9.42757 13.3929 11.8062 14.75 14.1171 14.1384C16.428 13.5268 17.8001 11.1741 17.1818 8.88839C16.6808 7.03571 15.0243 5.79018 13.1828 5.71429C12.921 5.70536 12.7676 5.98661 12.8488 6.23661C12.9436 6.52232 12.9977 6.82589 12.9977 7.14286Z"
                                fill="black" fill-opacity="0.8" />
                        </svg>
                        <svg v-else @click="toggleObfuscation" xmlns="http://www.w3.org/2000/svg" width="27" height="22"
                            viewBox="0 0 27 22" fill="none">
                            <path
                                d="M1.63708 0.219377C1.19834 -0.132959 0.561321 -0.0513198 0.21539 0.395545C-0.130542 0.842411 -0.050387 1.49122 0.388355 1.84356L25.3629 21.7806C25.8017 22.133 26.4387 22.0513 26.7846 21.6045C27.1305 21.1576 27.0504 20.5088 26.6116 20.1564L22.1736 16.6159C23.8442 14.8714 24.9748 12.9164 25.5443 11.5285C25.6835 11.1891 25.6835 10.8109 25.5443 10.4715C24.9157 8.93755 23.5953 6.70322 21.621 4.83842C19.6382 2.95643 16.9087 1.37521 13.5 1.37521C10.6229 1.37521 8.22665 2.50526 6.35778 3.98765L1.63708 0.219377ZM9.4121 6.42393C10.4879 5.42278 11.9264 4.81264 13.5 4.81264C16.8538 4.81264 19.5749 7.58406 19.5749 11C19.5749 12.0699 19.3091 13.0753 18.8408 13.9519L17.2124 12.6543C17.5668 11.825 17.6596 10.8754 17.4149 9.9344C16.9467 8.15123 15.3984 6.95243 13.6772 6.87939C13.4325 6.87079 13.2891 7.14149 13.365 7.38211C13.4536 7.6571 13.5042 7.94929 13.5042 8.25436C13.5042 8.69263 13.403 9.10512 13.2258 9.47035L9.41632 6.42823L9.4121 6.42393ZM15.7359 16.7534C15.044 17.0327 14.2889 17.1874 13.5 17.1874C10.1462 17.1874 7.42511 14.4159 7.42511 11C7.42511 10.7035 7.4462 10.4156 7.48417 10.1321L3.50596 6.93954C2.5441 8.21569 1.85645 9.48753 1.45568 10.4715C1.31646 10.8109 1.31646 11.1891 1.45568 11.5285C2.08426 13.0625 3.40471 15.2968 5.37905 17.1616C7.36183 19.0436 10.0913 20.6248 13.5 20.6248C15.5165 20.6248 17.2926 20.0705 18.824 19.2283L15.7359 16.7534Z"
                                fill="black" fill-opacity="0.8" />
                        </svg>
                    </div>
                </div>
                <div class="value-row">
                    <span v-show="!isObfuscated">R$ {{ value }}</span>
                    <span v-show="isObfuscated">••••</span>
                </div>
            </div>
            <div class="user-container">
                <div class="name-container">
                    <span>NOME</span>
                    <span>USER</span>
                </div>
                <div class="dropdown">
                    <div class="month-container">
                        <span>Mês <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 6 4"
                                fill="none">
                                <path
                                    d="M2.57622 3.80476C2.8105 4.06508 3.19096 4.06508 3.42524 3.80476L5.82424 1.13914C5.99667 0.947547 6.04727 0.662241 5.95356 0.412339C5.85985 0.162437 5.64244 0 5.39879 0L0.600793 0.00208265C0.359019 0.00208265 0.139736 0.164519 0.0460246 0.414422C-0.0476863 0.664324 0.00479181 0.949629 0.175346 1.14122L2.57435 3.80685L2.57622 3.80476Z"
                                    fill="white" />
                            </svg></span>
                        <span>mm/yyyy</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-commission {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.title-container {
    margin-bottom: 3vh;

    h1 {
        color: rgba(0, 0, 0, 0.80);
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
    }

    h2 {
        color: rgba(0, 0, 0, 0.80);
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
}

.wallet-container {
    width: 24vw;

    .value-container {
        background-color: #FF820020;
        padding: 2rem;
        height: 18vh;

        .title-row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            span {
                color: rgba(0, 0, 0, 0.80);
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            .visible-icon {
                display: inline-block;
                vertical-align: middle;

                svg {
                    cursor: pointer;
                    transition: opacity 0.4s ease-in-out;
                }
            }
        }

        .value-row {
            margin-top: 8vh;
            display: inline-block;
            vertical-align: middle;

            span {
                color: rgba(0, 0, 0, 0.80);
                font-size: 28px;
                font-style: normal;
                font-weight: 900;
                line-height: normal;
                transition: opacity 0.3s ease-in-out;
            }
        }
    }

    .user-container {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        background-color: #FF8200;
        height: 5rem;
        padding: 1.5rem;
        flex-direction: row;
        display: flex;
        justify-content: space-between;

        .name-container {
            display: flex;
            flex-direction: column;
            color: #FFFFFF;
            font-size: 11px;
            font-weight: 500;
        }

        .month-container {
            display: flex;
            flex-direction: column;
            color: #FFFFFF;
            font-size: 11px;
            font-weight: 500;

            svg {
                margin-bottom: .2rem;
                cursor: pointer;
            }
        }
    }
}
</style>

