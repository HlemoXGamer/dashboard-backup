<script setup>
const pickedDate = ref(null);
const confirm = () => {
    emit('exit', true, pickedDate.value);
    pickedDate.value = null;
}
</script>
<template>
     <VDialog persistent class="v-dialog-sm">
          <DialogCloseBtn @click="$emit('close')" />
          <VCard :title="$t('Pick a custom Date')">
            <VCardText class="d-flex ">
              <AppDateTimePicker class="ms-1" prepend-inner-icon="tabler-calendar" v-model="pickedDate" />
            </VCardText>
            <VCardText class="d-flex justify-end gap-3 flex-wrap">
              <VBtn @click="confirm()" :loading="loading" :disabled="!pickedDate">
                {{ $t('Pick') }}
              </VBtn>
            </VCardText>
          </VCard>
        </VDialog>
</template>