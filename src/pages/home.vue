<script setup>
import sittingGirlWithLaptop from "@images/illustrations/sitting-girl-with-laptop.png";
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
</script>
<template>
  <div>
    <h1 class="title">{{$t('Welcome to sable dashboard')}}, {{ userRole }}</h1>
    <VImg
      :width="400"
      :src="sittingGirlWithLaptop"
      class="d-none d-sm-block mt-10 mx-auto"
    />
  </div>
</template>

<style>
.title {
  font-size: 50px;
  text-align: center;
  text-transform: capitalize;
}
</style>
