<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SubMenuModules",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  emits: ['page'],
  data () {
    return {
      selected: {
        group: 0,
        item: 0
      },
      itemsData: []
    }
  },
  methods: {
    tradePage (page) {
      this.$emit('page', page)
    }
  },
  created() {
    this.itemsData = []
  },
  beforeMount() {
    this.itemsData = this.items
  }
})
</script>

<template>
  <div class="sub-menu-module">

    <div class="group-sub-menu" v-for="(group, index) in itemsData" :key="index">
      <ul>
        <li :style="'animation-delay: '+(index * .2)+'s'">
          <h3 class="title">{{ group.title }}</h3>
          <ul>
            <li v-for="(item, indexItem) in group.subItems"
                :key="indexItem"
                :class="{'selected' : selected.group === index && selected.item === indexItem}"
                @click="selected.group = index; selected.item = indexItem; tradePage(item)">
              {{ item.title }}
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped lang="scss">

.sub-menu-module {
  width: 14%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  border-right: 2px solid rgba(0, 0, 0, 0.12);
  padding: 3vh 1vw;
  @include flex(column, flex-start, initial, 2vh);
  overflow-x: hidden;

  .group-sub-menu {

    ul li {
      animation-name: left-to-right;
      animation-duration: .4s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
      opacity: 0;

      h3 {
        font-size: 1.8rem;
        font-weight: 500;
        padding: 1vh 0;
        color: rgba(0, 0, 0, 1);

      }

      ul {
        margin-bottom: 1vh;
        li {
          padding: 1.5vh .3vw;
          font-size: 1.2rem;
          font-weight: 500;
          border-radius: 7px;
          padding: 1.5vh 1vw;
          cursor: pointer;
          transition: background-color ease-in-out .2s;
          color: rgba(0, 0, 0, 1);

        }
      }

    }

    .selected {
      background-color: rgba(230, 242, 254, 1);
      color: rgba(2, 111, 238, 1);
      font-weight: 600;

    }
  }

}

@keyframes left-to-right {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>