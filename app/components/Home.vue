<template>
  <StackLayout id="container-home"  rows="auto, *" columns="*">
    <Image
      id="logo"
      src.decode="font://&#xf44b;"
      class="fas"
      horizontalAlignment="stretch"
    />
    <Label
      class="text"
      textWrap="true"
      v-if="user"
      :text="`Hi ${user.firstName} ${user.lastName}, you have ${nbTodayExercice} execices planned today.`"
    />
    <Label
      class="text"
      textWrap="true"
      v-else
      :text="`Hi, you have ${nbTodayExercice} execices planned today.`"
    />

    <template v-if="user">
      <Label
        class="text"
        textWrap="true"
        text="You still not have an account, create one to enjoy the full potential of our application"
      />
      <Button text="Account" @tap="createUser" />
    </template>
    <template v-if="exercices.length > 0">
      <Label class="text-little" textWrap="true" text="Today exercices" />
      <ListView
        id="list-exercice"
        for="exercice in todayExercices"
        @itemTap="selectExercices"
      >
        <v-template>
          <FlexboxLayout
            class="exercice"
            justifyContent="space-between"
            alignContent="space-between"
          >
            <Label class="text" :text="exercice.name" />
            <Label :text="`${exercice.date.getHours()}:${exercice.date.getMinutes()}`"/>
          </FlexboxLayout>
        </v-template>
      </ListView>
    </template>
    <template v-else>
      <Label
        textWrap="true"
        text="No exercices planned today let`s create one !"
      />
      <Button text="Exercices" @tap="createExercice" />
    </template>
  </StackLayout>
</template>

<script>
export default {
  props: {
    user: Object,
    exercices: Array,
  },
  computed: {
    todayExercices() {
      const today = new Date();
      console.log(today.getFullYear());
      return this.exercices.filter((exercice) =>
        this.sameDay(exercice.date, today)
      );
    },
  },
  methods: {
    sameDay(d1, d2) {
      return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
      );
    },
  },
};
</script>

<style>
#container-home > * {
  margin-bottom: 60px;
}
#list-exercice {
  margin-top: -55px;
  height: 500px;
  width: 100%;

  border: 1px solid black;
}
.exercice {
  width: 100%;
  padding: 0;
  margin: 0;
  border: 1px solid black;
}
</style>