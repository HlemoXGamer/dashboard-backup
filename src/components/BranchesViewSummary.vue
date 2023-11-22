<script setup>
import { get as getCities } from "@/apis/admin/cities";
const cities = ref([]);
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
const _getCities = () => {
  getCities().then(({ data, meta }) => {
    cities.value = data.data;
    console.log(cities.value);
  });
};
onMounted(() => {
  _getCities();
  
});
</script>
<template>
  <VCard rounded="lg" class="pb-6 px-0" variant="flat">
    <VCardText>
      <p class="text-h4 py-1 mb-3">{{ $t("Branches Details") }}</p>
      <VRow class="px-2 mt-3">
        <VCol>
          <AppTextField
            readonly
            :label="$t('Name')"
            class="mx-4 flex-grow-1"
            v-model="data.name_en"
          ></AppTextField>
        </VCol>
        <VCol>
          <AppTextField
            readonly
            :label="$t('Phone Number')"
            class="mx-4 flex-grow-1"
            v-model="data.phone_no"
          ></AppTextField>
        </VCol>
        <VCol>
          <AppTextField
            readonly
            :label="$t('Email')"
            class="mx-4 flex-grow-1"
            v-model="data.email"
          ></AppTextField>
        </VCol>
      </VRow>
      <VRow class="px-2 mt-7">
        <VCol>
          <VCombobox
            readonly
            class="mx-4 flex-grow-1"
            v-model="data.days"
            :label="$t('Working Days')"
            :return-object="false"
            :items="data.days"
            multiple
            style="width: 100%"
            variant="outlined"
            item-value="id"
            item-title="name"
          >
          </VCombobox>
        </VCol>
        <VCol>
          <AppTextField
            readonly
            :label="$t('Start Working Hours')"
            class="mx-4 flex-grow-1"
            v-model="data.start"
          ></AppTextField>
        </VCol>
        <VCol>
          <AppTextField
            readonly
            :label="$t('End Working Hours')"
            class="mx-4 flex-grow-1"
            v-model="data.end"
          ></AppTextField>
        </VCol>
      </VRow>
      <VRow class="px-2 mt-7">
        <VCol>
          <AppTextField
            readonly
            :label="$t('Estimate Time')"
            class="mx-4 flex-grow-1"
            v-model="data.est_time"
          ></AppTextField>
        </VCol>
        <VCol>
          <AppTextField
            readonly
            :label="$t('Branch Code')"
            class="mx-4 flex-grow-1"
            v-model="data.code"
          ></AppTextField>
        </VCol>
        <VCol>
          <VCombobox
            readonly
            class="mx-4 flex-grow-1"
            v-model="cities"
            :label="$t('Cities')"
            :return-object="false"
            :items="cities"
            multiple
            style="width: 100%"
            variant="outlined"
            item-value="id"
            item-title="name"
          >
          </VCombobox>
        </VCol>
      </VRow>
      <VRow class="px-2 mt-7">
        <VCol>
          <VCombobox
            readonly
            class="mx-4 flex-grow-1"
            v-model="data.areas"
            :label="$t('Areas')"
            :return-object="false"
            :items="data.areas"
            multiple
            style="width: 100%"
            variant="outlined"
            item-value="id"
            item-title="name"
          >
          </VCombobox>
        </VCol>
        <VCol>
          <AppTextField
            readonly
            :label="$t('Street Name')"
            class="mx-4 flex-grow-1"
            v-model="data.street_name"
          ></AppTextField>
        </VCol>
        <VCol>
          <AppTextField
            readonly
            :label="$t('Building Number')"
            class="mx-4 flex-grow-1"
            v-model="data.building_no"
          ></AppTextField>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
