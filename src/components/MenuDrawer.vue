<template>

  <div>

    <q-header elevated>
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu"></q-btn>
        <q-toolbar-title>Southwest Electrolysis & Spa</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      bordered
      overlay
      behavior="mobile"
      v-model="drawer"
      :width="200"
    >
      <q-scroll-area class="fit">
        <q-list>

          <template v-for="(menuItem, index) in menuList">
            <q-item :key="index" @click="menuItem.onClick" clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon"></q-icon>
              </q-item-section>
              <q-item-section>{{ menuItem.label }}</q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator"></q-separator>
          </template>

        </q-list>
      </q-scroll-area>
    </q-drawer>

  </div>

</template>

<script lang="ts">
// decorators
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MenuDrawer extends Vue {

  drawer: boolean = false

  menuList = [
    {
      icon: 'group_add',
      label: 'Page 1',
      onClick: () => {},
      separator: true
    },
    {
      icon: 'group_add',
      label: 'Page 2',
      onClick: () => {},
      separator: true
    },
    {
      icon: 'group_add',
      label: 'Page 3',
      onClick: () => {},
      separator: true
    }
  ]
}
</script>