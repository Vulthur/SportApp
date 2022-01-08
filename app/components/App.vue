<template>
  <Page>
    <ActionBar class="action-bar">
      <StackLayout orientation="horizontal">
        <Label id="app-name" :text="currentMenu" horizontalAlignment="stretch" />
      </StackLayout>
    </ActionBar>

    <GridLayout rows="*,40">
      <ScrollView row="0">
        <StackLayout class="main" orientation="horizontal">
          <home v-if="currentMenu === menu.HOME"
            :user="userData.user"
            :exercices="userData.exercices">
          </home>
          <calendar v-else-if="currentMenu === menu.CALENDAR">
          </calendar>
          <user v-else-if="currentMenu === menu.USER">
          </user>
        </StackLayout>
      </ScrollView>
      <StackLayout row="1" class="bottom-buttons" orientation="horizontal">
        <Label
          @tap="selectMenu(menu.HOME)"
          text.decode="&#xf015;"
          class="fas"
          verticalAlignment="center"
          :class="{'selected': isMenu(menu.HOME)}"
        />
        <Label
          @tap="selectMenu(menu.CALENDAR)"
          text.decode="&#xf133;"
          class="fas"
          verticalAlignment="center"
          :class="{'selected': isMenu(menu.CALENDAR)}"
        />
        <Label
          @tap="selectMenu(menu.USER)"
          text.decode="&#xf007;"
          class="fas"
          verticalAlignment="center"
          :class="{'selected': isMenu(menu.USER)}"
        />
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
import Home from './Home'
import User from './User'
import Calendar from './Calendar'

const MENU = {
  HOME: "HOME",
  USER: "USER",
  CALENDAR: "CALENDAR",
}

export default {
  data() {
    return {
      menu: MENU,
      currentMenu: "HOME",
      userData: {
        user: {
          firstName: "Robert",
          lastName: "De la vuega",
        },
        exercices: [
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Streching my back",
            date: new Date()
          },
          {
            name: "Yoga of the pheonix",
            date: new Date()
          }
        ]
      }
    }
  },
  components: {
    Home,
    User,
    Calendar,
  },
  computed: {
  },
  methods: {
    selectMenu(menu) {
      this.currentMenu = menu
    },
    isMenu (menu) {
      return menu === this.currentMenu
    }
  },
};
</script>

<style lang="scss">
@import "@nativescript/theme/scss/variables/blue";

.fas {
  font-family: "Font Awesome 5 Free", "fa-solid-900";
}

#app-name {
  color: #fafafa;
}
.action-bar {
  color: #fafafa;
  background: #4c98d9;
  height: 10%;
}
.main {
  padding: 15%;
}
#logo {
  height: 40%;
  margin-right: 2%;
}
.bottom-buttons {
  background: #4c98d9;
}
.bottom-buttons > * {
  color: #fafafa;
  width: 33.3333%;
  font-size: 24px;
  text-align: center;
}
.selected {
  color: #10212f;
}
.text {
  font-size: 14px;
}
.text-little {
  font-size: 11px;
}
.title {
  font-size: 18px;
}
</style>
