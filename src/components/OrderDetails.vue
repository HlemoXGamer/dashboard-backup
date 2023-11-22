<script setup>
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()

const props = defineProps({
  products: {
    type: Array,
    default: [],
  },
  status: {
    type: String,
    default: "",
  },
});

const downloadImage = (image) => {
  const a = document.createElement("a");
  a.href = image;
  a.target = "_blank";
  a.click();
  a.remove();
};

const isDialogVisible = ref(false);

const productNotes = ref();

const putNotes = (notes) => {
  productNotes.value = notes;
  isDialogVisible.value = true;
};
const langIdentifier = computed(() => {
  if ($useI18n.locale.value === 'en') {
    return 'name_en';
  } else if ($useI18n.locale.value === 'ar') {
    return 'name_ar';
  }
});

</script>

<template>
  <div>
    <VDialog v-model="isDialogVisible" width="500">
      <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

      <VCard :title="$t('Product Notes')">
        <VCardText class="pb-0" v-for="note in productNotes">
          <p class="text-h5 py-0">{{ note.index + " - " + note.note }}</p>
        </VCardText>
        <VCardText class="d-flex justify-end">
          <VBtn @click="isDialogVisible = false"> {{ $t('Close') }} </VBtn>
        </VCardText>
      </VCard>
    </VDialog>

    <VCol class="mt-0 px-5 rounded pb-6" style="background-color: rgb(var(--v-theme-surface))">
      <VRow class="mx-0 my-0" align="center" justify="space-between">
        <p class="text-h4 pt-3 mb-0">{{ $t('Details') }}</p>
        <VChip class="text-h6" variant="tonal" color="success" size="default" v-if="props.status">{{
          props.status.toUpperCase() }}</VChip>
      </VRow>
      <VCol class="px-0 mx-0" v-for="product in props.products">
        <VCard class="px-5 py-3 mt-3" variant="tonal">
          <VCardText class="w-100 align-center">
            <VRow align="center" justify="space-between">
              <p class="text-h6 pb-0 mb-0 font-weight-bold">
                {{ product[langIdentifier] }}
              </p>
              <VRow justify="end" align="center">
                <p class="text-h6 pb-0 mb-0 me-5 font-weight-bold">
  {{ product.quantity }} X {{ product.price }} + 
  {{
    product.cart_extra_flavor.reduce((acc, flavor) => acc + Number(flavor.price), 0).toFixed(2)
  }} KWD =
  {{
    (Number(product.price * product.quantity) +
    product.cart_extra_flavor.reduce((acc, flavor) => acc + Number(flavor.price), 0)).toFixed(2)
  }} KWD
</p>

                <VBtn v-if="product.has_note == 1 && product.cart_notes.length > 0" size="small" class="px-2 me-3"
                  @click="putNotes(product.cart_notes)">{{ $t('Check Notes') }}</VBtn>
                <VChip size="large" color="primary" variant="flat" class="font-weight-bold justify-center align-center">{{
                  product.quantity }}</VChip>
              </VRow>
            </VRow>
            <VRow v-if="product.cart_extra_flavor?.length > 0">
              <VCard class="ma-5 ml-0 w-100" v-for="(item, index) in product.cart_extra_flavor" :key="index">
                <VCardText class="d-flex justify-between align-center">
                  <div>Name: {{ item.name }}</div>
                  <div>Price: {{ item.price }}</div>
                  <div>Quantity: {{ item.quantity }}</div>
                </VCardText>
              </VCard>
            </VRow>

            <VRow align="center" justify="space-between" class="mt-7"
              v-if="product.has_image == 1 && product.cart_images.length">
              <div class="mx-1 position-relative cart_image" v-for="image in product.cart_images">
                <div class="cart_image_download position-absolute d-flex align-center justify-center w-100 h-100">
                  <VBtn size="40" color="primary" rounded="xl" class="py-2 px-2" @click="downloadImage(image.file)">
                    <VIcon icon="tabler-cloud-download" size="22" />
                  </VBtn>
                </div>
                <VImg class="w-100 h-100" cover :src="image.file" />
              </div>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>
    </VCol>
  </div>
</template>

<style lang="scss" scoped>
.cart_image {
  width: 120px;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    .cart_image_download {
      opacity: 1;
      transition: 0.3s;
    }
  }

  .cart_image_download {
    background-color: rgba(0, 0, 0, 0.513);
    transition: 0.3s;
    opacity: 0;
    z-index: 10;
  }
}
</style>
