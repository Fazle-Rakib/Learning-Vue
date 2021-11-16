<template>
  <div class="inProgress flex-container">
    <!-- <h2>This page is in progress...</h2> -->
    <img
      src="https://i0.wp.com/www.hadeninteractive.com/wp-content/uploads/2014/01/wip.jpg?fit=425%2C283&ssl=1"
      alt="img"
    />
  </div>
</template>

<style scoped>
.inProgress {
  /* background-color: DodgerBlue; */
  color: aliceblue;
  padding: 1px;
  border-radius: 5px;
  margin-top: 10px;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-container {
  display: flex;
  /* background-color: DodgerBlue; */
  flex-wrap: wrap;
  /* justify-content: space-around; */
  /* min-height: 400px; */
  /* text-align: initial; */
  /* margin-top: 5px; */
  /* width: 100%; */
}
.inProgress > img {
  /* width: 1050px; */
  width: 75%;
}
</style>
